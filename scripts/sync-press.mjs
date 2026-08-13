import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  updateDoc,
  where,
  getFirestore,
} from "firebase/firestore";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const articlesPath = path.join(
  projectRoot,
  "src",
  "pages",
  "Promotion",
  "pressArticlesData.json"
);

const args = process.argv.slice(2);
const shouldDeleteMissing = args.includes("--delete-missing");
const siteArg = args.find((arg) => arg.startsWith("--site="));

const firebaseConfig = {
  apiKey:
    process.env.REACT_APP_FIREBASE_API_KEY ||
    "AIzaSyCF-VkBwK00M3f7ni5SBlv3K1-H5UvqnAI",
  authDomain:
    process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ||
    "jihun-af54b.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "jihun-af54b",
  storageBucket:
    process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ||
    "jihun-af54b.firebasestorage.app",
  messagingSenderId:
    process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "170957318472",
  appId:
    process.env.REACT_APP_FIREBASE_APP_ID ||
    "1:170957318472:web:b1e338324d946aa0662b7d",
  measurementId:
    process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-HPEHB29YSL",
};

const siteId =
  siteArg?.replace("--site=", "").trim() ||
  process.env.REACT_APP_SITE_ID ||
  "고덕 제일풍경채";

const collectionName = process.env.REACT_APP_FIREBASE_PRESS_COLLECTION || "press";
const adminEmail = process.env.FIREBASE_ADMIN_EMAIL;
const adminPassword = process.env.FIREBASE_ADMIN_PASSWORD;

const requiredFields = ["slug", "title", "summary", "content"];

const normalizeSourceUrl = (value = "") => {
  const rawValue = String(value).trim();
  if (!rawValue) return "";

  const matchedUrl =
    rawValue.match(/https?:\/\/[^\s)]+/i)?.[0] ||
    rawValue.match(/www\.[^\s)]+/i)?.[0] ||
    "";

  if (!matchedUrl) return "";
  if (/^https?:\/\//i.test(matchedUrl)) return matchedUrl;

  return `https://${matchedUrl}`;
};

const readArticles = async () => {
  const raw = await fs.readFile(articlesPath, "utf8");
  const articles = JSON.parse(raw);

  if (!Array.isArray(articles)) {
    throw new Error("pressArticlesData.json must contain an array.");
  }

  articles.forEach((article, index) => {
    requiredFields.forEach((field) => {
      if (!String(article[field] || "").trim()) {
        throw new Error(`Article #${index + 1} is missing "${field}".`);
      }
    });
  });

  return articles;
};

const getExistingDocs = async (db) => {
  const pressQuery = query(
    collection(db, collectionName),
    where("siteId", "==", siteId),
    limit(200)
  );
  const snap = await getDocs(pressQuery);

  return snap.docs.map((item) => ({ id: item.id, ...item.data() }));
};

const main = async () => {
  if (!adminEmail || !adminPassword) {
    console.error(
      [
        "Firebase admin login is required.",
        "PowerShell example:",
        '$env:FIREBASE_ADMIN_EMAIL="eyeful31@naver.com"',
        '$env:FIREBASE_ADMIN_PASSWORD="YOUR_PASSWORD"',
        "npm run press:sync",
      ].join("\n")
    );
    process.exit(1);
  }

  const articles = await readArticles();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  await signInWithEmailAndPassword(auth, adminEmail, adminPassword);

  const existingDocs = await getExistingDocs(db);
  const existingBySlug = new Map(
    existingDocs
      .filter((article) => article.slug)
      .map((article) => [article.slug, article])
  );
  const syncedSlugs = new Set();

  for (const article of articles) {
    const slug = String(article.slug).trim();
    syncedSlugs.add(slug);

    const payload = {
      siteId,
      slug,
      source: article.source || `${siteId} 공식`,
      label: article.label || "언론보도",
      title: article.title,
      summary: article.summary,
      content: article.content,
      sourceUrl: normalizeSourceUrl(article.sourceUrl),
      image: article.image || "",
      seoImage: article.seoImage || article.image || "",
      date: article.publishedAt || article.date || serverTimestamp(),
      publishedAt: article.publishedAt || "",
      updatedAt: serverTimestamp(),
    };

    const existing = existingBySlug.get(slug);

    if (existing) {
      await updateDoc(doc(db, collectionName, existing.id), payload);
      console.log(`updated: ${slug} ${article.title}`);
    } else {
      await addDoc(collection(db, collectionName), {
        ...payload,
        views: 0,
        authorEmail: adminEmail,
      });
      console.log(`created: ${slug} ${article.title}`);
    }
  }

  if (shouldDeleteMissing) {
    for (const existing of existingDocs) {
      if (existing.slug && !syncedSlugs.has(existing.slug)) {
        await deleteDoc(doc(db, collectionName, existing.id));
        console.log(`deleted: ${existing.slug} ${existing.title || ""}`);
      }
    }
  } else {
    const missingCount = existingDocs.filter(
      (existing) => existing.slug && !syncedSlugs.has(existing.slug)
    ).length;

    if (missingCount > 0) {
      console.log(
        `skipped ${missingCount} existing Firebase posts. Use press:sync:delete-missing to delete removed JSON posts.`
      );
    }
  }

  console.log(`done: ${siteId}`);
};

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

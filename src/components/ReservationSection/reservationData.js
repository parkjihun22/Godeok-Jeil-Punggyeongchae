const reservationData = {
  eyebrow: "RESERVATION",
  title: "모델하우스 방문예약",
  description:
    "고덕 제일풍경채 방문예약을 남겨주시면 전문 상담원이 순차적으로 연락드려 모델하우스 위치, 방문 가능 시간, 상담 준비 사항을 안내드립니다.",
  notice:
    "방문 전 관심 평형과 상담 희망 내용을 남겨주시면 전용 84㎡, 101㎡ 평면 비교와 청약 일정, 계약 조건 상담을 더 정확하게 도와드릴 수 있습니다.",
  formAction: "https://formspree.io/f/xjgngozq",
  points: [
    {
      id: "address",
      label: "ADDRESS SMS",
      title: "모델하우스 주소 안내",
      text: "예약 등록 후 상담 절차에 따라 모델하우스 위치와 방문 안내를 확인하실 수 있습니다.",
    },
    {
      id: "unit",
      label: "UNIT CHECK",
      title: "관심 평형 상담",
      text: "84A, 84B, 84C, 101㎡ 타입별 평면과 실거주 동선을 비교해 안내합니다.",
    },
    {
      id: "schedule",
      label: "SALES GUIDE",
      title: "분양 일정 안내",
      text: "청약 일정, 분양가, 계약 조건 등 의사결정에 필요한 정보를 상담합니다.",
    },
  ],
  fields: [
    {
      id: "name",
      name: "name",
      label: "고객명",
      type: "text",
      placeholder: "고객명을 입력해 주세요",
      required: true,
      autoComplete: "name",
    },
    {
      id: "phone",
      name: "phone",
      label: "연락처",
      type: "tel",
      placeholder: "010-0000-0000",
      required: true,
      inputMode: "tel",
      autoComplete: "tel",
      pattern: "^01[0-9][-\\s]?[0-9]{3,4}[-\\s]?[0-9]{4}$",
      title: "예: 01012345678 또는 010-1234-5678",
    },
  ],
  messageField: {
    id: "message",
    name: "message",
    label: "문의 내용",
    placeholder: "관심 평형, 방문 희망일, 상담 희망 내용을 남겨주세요",
    rows: 5,
  },
  submitLabel: "방문예약 등록",
};

export default reservationData;

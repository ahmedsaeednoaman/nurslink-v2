type Review = {
    reviewer: string;
    comment: string;
    rating: number;
  };
  
  const dummyReviews: Review[] = [
    {
      reviewer: 'د. أحمد توفيق',
      comment: 'ممرضة محترفة وملتزمة، أداء ممتاز تحت الضغط.',
      rating: 5,
    },
    {
      reviewer: 'د. هبة حسن',
      comment: 'متعاونة جدًا مع فريق الطوارئ.',
      rating: 4,
    },
  ];
  
  export default function ReviewList() {
    return (
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-secondary mb-4">⭐ الت
  
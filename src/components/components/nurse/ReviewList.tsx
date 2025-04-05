type Review = {
  reviewer: string;
  comment: string;
  rating: number;
};

const dummyReviews: Review[] = [
  { reviewer: 'مستخدم 1', comment: 'تعليق رائع جداً', rating: 5 },
  { reviewer: 'مستخدم 2', comment: 'ممتاز ويستحق التقدير', rating: 4 },
];

export default function ReviewList() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-secondary mb-4">⭐ التقييمات</h2>
      <ul className="space-y-4">
        {dummyReviews.map((review, index) => (
          <li key={index} className="bg-white p-4 rounded shadow">
            <p className="font-bold">{review.reviewer}</p>
            <p className="text-sm">{review.comment}</p>
            <p className="text-yellow-500">⭐ {review.rating} / 5</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

"use client";

import { useState } from 'react';

type Review = {
  id: number;
  name: string;
  comment: string;
  rating: number;
};

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: 'د. منى محمود',
      comment: 'ممرضة محترفة جدًا وسريعة الاستجابة في الطوارئ.',
      rating: 5,
    },
    {
      id: 2,
      name: 'مستشفى الحياة',
      comment: 'قدّمت رعاية ممتازة للمرضى لمدة 3 شهور.',
      rating: 4,
    },
  ]);

  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);

  const handleSubmit = () => {
    const newReview = {
      id: reviews.length + 1,
      name: 'زائر',
      comment: newComment,
      rating: newRating,
    };
    setReviews([newReview, ...reviews]);
    setNewComment('');
    setNewRating(5);
  };

  return (
    <div className="p-8 min-h-screen bg-background">
      <h1 className="text-3xl font-bold text-primary mb-6">⭐ تقييمات الممرضين</h1>

      {/* نموذج تقييم جديد */}
      <div className="bg-white p-4 rounded-md shadow-md mb-8">
        <h2 className="text-lg font-semibold mb-2">📝 أضف تقييمك:</h2>
        <textarea
          className="w-full border rounded-md p-2 mb-2"
          rows={3}
          placeholder="اكتب تعليقك..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <div className="flex items-center gap-4 mb-2">
          <label className="text-sm">⭐ التقييم:</label>
          <select
            value={newRating}
            onChange={(e) => setNewRating(parseInt(e.target.value))}
            className="border rounded-md px-2 py-1"
          >
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-primary text-white rounded-md"
        >
          نشر التقييم
        </button>
      </div>

      {/* عرض التقييمات */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded-md shadow">
            <p className="font-semibold">{review.name}</p>
            <p className="text-sm text-gray-600 mt-1">{review.comment}</p>
            <p className="text-yellow-500 mt-1">⭐ {review.rating} / 5</p>
          </div>
        ))}
      </div>
    </div>
  );
}



'use client';

interface CommentSectionProps {
  comments: string[];
}

export default function CommentSection({ comments }: CommentSectionProps) {
  return (
    <div className='mt-4'>
      <h4 className='font-semibold mb-2'>💬 التعليقات</h4>
      <ul className='list-disc list-inside'>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

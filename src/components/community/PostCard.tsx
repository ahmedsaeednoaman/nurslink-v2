'use client';

interface PostCardProps {
  title: string;
  content: string;
}

export default function PostCard({ title, content }: PostCardProps) {
  return (
    <div className='bg-white rounded-xl shadow-md p-6 mb-4'>
      <h3 className='text-xl font-bold mb-2'>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

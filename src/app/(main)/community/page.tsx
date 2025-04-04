'use client';

import React, { useState } from 'react';

type Post = {
  id: number;
  author: string;
  content: string;
  image?: string;
  likes: number;
};

const initialPosts: Post[] = [
  {
    id: 1,
    author: "د. سارة محمد",
    content: "أهم خطوات التعامل مع مرضى الضغط العالي في الطوارئ...",
    image: "/images/post1.jpg",
    likes: 4,
  },
  {
    id: 2,
    author: "م. أحمد علي",
    content: "تم افتتاح دورة جديدة عن الإسعافات الأولية الأسبوع المقبل!",
    likes: 2,
  },
];

export default function CommunityPage() {
  const [posts, setPosts] = useState(initialPosts);

  const handleLike = (id: number) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="bg-background min-h-screen p-6">
      <h1 className="text-3xl font-bold text-primary mb-6">🧑‍🤝‍🧑 المجتمع التفاعلي</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-md shadow-md">
            <h2 className="font-semibold text-lg text-primary">{post.author}</h2>
            <p className="mt-2 text-gray-700">{post.content}</p>
            {post.image && (
              <img
                src={post.image}
                alt="post"
                className="mt-4 rounded-md max-h-64 object-cover"
              />
            )}
            <div className="mt-4 flex items-center gap-4 text-sm">
              <button
                onClick={() => handleLike(post.id)}
                className="text-primary hover:underline"
              >
                ❤️ أعجبني
              </button>
              <span>{post.likes} إعجابات</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

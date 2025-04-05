"use client";

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddNursePage() {
  const [form, setForm] = useState({
    name: '',
    specialty: '',
    bio: '',
    experience: '',
    rating: 5,
    certificates: '',
  })

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/nurses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        certificates: form.certificates.split(','),
      }),
    })

    if (response.ok) {
      router.push('/(main)/nurses')
    }
  }

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold text-primary mb-6">➕ إضافة ممرض جديد</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="الاسم" required onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="specialty" placeholder="التخصص" required onChange={handleChange} className="w-full border p-2 rounded" />
        <textarea name="bio" placeholder="النبذة" required onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="experience" placeholder="الخبرة (مثال: 5 سنوات)" required onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="certificates" placeholder="الشهادات (مفصولة بـ ,)" onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="number" name="rating" placeholder="التقييم (من 1 لـ 5)" min="1" max="5" defaultValue={5} onChange={handleChange} className="w-full border p-2 rounded" />
        <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90">حفظ</button>
      </form>
    </div>
  )
}


'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'NURSE' | 'HOSPITAL'>('NURSE');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'حدث خطأ ما');
      } else {
        setSuccess('تم التسجيل بنجاح! سيتم توجيهك لصفحة الدخول...');
        setTimeout(() => router.push('/login'), 1500);
      }
    } catch (err) {
      console.error(err);
      setError('فشل في الاتصال بالسيرفر');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4 text-secondary">إنشاء حساب جديد</h1>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          placeholder="الاسم الكامل"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as 'NURSE' | 'HOSPITAL')}
          className="w-full p-2 border rounded"
        >
          <option value="NURSE">ممرض/ـة</option>
          <option value="HOSPITAL">مستشفى / مؤسسة</option>
        </select>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}

        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded hover:bg-btn-hover transition"
        >
          إنشاء حساب
        </button>
      </form>
    </div>
  );
}

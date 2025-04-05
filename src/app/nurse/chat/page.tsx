"use client";

import { useState } from 'react';

const users = ['م. أحمد', 'م. سارة', 'م. نورا'];

export default function NurseChatPage() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [messages, setMessages] = useState<{ from: string; text: string }[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() && selectedUser) {
      setMessages([...messages, { from: 'أنا', text: input }]);
      setInput('');
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* القائمة الجانبية */}
      <aside className="w-1/4 bg-white border-r p-4">
        <h2 className="text-lg font-semibold text-primary mb-4">الممرضين المتاحين</h2>
        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user}
              onClick={() => setSelectedUser(user)}
              className={`p-2 rounded cursor-pointer ${selectedUser === user ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}
            >
              {user}
            </li>
          ))}
        </ul>
      </aside>

      {/* منطقة الشات */}
      <main className="flex-1 p-6 flex flex-col">
        {selectedUser ? (
          <>
            <h3 className="text-xl font-bold text-primary mb-4">الدردشة مع {selectedUser}</h3>

            <div className="flex-1 bg-white p-4 rounded-md shadow-inner overflow-y-auto mb-4 space-y-2">
              {messages.map((msg, index) => (
                <div key={index} className={`text-sm p-2 rounded-md w-fit ${msg.from === 'أنا' ? 'bg-primary text-white ml-auto' : 'bg-gray-200 text-right'}`}>
                  <strong>{msg.from}: </strong>{msg.text}
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="اكتب رسالتك..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 p-2 border rounded-md"
              />
              <button
                onClick={sendMessage}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90"
              >
                إرسال
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500 m-auto">اختر ممرض لبدء المحادثة</p>
        )}
      </main>
    </div>
  );
}


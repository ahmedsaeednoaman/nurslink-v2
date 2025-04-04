'use client';

export default function ShoppingCartSidebar() {
  const dummyCart = [
    { id: 1, name: 'سماعة طبية', quantity: 1, price: 320 },
    { id: 2, name: 'زي تمريضي', quantity: 2, price: 210 },
  ];

  const total = dummyCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <aside className="w-64 bg-white border-l shadow px-4 py-6 hidden md:block">
      <h2 className="text-xl font-bold text-secondary mb-4">🛒 سلة المشتريات</h2>
      <ul className="space-y-4">
        {dummyCart.map((item) => (
          <li key={item.id} className="text-sm">
            <div className="flex justify-between items-center">
              <span>{item.name} × {item.quantity}</span>
              <span className="text-primary font-semibold">{item.price * item.quantity} ج.م</span>
            </div>
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      <div className="text-right font-bold text-primary text-lg">
        الإجمالي: {total} ج.م
      </div>
      <button className="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-btn-hover transition">
        إتمام الشراء
      </button>
    </aside>
  );
}

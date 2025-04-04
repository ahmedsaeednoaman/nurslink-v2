'use client';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-background p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-6">إتمام الشراء</h1>

      {/* ملخص الطلب */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">🧾 ملخص الطلب</h2>
        <ul className="text-sm text-gray-700 mb-2">
          <li>1x كمامة طبية - 50 جنيه</li>
          <li>1x قفازات طبية - 90 جنيه</li>
        </ul>
        <p className="font-semibold text-primary mt-2">الإجمالي: 140 جنيه</p>
      </div>

      {/* بيانات المستخدم */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">📋 بيانات العميل</h2>
        <form className="space-y-4">
          <input type="text" placeholder="الاسم الكامل" className="w-full p-2 border rounded-md" />
          <input type="text" placeholder="العنوان" className="w-full p-2 border rounded-md" />
          <input type="tel" placeholder="رقم الهاتف" className="w-full p-2 border rounded-md" />
        </form>
      </div>

      {/* الدفع */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">💳 طريقة الدفع</h2>
        <select className="w-full p-2 border rounded-md mb-4">
          <option>اختر طريقة الدفع</option>
          <option>الدفع عند الاستلام</option>
          <option>Visa / Mastercard</option>
          <option>فوري / Vodafone Cash</option>
        </select>
        <button className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-opacity-90">
          تأكيد الطلب
        </button>
      </div>
    </div>
  );
}

import ProductGrid from '@/components/store/ProductGrid';
import ShoppingCartSidebar from '@/components/store/ShoppingCartSidebar';

export default function StorePage() {
  return (
    <div className="flex">
      {/* Sidebar (سلة المشتريات) */}
      <ShoppingCartSidebar />
      
      {/* المنتجات */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6 text-secondary">المتجر</h1>
        <ProductGrid />
      </main>
    </div>
  );
}

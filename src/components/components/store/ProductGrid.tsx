type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

import ProductCard from './ProductCard';

const dummyProducts: Product[] = [
  { id: 1, name: 'منتج تجريبي', price: 100, image: '/images/default.jpg' }
];

export default function ProductGrid() {
  const handleAddToCart = (product: Product) => {
    console.log('✅ تمت إضافة المنتج:', product.name);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {dummyProducts.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}

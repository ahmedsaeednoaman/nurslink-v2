'use client';

import ProductCard from './ProductCard';

const dummyProducts = [
  {
    id: '1',
    name: 'سماعة طبية احترافية',
    price: 320,
    image: '/images/stethoscope.jpg',
  },
  {
    id: '2',
    name: 'زي تمريضي أزرق',
    price: 210,
    image: '/images/nurse-uniform.jpg',
  },
  {
    id: '3',
    name: 'كحول طبي 70%',
    price: 50,
    image: '/images/alcohol.jpg',
  },
];

export default function ProductGrid() {
  const handleAddToCart = (product: any) => {
    console.log('🛒 تمت إضافة:', product.name);
    // ممكن لاحقًا نربطها مع Zustand أو Context
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {dummyProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

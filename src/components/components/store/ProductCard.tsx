import Image from 'next/image';
type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  
  type ProductCardProps = {
    product: Product;
    onAddToCart: (product: Product) => void;
  };
  
  export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
    return (
      <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover mb-4 rounded"
        />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600 mb-2">{product.price} EGP</p>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          أضف للعربة
        </button>
      </div>
    );
  }
  


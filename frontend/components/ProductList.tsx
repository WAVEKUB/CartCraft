"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProductImage {
  downloadUrl: string;
}

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  images: ProductImage[];
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8084/api/v1/products/all');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Fetched products data:', data); // Debug log
        // Handle both array and object response
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (data && Array.isArray(data.products)) {
          setProducts(data.products);
        } else if (data && Array.isArray(data.data)) {
          setProducts(data.data);
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] animate-pulse">
            <div className="relative w-full h-80 bg-gray-200 rounded-md"></div>
            <div className="flex justify-between">
              <div className="h-4 bg-gray-200 rounded w-24"></div>
              <div className="h-4 bg-gray-200 rounded w-16"></div>
            </div>
            <div className="h-3 bg-gray-200 rounded w-full"></div>
            <div className="h-8 bg-gray-200 rounded w-24"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-12 text-center">
        <div className="text-red-500 mb-4">Error: {error}</div>
        <button 
          onClick={() => window.location.reload()} 
          className="bg-craftcart text-white px-4 py-2 rounded-md hover:bg-opacity-90"
        >
          Retry
        </button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="mt-12 text-center text-gray-500">
        No products found.
      </div>
    );
  }

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
              <Image
                src={product.images && product.images.length > 0 ? "http://localhost:8084" + product.images[0].downloadUrl : '/no-image.png'}
                alt={product.name}
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
              />
              <Image
                src={product.images && product.images.length > 0 ? "http://localhost:8084" + product.images[1].downloadUrl : '/no-image.png'}
                alt={product.name}
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
              />
            </div>
            <div className="flex justify-between">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">{product.price}</span>
            </div>
            <div className="text-sm text-gray-500">{product.description}</div>
            <button className="rounded-2xl ring-1 ring-craftcart text-craftcart w-max py-2 px-4 text-xs hover:bg-craftcart hover:text-white">Add to Cart</button>
          </Link>
          
        ))}
    </div>
  )
};

export default ProductList;

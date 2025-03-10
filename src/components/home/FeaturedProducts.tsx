'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Sample product data - in a real app, this would come from an API or database
const products = [
  {
    id: '1',
    name: 'BTS Dynamite T-Shirt',
    price: 29.99,
    image: 'https://via.placeholder.com/500x600?text=BTS+Dynamite+Shirt',
    slug: 'bts-dynamite-tshirt',
    group: 'BTS',
    isNew: true,
    isBestSeller: true,
  },
  {
    id: '2',
    name: 'Blackpink Born Pink Hoodie',
    price: 49.99,
    image: 'https://via.placeholder.com/500x600?text=Blackpink+Hoodie',
    slug: 'blackpink-born-pink-hoodie',
    group: 'Blackpink',
    isNew: true,
    isBestSeller: false,
  },
  {
    id: '3',
    name: 'Twice Ready To Be T-Shirt',
    price: 27.99,
    image: 'https://via.placeholder.com/500x600?text=Twice+Shirt',
    slug: 'twice-ready-to-be-tshirt',
    group: 'Twice',
    isNew: false,
    isBestSeller: true,
  },
  {
    id: '4',
    name: 'Stray Kids ODDINARY Cap',
    price: 24.99,
    image: 'https://via.placeholder.com/500x600?text=Stray+Kids+Cap',
    slug: 'stray-kids-oddinary-cap',
    group: 'Stray Kids',
    isNew: false,
    isBestSeller: false,
  },
];

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredProducts = activeTab === 'all' 
    ? products 
    : activeTab === 'new' 
      ? products.filter(product => product.isNew)
      : products.filter(product => product.isBestSeller);

  return (
    <section className="py-16 bg-[color:var(--light-gray)]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-[color:var(--dark-gray)] max-w-2xl mx-auto">
            Discover our most popular K-pop merchandise, from t-shirts and hoodies to accessories and collectibles.
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === 'all'
                  ? 'bg-[color:var(--primary)] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('all')}
            >
              All Products
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'new'
                  ? 'bg-[color:var(--primary)] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('new')}
            >
              New Arrivals
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === 'bestsellers'
                  ? 'bg-[color:var(--primary)] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('bestsellers')}
            >
              Best Sellers
            </button>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/shop" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: any }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="relative h-64 overflow-hidden">
        <Link href={`/product/${product.slug}`}>
          <div className="relative h-full w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Link>
        
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-[color:var(--primary)] text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </div>
        )}
        
        {product.isBestSeller && (
          <div className="absolute top-2 right-2 bg-[color:var(--secondary)] text-white text-xs font-bold px-2 py-1 rounded">
            BEST SELLER
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => {
              // In a real app, this would add the product to the cart
              console.log('Added to cart:', product);
            }}
            className="w-full bg-white text-[color:var(--primary)] font-medium py-2 rounded hover:bg-[color:var(--primary-light)] hover:text-white transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="text-xs text-[color:var(--primary)] font-medium mb-1">{product.group}</div>
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-medium mb-1 hover:text-[color:var(--primary)] transition-colors">{product.name}</h3>
        </Link>
        <div className="font-bold text-lg">${product.price.toFixed(2)}</div>
      </div>
    </div>
  );
};

// Mock cart hook - in a real app, you would use a proper cart management solution
const useCart = () => {
  const addToCart = (product: any) => {
    console.log('Added to cart:', product);
  };
  
  return { addToCart };
};

export default FeaturedProducts; 
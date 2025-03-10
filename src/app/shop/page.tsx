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
  {
    id: '5',
    name: 'EXO Planet T-Shirt',
    price: 28.99,
    image: 'https://via.placeholder.com/500x600?text=EXO+Shirt',
    slug: 'exo-planet-tshirt',
    group: 'EXO',
    isNew: true,
    isBestSeller: false,
  },
  {
    id: '6',
    name: 'ITZY Checkmate Hoodie',
    price: 47.99,
    image: 'https://via.placeholder.com/500x600?text=ITZY+Hoodie',
    slug: 'itzy-checkmate-hoodie',
    group: 'ITZY',
    isNew: false,
    isBestSeller: true,
  },
  {
    id: '7',
    name: 'NCT Dream T-Shirt',
    price: 26.99,
    image: 'https://via.placeholder.com/500x600?text=NCT+Dream+Shirt',
    slug: 'nct-dream-tshirt',
    group: 'NCT Dream',
    isNew: false,
    isBestSeller: false,
  },
  {
    id: '8',
    name: 'Seventeen Tour T-Shirt',
    price: 29.99,
    image: 'https://via.placeholder.com/500x600?text=Seventeen+Shirt',
    slug: 'seventeen-tour-tshirt',
    group: 'Seventeen',
    isNew: true,
    isBestSeller: true,
  },
];

export default function ShopPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] py-12 mb-12">
        <div className="container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop All Products</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Browse our collection of high-quality K-pop merchandise. From t-shirts and hoodies to accessories and collectibles.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container-custom">
        {/* Filters - In a real app, these would be functional */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)]">
                <option>All Groups</option>
                <option>BTS</option>
                <option>Blackpink</option>
                <option>Twice</option>
                <option>Stray Kids</option>
                <option>EXO</option>
                <option>ITZY</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)]">
                <option>All Categories</option>
                <option>T-Shirts</option>
                <option>Hoodies</option>
                <option>Accessories</option>
                <option>Albums</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)]">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
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
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mb-8">
          <nav className="inline-flex rounded-md shadow">
            <a href="#" className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Previous
            </a>
            <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-[color:var(--primary)]">
              1
            </a>
            <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-[color:var(--primary)]">
              2
            </a>
            <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-[color:var(--primary)]">
              3
            </a>
            <a href="#" className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              Next
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
} 
import Link from 'next/link';
import Image from 'next/image';

// Sample group data - in a real app, this would come from an API or database
const groups = [
  {
    id: '1',
    name: 'BTS',
    image: 'https://via.placeholder.com/300x300?text=BTS',
    slug: 'bts',
    productCount: 24,
  },
  {
    id: '2',
    name: 'Blackpink',
    image: 'https://via.placeholder.com/300x300?text=Blackpink',
    slug: 'blackpink',
    productCount: 18,
  },
  {
    id: '3',
    name: 'Twice',
    image: 'https://via.placeholder.com/300x300?text=Twice',
    slug: 'twice',
    productCount: 16,
  },
  {
    id: '4',
    name: 'Stray Kids',
    image: 'https://via.placeholder.com/300x300?text=Stray+Kids',
    slug: 'stray-kids',
    productCount: 14,
  },
  {
    id: '5',
    name: 'EXO',
    image: 'https://via.placeholder.com/300x300?text=EXO',
    slug: 'exo',
    productCount: 12,
  },
  {
    id: '6',
    name: 'ITZY',
    image: 'https://via.placeholder.com/300x300?text=ITZY',
    slug: 'itzy',
    productCount: 10,
  },
];

const FeaturedGroups = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular K-pop Groups</h2>
          <p className="text-[color:var(--dark-gray)] max-w-2xl mx-auto">
            Browse merchandise from your favorite K-pop groups. Each collection is carefully curated for true fans.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {groups.map((group) => (
            <Link 
              key={group.id} 
              href={`/groups/${group.slug}`}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-full mb-4 bg-[color:var(--light-gray)] border-2 border-transparent transition-all duration-300 group-hover:border-[color:var(--primary)] group-hover:shadow-lg">
                <div className="relative h-full w-full">
                  <Image
                    src={group.image}
                    alt={group.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 text-[color:var(--primary)] px-3 py-1 rounded-full text-sm font-medium">
                    View Products
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-medium group-hover:text-[color:var(--primary)] transition-colors duration-300">{group.name}</h3>
                <p className="text-xs text-[color:var(--dark-gray)]">{group.productCount} products</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/groups" className="btn-secondary">
            View All Groups
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGroups; 
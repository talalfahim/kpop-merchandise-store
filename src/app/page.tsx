import Image from "next/image";
import Link from "next/link";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FeaturedGroups from "@/components/home/FeaturedGroups";
import NewsletterSignup from "@/components/home/NewsletterSignup";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--primary-dark)] via-[color:var(--primary)] to-[color:var(--secondary)]"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-[color:var(--accent)]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat">
                Your Ultimate K-Pop Merchandise Destination
              </h1>
              <p className="text-white/90 text-lg mb-8 max-w-xl">
                Discover exclusive merchandise from your favorite K-pop groups. Express your passion with high-quality apparel and collectibles.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/shop" className="btn-primary">
                  Shop Now
                </Link>
                <Link href="/groups" className="btn-outline border-white text-white hover:bg-white/20 hover:text-white">
                  Browse Groups
                </Link>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--primary)]/20 to-[color:var(--secondary)]/20 rounded-xl"></div>
              <div className="relative h-full w-full p-4">
                <div className="relative h-full w-full overflow-hidden rounded-xl shadow-2xl">
                  <Image 
                    src="https://via.placeholder.com/800x800?text=K-pop+Merchandise"
                    alt="K-pop merchandise showcase"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <FeaturedProducts />
      
      {/* Featured Groups Section */}
      <FeaturedGroups />
      
      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  );
}

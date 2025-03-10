'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-[#111111]/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold title-gradient">KPOP<span className="text-[color:var(--secondary)]">MERCH</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/shop">Shop All</NavLink>
            <NavLink href="/groups">Groups</NavLink>
            <NavLink href="/new-arrivals">New Arrivals</NavLink>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/about">About</NavLink>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-[color:var(--light-gray)] transition-colors">
              <SearchIcon />
            </button>
            <Link href="/account" aria-label="Account" className="p-2 rounded-full hover:bg-[color:var(--light-gray)] transition-colors">
              <UserIcon />
            </Link>
            <Link href="/cart" aria-label="Cart" className="p-2 rounded-full hover:bg-[color:var(--light-gray)] transition-colors relative">
              <CartIcon />
              <span className="absolute -top-1 -right-1 bg-[color:var(--primary)] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-[color:var(--light-gray)] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#111111] border-t border-[color:var(--medium-gray)]">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="/shop" onClick={() => setIsMenuOpen(false)}>Shop All</MobileNavLink>
              <MobileNavLink href="/groups" onClick={() => setIsMenuOpen(false)}>Groups</MobileNavLink>
              <MobileNavLink href="/new-arrivals" onClick={() => setIsMenuOpen(false)}>New Arrivals</MobileNavLink>
              <MobileNavLink href="/sale" onClick={() => setIsMenuOpen(false)}>Sale</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            </nav>
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-[color:var(--medium-gray)]">
              <Link href="/account" className="flex items-center text-sm">
                <span className="mr-2"><UserIcon /></span>
                Account
              </Link>
              <Link href="/cart" className="flex items-center text-sm">
                <span className="mr-2"><CartIcon /></span>
                Cart (0)
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link href={href} className="text-[color:var(--foreground)] hover:text-[color:var(--primary)] font-medium transition-colors">
    {children}
  </Link>
);

const MobileNavLink = ({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) => (
  <Link href={href} className="text-[color:var(--foreground)] hover:text-[color:var(--primary)] font-medium transition-colors block py-2" onClick={onClick}>
    {children}
  </Link>
);

// Icons
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default Header; 
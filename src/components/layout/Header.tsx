
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-6 px-4 md:px-6 border-b">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-2xl font-serif font-bold tracking-tight">
            MinimalBlog
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-8">
              <li><Link to="/" className="text-sm hover:text-gray-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-gray-600 transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-gray-600 transition-colors">Blog</Link></li>
            </ul>
          </nav>
          <Button variant="outline" size="sm">Subscribe</Button>
        </div>
        
        <button 
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12"></path>
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            )}
          </svg>
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-2 px-4 animate-fade-in">
          <nav>
            <ul className="flex flex-col space-y-4">
              <li><Link to="/" className="block py-1 hover:text-gray-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="block py-1 hover:text-gray-600 transition-colors">About</Link></li>
              <li><Link to="/blog" className="block py-1 hover:text-gray-600 transition-colors">Blog</Link></li>
            </ul>
          </nav>
          <div className="mt-4">
            <Button variant="outline" size="sm" className="w-full">Subscribe</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

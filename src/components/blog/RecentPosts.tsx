
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import BlogCard from './BlogCard';

const RecentPosts = () => {
  // Mock data with updated thumbnails to match post titles
  const allPosts = [
    {
      id: '2',
      title: 'The Evolution of Web Typography',
      excerpt: 'From system fonts to variable fonts: exploring how web typography has changed the digital reading experience.',
      date: 'Apr 28, 2023',
      category: 'Design',
      readTime: '4 min read',
      thumbnailUrl: 'https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?auto=format&fit=crop&w=1200&h=675&q=80' // Typography-related image
    },
    {
      id: '3',
      title: 'Building Sustainable Digital Products',
      excerpt: 'How to approach product design with sustainability in mind, reducing digital waste and environmental impact.',
      date: 'Apr 12, 2023',
      category: 'Product',
      readTime: '6 min read',
      thumbnailUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&h=675&q=80' // Sustainable product image
    },
    {
      id: '4',
      title: 'The Art of Meaningful Animation',
      excerpt: 'Why meaningful motion design matters and how it can enhance user experience without being distracting.',
      date: 'Mar 30, 2023',
      category: 'Design',
      readTime: '3 min read',
      thumbnailUrl: 'https://images.unsplash.com/photo-1576502200916-3808e07386a5?auto=format&fit=crop&w=1200&h=675&q=80' // Animation/motion design image
    },
    {
      id: '5',
      title: 'Finding Balance in Asymmetrical Layouts',
      excerpt: 'Exploring how controlled asymmetry creates dynamic, engaging digital experiences that still feel balanced.',
      date: 'Mar 15, 2023',
      category: 'Design',
      readTime: '5 min read',
      thumbnailUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&h=675&q=80' // Asymmetrical design image
    },
    {
      id: '6',
      title: 'The Psychology of Color in Digital Interfaces',
      excerpt: 'How color choices affect user perception, emotions, and actions within digital products and websites.',
      date: 'Feb 27, 2023',
      category: 'Psychology',
      readTime: '7 min read',
      thumbnailUrl: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&w=1200&h=675&q=80' // Color psychology image
    },
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Design', 'Product', 'Psychology'];

  const filteredPosts = activeCategory === 'All' 
    ? allPosts 
    : allPosts.filter(post => post.category === activeCategory);

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Recent Posts</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              category={post.category}
              readTime={post.readTime}
              thumbnailUrl={post.thumbnailUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;

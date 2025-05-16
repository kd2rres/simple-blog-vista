
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/blog/BlogCard';
import Newsletter from '@/components/blog/Newsletter';

const Blog = () => {
  // Mock data
  const allPosts = [
    {
      id: '1',
      title: 'Designing for Simplicity: How Less Became More',
      excerpt: 'An exploration of minimalism in digital design and how stripping away the unnecessary creates more impactful user experiences.',
      date: 'May 15, 2023',
      category: 'Design',
      readTime: '5 min read'
    },
    {
      id: '2',
      title: 'The Evolution of Web Typography',
      excerpt: 'From system fonts to variable fonts: exploring how web typography has changed the digital reading experience.',
      date: 'Apr 28, 2023',
      category: 'Design',
      readTime: '4 min read'
    },
    {
      id: '3',
      title: 'Building Sustainable Digital Products',
      excerpt: 'How to approach product design with sustainability in mind, reducing digital waste and environmental impact.',
      date: 'Apr 12, 2023',
      category: 'Product',
      readTime: '6 min read'
    },
    {
      id: '4',
      title: 'The Art of Meaningful Animation',
      excerpt: 'Why meaningful motion design matters and how it can enhance user experience without being distracting.',
      date: 'Mar 30, 2023',
      category: 'Design',
      readTime: '3 min read'
    },
    {
      id: '5',
      title: 'Finding Balance in Asymmetrical Layouts',
      excerpt: 'Exploring how controlled asymmetry creates dynamic, engaging digital experiences that still feel balanced.',
      date: 'Mar 15, 2023',
      category: 'Design',
      readTime: '5 min read'
    },
    {
      id: '6',
      title: 'The Psychology of Color in Digital Interfaces',
      excerpt: 'How color choices affect user perception, emotions, and actions within digital products and websites.',
      date: 'Feb 27, 2023',
      category: 'Psychology',
      readTime: '7 min read'
    },
    {
      id: '7',
      title: 'The Future of Ethical Product Design',
      excerpt: 'Examining how designers and product teams can create digital experiences that prioritize user wellbeing.',
      date: 'Feb 15, 2023',
      category: 'Product',
      readTime: '6 min read'
    },
    {
      id: '8',
      title: 'Writing Case Studies That Tell a Story',
      excerpt: 'How to structure case studies to showcase not just outcomes, but the journey and learning process.',
      date: 'Jan 29, 2023',
      category: 'Writing',
      readTime: '4 min read'
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Design', 'Product', 'Psychology', 'Writing'];
  
  const filteredPosts = allPosts
    .filter(post => activeCategory === 'All' || post.category === activeCategory)
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Thoughts, ideas, and insights on design, creativity, and digital culture.
          </p>
          
          <div className="mt-8 mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                placeholder="Search articles..."
                className="md:max-w-xs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
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
              />
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <Newsletter />
        </div>
      </section>
    </>
  );
};

export default Blog;

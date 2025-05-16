
import BlogCard from './BlogCard';

const FeaturedPosts = () => {
  // Mock data
  const featuredPosts = [
    {
      id: '1',
      title: 'Designing for Simplicity: How Less Became More',
      excerpt: 'An exploration of minimalism in digital design and how stripping away the unnecessary creates more impactful user experiences.',
      date: 'May 15, 2023',
      category: 'Design',
      readTime: '5 min read',
      featured: true,
      thumbnailUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=675&q=80'
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12">Featured Post</h2>
        {featuredPosts.map(post => (
          <BlogCard 
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            category={post.category}
            readTime={post.readTime}
            featured={post.featured}
            thumbnailUrl={post.thumbnailUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;

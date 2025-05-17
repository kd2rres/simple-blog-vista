
import BlogCard from './BlogCard';

const FeaturedPosts = () => {
  // Updated featured post data with more relevant thumbnail and external URL
  const featuredPosts = [
    {
      id: '1',
      title: 'SEO Agency Showdown: How to Choose the Right Partner for Your Business',
      excerpt: 'Finding the perfect SEO agency for your business can be challenging. This comprehensive guide walks you through the essential factors to consider when selecting an SEO partner that will deliver real results.',
      date: 'May 15, 2023',
      category: 'Digital Marketing',
      readTime: '8 min read',
      featured: true,
      thumbnailUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=675&q=80', // Business meeting/SEO strategy image
      externalUrl: 'https://blog-seo-agency-showdown.vercel.app/'
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
            externalUrl={post.externalUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;

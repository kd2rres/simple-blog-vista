
import FeaturedPosts from '@/components/blog/FeaturedPosts';
import RecentPosts from '@/components/blog/RecentPosts';
import Newsletter from '@/components/blog/Newsletter';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Insights, stories and ideas for the modern creative mind.
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Welcome to MinimalBlog, a clean space for thoughts, ideas, and inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/blog">Start Reading</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FeaturedPosts />
      <RecentPosts />
      
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <Newsletter />
        </div>
      </section>
    </>
  );
};

export default Home;

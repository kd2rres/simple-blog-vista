
import { useParams } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import Newsletter from '@/components/blog/Newsletter';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock data for the SEO Agency Showdown article with updated thumbnail
  const post = {
    id: '1',
    title: 'SEO Agency Showdown: How to Choose the Right Partner for Your Business',
    thumbnailUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80', // Updated with business/SEO meeting image
    content: `
      <p class="lead">
        In today's competitive digital landscape, choosing the right SEO agency can be the difference between online obscurity and market dominance. With countless firms promising first-page rankings and exponential growth, how do you separate the true experts from the snake oil salesmen?
      </p>
      
      <p>
        This comprehensive guide will walk you through the essential factors to consider when selecting an SEO partner that will deliver real results for your business.
      </p>
      
      <h2>Understanding Your SEO Needs</h2>
      
      <p>
        Before you begin vetting agencies, it's crucial to have a clear understanding of your own SEO objectives. Different businesses require different approaches:
      </p>
      
      <ul>
        <li>
          <strong>Local businesses</strong> typically need location-based SEO strategies focused on Google Business Profile optimization and local citations.
        </li>
        <li>
          <strong>E-commerce companies</strong> require product-focused SEO with rich schema markup and conversion optimization.
        </li>
        <li>
          <strong>B2B service providers</strong> often need thought leadership content and lead generation strategies.
        </li>
        <li>
          <strong>Content publishers</strong> require strategies for maximizing organic traffic and audience engagement.
        </li>
      </ul>
      
      <p>
        By identifying your specific needs, you'll be better positioned to find an agency with relevant expertise.
      </p>
      
      <h2>Key Qualities to Look For</h2>
      
      <h3>1. Transparent Methodologies</h3>
      
      <p>
        Reputable SEO agencies should be willing to explain their strategies in plain language. While they may not reveal every proprietary technique, they should provide a clear overview of their approach and how it aligns with current search engine guidelines.
      </p>
      
      <p>
        Red flags include agencies that:
      </p>
      
      <ul>
        <li>Promise guaranteed rankings in impossibly short timeframes</li>
        <li>Refuse to discuss their methods at all, citing "trade secrets"</li>
        <li>Focus exclusively on manipulative tactics rather than sustainable strategies</li>
      </ul>
      
      <h3>2. Proven Track Record</h3>
      
      <p>
        Look for case studies, testimonials, and references from businesses similar to yours. The best agencies can demonstrate clear, measurable improvements they've achieved for clients in your industry.
      </p>
      
      <blockquote>
        "Past performance is the best indicator of future results. Ask for case studies in your specific industry or for businesses with similar challenges."
      </blockquote>
      
      <h3>3. Comprehensive Reporting</h3>
      
      <p>
        SEO is a data-driven discipline, and top agencies provide clear, actionable reporting that goes beyond basic ranking changes. Their reports should include:
      </p>
      
      <ul>
        <li>Organic traffic trends</li>
        <li>Conversion metrics tied to SEO efforts</li>
        <li>Technical improvements implemented</li>
        <li>Content performance analytics</li>
        <li>Backlink acquisition and quality assessment</li>
      </ul>
      
      <h3>4. Holistic Approach</h3>
      
      <p>
        Modern SEO encompasses technical optimization, content strategy, user experience, and off-site factors. Avoid agencies that focus exclusively on one aspect (like link building) while ignoring others.
      </p>
      
      <h2>The Vetting Process</h2>
      
      <h3>Initial Consultation</h3>
      
      <p>
        Pay attention to the questions an agency asks during your first meeting. The best firms will conduct a thorough discovery session to understand your business, competitors, and goals before making recommendations.
      </p>
      
      <h3>SEO Audit Quality</h3>
      
      <p>
        Many agencies offer a preliminary audit as part of their sales process. Evaluate the depth and insight of this audit—does it reveal genuine understanding of your site's issues, or is it superficial and automated?
      </p>
      
      <h3>Proposed Strategy</h3>
      
      <p>
        The agency should present a customized strategy that addresses your specific challenges, not a one-size-fits-all approach. Their proposal should include:
      </p>
      
      <ol>
        <li>Clear objectives and KPIs</li>
        <li>Specific tactics aligned with your goals</li>
        <li>Realistic timelines for implementation and results</li>
        <li>Transparent pricing structure</li>
      </ol>
      
      <h2>Pricing Considerations</h2>
      
      <p>
        SEO agency pricing varies widely based on expertise, location, and service scope. Be wary of agencies charging significantly below market rates—effective SEO requires skilled professionals and adequate time investment.
      </p>
      
      <p>
        Common pricing models include:
      </p>
      
      <ul>
        <li>
          <strong>Monthly retainers:</strong> Most common for ongoing SEO work, typically ranging from $1,000-$10,000+ depending on scope.
        </li>
        <li>
          <strong>Project-based pricing:</strong> Suitable for specific initiatives like website migrations or content development.
        </li>
        <li>
          <strong>Performance-based models:</strong> Sometimes offered but often come with significant base fees or restrictive terms.
        </li>
      </ul>
      
      <h2>Making the Final Decision</h2>
      
      <p>
        After narrowing down your options, consider these final factors:
      </p>
      
      <ul>
        <li>
          <strong>Communication style:</strong> Does the agency explain complex concepts clearly and respond promptly to inquiries?
        </li>
        <li>
          <strong>Cultural fit:</strong> Do their values and working style align with your organization?
        </li>
        <li>
          <strong>Scalability:</strong> Can their services grow with your business?
        </li>
        <li>
          <strong>Contract terms:</strong> Are their agreements fair and flexible?
        </li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>
        Selecting the right SEO agency is a crucial business decision that requires careful consideration. By focusing on transparency, proven expertise, and strategic alignment with your goals, you can find a partner that delivers sustainable growth for your online presence.
      </p>
      
      <p>
        Remember that effective SEO is a marathon, not a sprint. The best agency partnerships are those built on realistic expectations, open communication, and a shared commitment to long-term success.
      </p>
    `,
    date: 'May 15, 2023',
    category: 'Digital Marketing',
    readTime: '8 min read',
    author: {
      name: 'Alex Morgan',
      avatar: '/placeholder.svg',
      bio: 'Digital marketing specialist with 10+ years of experience helping businesses improve their online presence.'
    }
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <div className="text-sm text-muted-foreground">
                <span>{post.date}</span>
                <span className="mx-2">·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg mb-10 overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <img 
                src={post.thumbnailUrl} 
                alt={post.title}
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
          
          <div className="border-t border-border mt-12 pt-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gray-200"></div>
              <div>
                <p className="font-medium text-lg">{post.author.name}</p>
                <p className="text-muted-foreground mb-2">{post.author.bio}</p>
                <div className="flex space-x-2">
                  <a href="#" className="text-sm text-primary hover:underline">Twitter</a>
                  <a href="#" className="text-sm text-primary hover:underline">Website</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Keep Reading</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 overflow-hidden rounded-md">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src="https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?auto=format&fit=crop&w=800&h=450&q=80"
                    alt="The Evolution of Web Typography" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <Badge variant="outline" className="mb-2">Design</Badge>
              <h3 className="text-xl font-bold mb-2">The Evolution of Web Typography</h3>
              <p className="text-muted-foreground mb-4">From system fonts to variable fonts: exploring how web typography has changed the digital reading experience.</p>
              <a href="#" className="text-primary font-medium hover:underline">Read Article</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 overflow-hidden rounded-md">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&h=450&q=80"
                    alt="Building Sustainable Digital Products" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <Badge variant="outline" className="mb-2">Product</Badge>
              <h3 className="text-xl font-bold mb-2">Building Sustainable Digital Products</h3>
              <p className="text-muted-foreground mb-4">How to approach product design with sustainability in mind, reducing digital waste and environmental impact.</p>
              <a href="#" className="text-primary font-medium hover:underline">Read Article</a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <Newsletter />
        </div>
      </section>
    </>
  );
};

export default BlogPost;

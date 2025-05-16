
import { useParams } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import Newsletter from '@/components/blog/Newsletter';

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock data - in a real app, you would fetch this from an API or CMS
  const post = {
    id: '1',
    title: 'Designing for Simplicity: How Less Became More',
    content: `
      <p class="lead">
        Minimalism isn't just an aesthetic choice—it's a framework for creating more impactful digital experiences by focusing on what truly matters.
      </p>
      
      <p>
        In the early days of web design, complexity was often equated with sophistication. More buttons, more features, more options—the digital landscape was crowded with interfaces competing for attention through excess rather than intention.
      </p>
      
      <h2>The Shift to Simplicity</h2>
      
      <p>
        Around the mid-2000s, influenced by mobile design constraints and evolving user expectations, designers began embracing a "less is more" philosophy. This wasn't merely about aesthetic preference—it was a response to growing evidence that cognitive overload was hampering user experiences.
      </p>
      
      <p>
        Research in cognitive psychology has consistently shown that human working memory can only process a limited amount of information at once. When interfaces demand excessive cognitive resources to navigate and understand, users experience frustration, make errors, and ultimately abandon the experience.
      </p>
      
      <blockquote>
        "Simplicity is about subtracting the obvious and adding the meaningful." — John Maeda
      </blockquote>
      
      <h2>The Benefits of Minimalist Design</h2>
      
      <p>
        When we strip away the unnecessary, several benefits emerge:
      </p>
      
      <ul>
        <li>
          <strong>Improved usability:</strong> With fewer distractions, users can focus on completing their tasks efficiently.
        </li>
        <li>
          <strong>Faster load times:</strong> Simpler designs typically require fewer resources, leading to better performance.
        </li>
        <li>
          <strong>Enhanced accessibility:</strong> Clear visual hierarchies and focused interactions benefit all users, especially those with cognitive disabilities.
        </li>
        <li>
          <strong>Timeless quality:</strong> Minimal designs tend to age more gracefully than their trend-heavy counterparts.
        </li>
      </ul>
      
      <h2>Minimalism in Practice</h2>
      
      <p>
        Applying minimalist principles doesn't mean creating boring or empty interfaces. Rather, it's about making deliberate choices that serve the user's needs without unnecessary embellishment.
      </p>
      
      <p>
        Consider these practical strategies:
      </p>
      
      <ol>
        <li>
          <strong>Prioritize content hierarchy:</strong> Make important elements stand out through strategic use of size, weight, and spacing rather than flashy effects.
        </li>
        <li>
          <strong>Embrace negative space:</strong> Don't fear emptiness—it creates breathing room that helps users focus on what matters.
        </li>
        <li>
          <strong>Limit your color palette:</strong> A restrained set of colors creates cohesion and prevents visual overload.
        </li>
        <li>
          <strong>Choose one focal point per screen:</strong> Give users clear direction about what deserves their attention first.
        </li>
      </ol>
      
      <h2>The Future of Simple Design</h2>
      
      <p>
        As digital experiences continue to evolve, the core principles of minimalism remain remarkably relevant. New technologies like voice interfaces and augmented reality benefit from the same thoughtful reduction of complexity.
      </p>
      
      <p>
        The challenge for designers is striking the perfect balance—creating interfaces that feel intuitive and lightweight while still providing rich functionality. It's not about making things simple; it's about making complexity accessible.
      </p>
      
      <p>
        In a world of increasing digital noise, the ability to create calm, focused experiences has never been more valuable. By embracing the power of less, we create digital products that respect our users' limited cognitive resources and create space for what truly matters.
      </p>
    `,
    date: 'May 15, 2023',
    category: 'Design',
    readTime: '5 min read',
    author: {
      name: 'Alex Morgan',
      avatar: '/placeholder.svg',
      bio: 'Designer and writer focused on creating thoughtful digital experiences.'
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

          <div className="aspect-[16/9] bg-gray-200 rounded-lg mb-10"></div>
          
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
            <div className="bg-white p-6 rounded-lg">
              <Badge variant="outline" className="mb-2">Design</Badge>
              <h3 className="text-xl font-bold mb-2">The Evolution of Web Typography</h3>
              <p className="text-muted-foreground mb-4">From system fonts to variable fonts: exploring how web typography has changed the digital reading experience.</p>
              <a href="#" className="text-primary font-medium hover:underline">Read Article</a>
            </div>
            <div className="bg-white p-6 rounded-lg">
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

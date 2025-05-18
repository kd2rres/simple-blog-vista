
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';

const About = () => {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground">
            Writer, designer, and creative thinker
          </p>
        </div>
      </section>
      
      <section className="pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="rounded-lg overflow-hidden mb-12">
            <img 
              src="/lovable-uploads/45bb316b-c563-4e27-888b-509d2b5d6fd2.png" 
              alt="Kim Dave Torres" 
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg">
              Hello! I'm a passionate writer and designer with a focus on creative thinking and
              digital minimalism. With over a decade of experience in the creative industry,
              I've developed a keen eye for design and a voice for storytelling.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">My Journey</h2>
            <p>
              My journey began in 2010 when I started exploring the intersection of design and content creation.
              Since then, I've worked with numerous brands and publications to help them tell their stories
              in meaningful, impactful ways.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">My Approach</h2>
            <p>
              I believe in simplicity and clarity. My work focuses on stripping away the unnecessary
              to highlight what truly matters. Whether I'm designing a website, crafting content, or
              consulting on a creative project, my approach centers on intentionality and purpose.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-4 italic my-8">
              "Simplicity is the ultimate sophistication." — Leonardo da Vinci
            </blockquote>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Connect With Me</h2>
            <p>
              I'm always interested in new collaborations, conversations, and connections.
              Feel free to reach out if you'd like to discuss a project or just say hello.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Button asChild>
                <a href="mailto:hello@example.com">Contact Me</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

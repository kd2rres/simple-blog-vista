
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
  thumbnailUrl: string;
}

const BlogCard = ({
  id,
  title,
  excerpt,
  date,
  category,
  readTime,
  featured = false,
  thumbnailUrl,
}: BlogCardProps) => {
  return (
    <Card className={`overflow-hidden border-0 shadow-none ${featured ? 'md:grid md:grid-cols-2 gap-6 items-center' : ''}`}>
      <div className={`h-48 ${featured ? 'md:h-full' : ''} relative overflow-hidden rounded-lg`}>
        <AspectRatio ratio={16 / 9}>
          <img 
            src={thumbnailUrl} 
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
      </div>
      <CardContent className={`p-6 ${featured ? 'md:pr-0' : ''}`}>
        <div className="flex items-center space-x-2 mb-2">
          <Badge variant="outline">{category}</Badge>
          <span className="text-xs text-muted-foreground">{readTime}</span>
        </div>
        <Link to={`/blog/${id}`}>
          <h3 className={`${featured ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold mb-2 hover:text-gray-700 transition-colors`}>
            {title}
          </h3>
        </Link>
        <p className="text-muted-foreground mb-4">
          {excerpt}
        </p>
        <CardFooter className="p-0">
          <div className="flex items-center">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/lovable-uploads/45bb316b-c563-4e27-888b-509d2b5d6fd2.png" alt="Kim Dave Torres" />
              <AvatarFallback>KT</AvatarFallback>
            </Avatar>
            <div className="ml-2">
              <p className="text-sm">Kim Dave Torres</p>
              <p className="text-xs text-muted-foreground">{date}</p>
            </div>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default BlogCard;

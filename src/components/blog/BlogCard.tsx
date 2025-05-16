
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
}

const BlogCard = ({
  id,
  title,
  excerpt,
  date,
  category,
  readTime,
  featured = false,
}: BlogCardProps) => {
  return (
    <Card className={`overflow-hidden border-0 shadow-none ${featured ? 'md:grid md:grid-cols-2 gap-6 items-center' : ''}`}>
      <div className={`h-48 ${featured ? 'md:h-full' : ''} bg-gray-200 relative`}>
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
            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
            <div className="ml-2">
              <p className="text-sm">Author Name</p>
              <p className="text-xs text-muted-foreground">{date}</p>
            </div>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default BlogCard;

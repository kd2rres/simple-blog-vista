
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast.success("You've been subscribed to our newsletter!");
      setEmail('');
    } else {
      toast.error("Please enter a valid email address.");
    }
  };
  
  return (
    <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Subscribe to our newsletter</h2>
        <p className="text-muted-foreground mb-6">
          Get notified when we publish new content. No spam, just curated thoughts delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

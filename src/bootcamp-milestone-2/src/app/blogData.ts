// src/app/blogData.ts

import Blog from "@/database/blogSchema";
import connectDB from "@/database/db";

export interface Blog {
    title: string;
    slug: string;
    date: string;
    description: string;
    
    // Add more properties as needed
  }
  
  const blogs: Blog[] = [
    {
      title: "Blog Post 1",
      slug: "blog-1",
      date: "2023-10-22",
      description: "This is the first blog post description.",
     
    },
    {
      title: "Blog Post 2",
      slug: "blog-2",
      date: "2023-10-23",
      description: "This is the second blog post description.",
      
    },
    // Add more blog posts as needed
  ];
  
  export default blogs;

 
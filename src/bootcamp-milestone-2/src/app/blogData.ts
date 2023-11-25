// src/app/blogData.ts

export interface Blog {
    title: string;
    date: string;
    description: string;
    slug: string;
    // Add more properties as needed
  }
  
  const blogs: Blog[] = [
    {
      title: "Blog Post 1",
      date: "2023-10-22",
      description: "This is the first blog post description.",
      slug: "blog-post-1",
    },
    {
      title: "Blog Post 2",
      date: "2023-10-23",
      description: "This is the second blog post description.",
      slug: "blog-post-2",
    },
    // Add more blog posts as needed
  ];
  
  export default blogs;
  
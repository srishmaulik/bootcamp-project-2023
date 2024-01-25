import React from "react";
import BlogPreview from '@/components/blogPreview';
import Blogs from "@/database/blogSchema";
import connectDB from "@/database/db";


async function getBlogs()
{
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blogs.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
            //console.log("hello " + blogs)
	    return blogs
	} catch (err) 
    {
        return null
	}
}

export default async function Blog(){
    const blogs = await getBlogs();
    if (blogs) {
    return (
    <main>
        <h2 className="page-title">Blogs</h2>
        <div>
            {blogs?.map(blog => 
                <BlogPreview  
                title={blog.title}
                slug = {blog.slug}
                date = {(blog.date)}
                description={blog.description}
        
               
               
                />
		    )}
        </div>
    </main>
    )};
    };
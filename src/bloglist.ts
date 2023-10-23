type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blogs2: Blog[] = [
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
function displayBlogs2() {
  // Find the container div in the DOM
  const container = document.querySelector(".blog-container");

  if (container) {
    // Iterate over the list of blogs
    blogs2.forEach((blog) => {
      // Create a new div element for each blog
      const blogElement = document.createElement("div");
      blogElement.classList.add("blog");

      // Populate the innerHTML of the blog element with blog data
      blogElement.innerHTML = `
                <h2>${blog.title}</h2>
                <p>Date: ${blog.date}</p>
                <p>${blog.description}</p>
                <a href="${blog.slug}.html">Read more</a>
            `;

      // Append the blog element to the container
      container.appendChild(blogElement);
    });
  }
}
window.addEventListener("load", displayBlogs2);

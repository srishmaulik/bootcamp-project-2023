var blogs = [
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
function displayBlogs() {
    // Find the container div in the DOM
    var container = document.querySelector(".blog-container");
    if (container) {
        // Iterate over the list of blogs
        blogs.forEach(function (blog) {
            // Create a new div element for each blog
            var blogElement = document.createElement("div");
            blogElement.classList.add("blog");
            // Populate the innerHTML of the blog element with blog data
            blogElement.innerHTML = "\n                <h2>".concat(blog.title, "</h2>\n                <p>Date: ").concat(blog.date, "</p>\n                <p>").concat(blog.description, "</p>\n                <a href=\"").concat(blog.slug, ".html\">Read more</a>\n            ");
            // Append the blog element to the container
            container.appendChild(blogElement);
        });
    }
}
window.addEventListener("load", displayBlogs);

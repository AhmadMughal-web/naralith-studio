import matter from "gray-matter";

// Vite automatically loads all .md files from the blog content folder
const modules = import.meta.glob("/src/content/blog/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
});

export const BLOG_POSTS = Object.entries(modules).map(([path, rawContent]) => {
    const slug = path.split("/").pop().replace(".md", "");
    const { data, content } = matter(rawContent);

    return {
        id: slug,
        slug,
        title: data.title,
        excerpt: data.excerpt,
        category: data.category,
        author: data.author,
        authorRole: data.authorRole || null,
        date: data.date,
        readTime: data.readTime,
        image: data.image,
        content, // full markdown body, used only on the detail page
    };
}).sort((a, b) => new Date(b.date) - new Date(a.date)); // newest first

export const getPostBySlug = (slug) => BLOG_POSTS.find((post) => post.slug === slug);

export const FEATURED_POST = BLOG_POSTS[0]; // most recent post shown as featured
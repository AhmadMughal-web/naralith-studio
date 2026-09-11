import fm from "front-matter";

const modules = import.meta.glob("/src/content/blog/*.md", {
    eager: true,
    query: "?raw",
    import: "default",
});

export const BLOG_POSTS = Object.entries(modules).map(([path, rawContent]) => {
    const slug = path.split("/").pop().replace(".md", "");
    const { attributes: data, body: content } = fm(rawContent);

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
        content,
    };
}).sort((a, b) => new Date(b.date) - new Date(a.date));

export const getPostBySlug = (slug) => BLOG_POSTS.find((post) => post.slug === slug);

export const FEATURED_POST = BLOG_POSTS[0];
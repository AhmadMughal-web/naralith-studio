import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FiCalendar, FiClock, FiUser, FiArrowLeft, FiTag } from "react-icons/fi";
import { getPostBySlug, BLOG_POSTS } from "../utils/blogData";

export default function BlogPost() {
    const { slug } = useParams();
    const post = getPostBySlug(slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const relatedPosts = BLOG_POSTS
        .filter((p) => p.category === post.category && p.slug !== post.slug)
        .slice(0, 2);

    return (
        <article className="relative overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-24">
            <Helmet>
                <title>{post.title} — Naralith Studio Blog</title>
                <meta name="description" content={post.excerpt} />
                <link rel="canonical" href={`https://naralithstudio.com/blog/${post.slug}`} />
            </Helmet>

            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">

                <Link
                    to="/blog"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-navy-700 hover:text-orange-600 transition-colors"
                >
                    <FiArrowLeft size={14} />
                    Back to Blog
                </Link>

                <div className="mt-6">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600">
                        <FiTag size={12} />
                        {post.category}
                    </span>
                    <h1 className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-ink">
                        {post.title}
                    </h1>

                    <div className="mt-5 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 border-y border-hairline py-4">
                        <span className="flex items-center gap-1.5 font-medium text-slate-700">
                            <FiUser size={14} className="text-orange-600" />
                            {post.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <FiCalendar size={14} />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <FiClock size={14} />
                            {post.readTime}
                        </span>
                    </div>
                </div>

                {post.image && (
                    <div className="mt-8 h-56 sm:h-80 lg:h-96 w-full overflow-hidden rounded-2xl bg-slate-100">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="h-full w-full object-cover"
                        />
                    </div>
                )}

                <div className="prose prose-sm sm:prose-base max-w-none mt-8 text-body
                    prose-headings:font-display prose-headings:text-ink prose-headings:font-bold
                    prose-p:leading-relaxed prose-p:text-body
                    prose-strong:text-ink prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline
                    prose-li:text-body">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.content}
                    </ReactMarkdown>
                </div>

                {relatedPosts.length > 0 && (
                    <div className="mt-14 border-t border-hairline pt-10">
                        <h2 className="font-display text-lg sm:text-xl font-bold text-ink mb-5">
                            Related Articles
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {relatedPosts.map((rp) => (
                                <Link
                                    key={rp.slug}
                                    to={`/blog/${rp.slug}`}
                                    className="glass-card rounded-xl p-4 hover:shadow-lg transition-all"
                                >
                                    <span className="text-[11px] font-semibold uppercase text-orange-600">
                                        {rp.category}
                                    </span>
                                    <h3 className="mt-1 font-display text-sm font-semibold text-ink">
                                        {rp.title}
                                    </h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                <div className="mt-14 glass-card rounded-2xl p-6 sm:p-8 text-center">
                    <h2 className="font-display text-lg sm:text-xl font-bold text-ink">
                        Have a project idea after reading this?
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-body">
                        Let's talk about what you're building — we reply within one business day.
                    </p>
                    <Link
                        to="/contact"
                        className="btn-primary mt-5 inline-block rounded-full px-6 py-2.5 text-xs sm:text-sm font-semibold"
                    >
                        Start a Conversation
                    </Link>
                </div>

            </div>
        </article>
    );
}
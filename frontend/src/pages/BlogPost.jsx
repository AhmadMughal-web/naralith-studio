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
        <article className="relative overflow-hidden">
            <Helmet>
                <title>{post.title} — Naralith Studio Blog</title>
                <meta name="description" content={post.excerpt} />
                <link rel="canonical" href={`https://naralithstudio.com/blog/${post.slug}`} />
            </Helmet>

            {/* ---------- HERO SECTION (Text Only) ---------- */}
            <section className="relative pt-28 sm:pt-32 px-4 sm:px-6 lg:px-10">
                <div className="mx-auto max-w-4xl">
                   

                    <div className="mt-5 text-center">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 px-3.5 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-orange-600">
                            <FiTag size={12} />
                            {post.category}
                        </span>

                        <h1 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-ink max-w-3xl mx-auto">
                            {post.title}
                        </h1>

                        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-500 border-t border-hairline pt-4 max-w-md mx-auto">
                            <span className="flex items-center gap-1.5 font-medium text-slate-700">
                                <FiUser size={13} className="text-orange-600" />
                                {post.author}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <FiCalendar size={13} />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <FiClock size={13} />
                                {post.readTime}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- ARTICLE CONTENT ---------- */}
            <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 pb-6 sm:pb-8">

                <div className="max-w-none
                    [&_p]:text-body [&_p]:leading-[1.9] [&_p]:mb-7 [&_p]:text-sm [&_p]:sm:text-base
                    [&_p:first-of-type]:text-base [&_p:first-of-type]:sm:text-lg [&_p:first-of-type]:font-medium [&_p:first-of-type]:text-ink
                    [&_h2]:font-display [&_h2]:text-ink [&_h2]:font-bold [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:pt-6 [&_h2]:border-t [&_h2]:border-hairline
                    [&_h2:first-of-type]:mt-0 [&_h2:first-of-type]:pt-0 [&_h2:first-of-type]:border-t-0
                    [&_h3]:font-display [&_h3]:text-ink [&_h3]:font-bold [&_h3]:text-lg [&_h3]:sm:text-xl [&_h3]:mt-9 [&_h3]:mb-3
                    [&_strong]:text-ink [&_strong]:font-semibold
                    [&_a]:text-orange-600 [&_a]:no-underline hover:[&_a]:underline
                    [&_li]:text-body [&_li]:mb-2.5 [&_li]:leading-relaxed
                    [&_ul]:my-6 [&_ul]:space-y-1 [&_ul]:list-disc [&_ul]:pl-5
                    [&_ol]:my-6 [&_ol]:list-decimal [&_ol]:pl-5">
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

                {/* ---------- BOTTOM ACTION BAR ---------- */}
                <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-hairline bg-white/60 p-4 backdrop-blur-md sm:flex-row sm:p-5">
                    <Link
                        to="/"
                        className="group flex w-full items-center justify-center gap-2 rounded-full border border-navy-700/15 bg-navy-700/5 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-navy-900 transition-colors hover:bg-navy-900 hover:text-white sm:w-auto"
                    >
                        <FiArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>

                    <Link
                        to="/blog"
                        className="btn-primary group flex w-full items-center justify-center gap-2 rounded-full px-7 py-2.5 text-xs font-semibold uppercase tracking-wider sm:w-auto"
                    >
                        Back to Blog
                    </Link>
                </div>

            </div>
        </article>
    );
}
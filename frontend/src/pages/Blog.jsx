import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
    FiSearch,
    FiCalendar,
    FiClock,
    FiUser,
    FiArrowRight,
    FiZap,
    FiTag,
    FiBookOpen,
} from "react-icons/fi";

// --- Categories List ---
const CATEGORIES = [
    "All",
    "Web Engineering",
    "AI & Automation",
    "UI/UX Design",
    "Digital Growth"
];

// --- Featured Post Data ---
const FEATURED_POST = {
    id: "featured-1",
    title: "Why Custom Web Apps Outperform Generic Templates for Enterprise Growth",
    slug: "custom-web-apps-vs-templates",
    excerpt: "An engineering breakdown of performance, security, and conversion metrics comparing bespoke React/Next.js architectures against legacy CMS solutions.",
    category: "Web Engineering",
    author: "Muhammad Laraib",
    authorRole: "Senior Software Engineer",
    date: "Sep 02, 2026",
    readTime: "6 min read",
    image: "/imgs/web-dev.jpg"
};

// --- All Blog Articles ---
const BLOG_POSTS = [
    {
        id: "post-1",
        title: "Integrating Agentic AI Workflows into Modern SaaS Products",
        slug: "agentic-ai-workflows-saas",
        excerpt: "How to leverage LLM agents and automation tools like LangChain to reduce operational overhead and scale 24/7 customer support.",
        category: "AI & Automation",
        author: "Kamran",
        date: "Aug 28, 2026",
        readTime: "5 min read",
        image: "/imgs/ai-chatbot.jpg"
    },
    {
        id: "post-2",
        title: "Micro-Interactions and Visual Systems That Drive Conversions",
        slug: "micro-interactions-design-conversions",
        excerpt: "Exploring human-centric UI patterns, light/dark mode implementations, and Tailwind styling techniques that boost user engagement.",
        category: "UI/UX Design",
        author: "Muhammad Ahmad",
        date: "Aug 15, 2026",
        readTime: "4 min read",
        image: "/imgs/ui-ux.jpg"
    },
    {
        id: "post-3",
        title: "Technical SEO and Core Web Vitals Optimization in Next.js",
        slug: "technical-seo-nextjs-optimization",
        excerpt: "Actionable strategies to reduce Time to First Byte (TTFB), optimize cumulative layout shifts, and dominate Google search rankings.",
        category: "Digital Growth",
        author: "Naralith Growth Team",
        date: "Aug 04, 2026",
        readTime: "7 min read",
        image: "/imgs/digital-growth.jpg"
    },
    {
        id: "post-4",
        title: "Building Real-Time Multi-User Collaboration with WebSockets",
        slug: "realtime-websockets-node-architecture",
        excerpt: "A deep dive into Node.js server architectures, Socket.io performance tuning, and horizontal scaling strategies for high concurrency.",
        category: "Web Engineering",
        author: "Muhammad Laraib",
        date: "Jul 21, 2026",
        readTime: "8 min read",
        image: "/imgs/web-dev.jpg"
    },
    {
        id: "post-5",
        title: "Crafting Brand Identity Guidelines for Tech Startups",
        slug: "brand-identity-guidelines-tech-startups",
        excerpt: "Step-by-step framework for designing vector assets, color tokens, and typographic systems that convey modern technical authority.",
        category: "UI/UX Design",
        author: "Muhammad Ahmad",
        date: "Jul 10, 2026",
        readTime: "5 min read",
        image: "/imgs/graphic-design.jpg"
    }
];

// SEO NOTE: If using react-helmet-async, wrap this component's return with:
// <Helmet>
//   <title>Blog — Naralith Studio | Web Development, AI & Design Insights</title>
//   <meta name="description" content="Practical guides on custom web development,
//     AI automation, UI/UX design, and SEO from Naralith Studio's engineering team." />
// </Helmet>

export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = BLOG_POSTS.filter((post) => {
        const matchesCategory =
            selectedCategory === "All" || post.category === selectedCategory;
        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="relative overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-24">
            <Helmet>
                <title>Naralith Studio — Blog </title>
                <meta
                    name="description"
                    content="Practical guides on custom web development, AI automation, UI/UX design, and SEO from Naralith Studio's engineering team."
                />
                <meta
                    name="keywords"
                    content="web development blog, AI automation guides, UI UX design tips, SEO guides, Naralith Studio"
                />
                <link rel="canonical" href="https://naralithstudio.com/blog" />
            </Helmet>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

                {/* 1. HERO HEADER */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-navy-700/20 bg-navy-700/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-700">
                        <FiBookOpen className="h-3.5 w-3.5 text-orange-600" />
                        Naralith Insights & Tech Blog
                    </span>
                    <h1 className="mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-ink text-center">
                        Engineering Practices, AI Trends & <span className="text-gradient">Design Systems.</span>
                    </h1>
                    <p className="mt-4 text-xs sm:text-base leading-relaxed text-body text-left sm:text-center">
                        Practical guides, technical breakdowns, and strategic insights written by our core engineers and designers.
                    </p>
                </div>

                {/* 2. SEARCH & CATEGORY FILTERS */}
                <div className="mt-10 sm:mt-12 flex flex-col items-center gap-6">
                    {/* Search Bar */}
                    <div className="relative w-full max-w-md">
                        <FiSearch className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search articles, frameworks, AI topics..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-full border border-slate-200 bg-white/80 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-ink placeholder-slate-400 backdrop-blur-md transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        />
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${selectedCategory === cat
                                    ? "bg-navy-700 text-white shadow-md"
                                    : "bg-slate-100/80 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 3. FEATURED POST CARD (Shown when 'All' category and no active search) */}
                {selectedCategory === "All" && !searchQuery && (
                    <div className="mt-10 sm:mt-14">
                        <article className="glass-card group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-hairline p-5 sm:p-8 transition-all hover:shadow-2xl">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                                {/* Featured Image */}
                                <div className="lg:col-span-7 relative h-56 sm:h-72 lg:h-80 w-full overflow-hidden rounded-xl bg-slate-100">
                                    <img
                                        src={FEATURED_POST.image}
                                        alt={FEATURED_POST.title}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-md bg-orange-500 px-2.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider shadow-md">
                                        <FiZap className="h-3 w-3" />
                                        Featured Article
                                    </span>
                                </div>

                                {/* Featured Content */}
                                <div className="lg:col-span-5 flex flex-col justify-between text-left">
                                    <div>
                                        <div className="flex items-center gap-2 text-xs font-semibold text-orange-600 uppercase tracking-wider">
                                            <FiTag className="h-3.5 w-3.5" />
                                            {FEATURED_POST.category}
                                        </div>
                                        <h2 className="mt-2 font-display text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-ink group-hover:text-orange-600 transition-colors">
                                            {FEATURED_POST.title}
                                        </h2>
                                        <p className="mt-3 text-xs sm:text-sm text-body leading-relaxed">
                                            {FEATURED_POST.excerpt}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-slate-200/60">
                                        <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                                            <span className="flex items-center gap-1 font-medium text-slate-700">
                                                <FiUser className="h-3.5 w-3.5 text-orange-600" />
                                                {FEATURED_POST.author}
                                            </span>
                                            <span className="flex items-center gap-3">
                                                <span className="flex items-center gap-1">
                                                    <FiCalendar className="h-3.5 w-3.5" />
                                                    {FEATURED_POST.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <FiClock className="h-3.5 w-3.5" />
                                                    {FEATURED_POST.readTime}
                                                </span>
                                            </span>
                                        </div>

                                        <Link
                                            to={`/blog/${FEATURED_POST.slug}`}
                                            className="inline-flex items-center gap-2 rounded-xl bg-navy-700 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-orange-600"
                                        >
                                            Read Full Article
                                            <FiArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                )}

                {/* 4. ARTICLES GRID */}
                <div className="mt-12 sm:mt-16">
                    <h2 className="font-display text-lg sm:text-xl font-bold text-ink mb-6 text-left">
                        {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Posts`}
                    </h2>

                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredPosts.map((post) => (
                                <article
                                    key={post.id}
                                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-hairline/80 bg-white/60 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500/30 hover:shadow-xl text-left"
                                >
                                    <div>
                                        {/* Post Image */}
                                        <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-xl bg-slate-100">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                loading="lazy"
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <span className="absolute top-3 left-3 rounded-md bg-white/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-navy-700 uppercase tracking-wider">
                                                {post.category}
                                            </span>
                                        </div>

                                        {/* Post Text */}
                                        <div className="mt-4">
                                            <div className="flex items-center gap-3 text-[11px] text-slate-500">
                                                <span className="flex items-center gap-1">
                                                    <FiCalendar className="h-3 w-3" />
                                                    {post.date}
                                                </span>
                                                <span>•</span>
                                                <span className="flex items-center gap-1">
                                                    <FiClock className="h-3 w-3" />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                            <h3 className="mt-2 text-base sm:text-lg font-bold text-navy-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="mt-2 text-xs text-body leading-relaxed line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Footer / Link */}
                                    <div className="mt-5 pt-3 border-t border-hairline flex items-center justify-between">
                                        <span className="text-xs font-medium text-slate-600 flex items-center gap-1">
                                            <FiUser className="h-3 w-3 text-orange-600" />
                                            {post.author}
                                        </span>
                                        <Link
                                            to={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-navy-700 transition-colors"
                                        >
                                            Read More
                                            <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="glass-card rounded-2xl p-8 text-center my-8">
                            <p className="text-sm text-slate-500">
                                No articles found matching "{searchQuery}".
                            </p>
                        </div>
                    )}
                </div>

                {/* 5. NEWSLETTER / BOTTOM CTA */}
                <div className="mt-16 sm:mt-24 overflow-hidden rounded-2xl sm:rounded-3xl border border-hairline bg-gradient-to-br from-navy-900 via-navy-700 to-slate-900 p-6 sm:p-10 shadow-xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-left max-w-xl">
                            <span className="inline-block rounded-full bg-orange-500/20 px-3 py-0.5 text-[10px] sm:text-xs font-semibold tracking-wider text-orange-400 uppercase">
                                Stay Tech Forward
                            </span>
                            <h2 className="mt-2 text-xl sm:text-3xl font-bold text-white">
                                Subscribe to Naralith Engineering Insights
                            </h2>
                            <p className="mt-2 text-xs sm:text-sm text-slate-300">
                                Get our latest articles on React, Next.js, AI workflows, and digital growth directly in your inbox. No spam.
                            </p>
                        </div>

                        <div className="w-full md:w-auto shrink-0">
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="flex flex-col sm:flex-row gap-2 w-full max-w-md"
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="rounded-full bg-white/10 border border-white/20 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                                <button
                                    type="submit"
                                    className="btn-primary shrink-0 rounded-full bg-orange-500 hover:bg-orange-600 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
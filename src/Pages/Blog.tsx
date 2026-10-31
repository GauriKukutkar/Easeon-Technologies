
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Search,
  Send,
  Sparkles,
} from "lucide-react";

const categories = [
  "All",
  "Technology",
  "AI & Innovation",
  "Business",
  "Product Insights",
];

const blogs = [
  {
    id: 1,
    category: "Technology",
    date: "Coming Soon",
    readTime: "5 min read",
    title: "How Custom Software Can Transform the Way Businesses Work",
    excerpt:
      "Discover how tailored digital solutions can simplify operations, improve workflows and support business growth.",
    image: "/images/blog/custom-software.jpg",
    featured: true,
  },
  {
    id: 2,
    category: "AI & Innovation",
    date: "Coming Soon",
    readTime: "6 min read",
    title: "Artificial Intelligence: Moving Beyond the Buzzword",
    excerpt:
      "A practical look at how AI can become a meaningful part of everyday business operations.",
    image: "/images/blog/artificial-intelligence.jpg",
  },
  {
    id: 3,
    category: "Business",
    date: "Coming Soon",
    readTime: "4 min read",
    title: "Why Every Growing Business Needs a Digital Strategy",
    excerpt:
      "Understand why a clear digital roadmap matters when building a scalable and future-ready business.",
    image: "/images/blog/digital-strategy.jpg",
  },
  {
    id: 4,
    category: "Product Insights",
    date: "Coming Soon",
    readTime: "5 min read",
    title: "From an Idea to a Product: What Does It Really Take?",
    excerpt:
      "Explore the thinking, research and planning involved in turning an idea into a useful digital product.",
    image: "/images/blog/product-development.jpg",
  },
  {
    id: 5,
    category: "Technology",
    date: "Coming Soon",
    readTime: "5 min read",
    title: "Building Digital Experiences That Put Users First",
    excerpt:
      "Why user experience should be a core part of every digital product and technology decision.",
    image: "/images/blog/user-experience.jpg",
  },
  {
    id: 6,
    category: "AI & Innovation",
    date: "Coming Soon",
    readTime: "7 min read",
    title: "Automation and the Future of Everyday Work",
    excerpt:
      "How thoughtful automation can reduce repetitive tasks and create more efficient workflows.",
    image: "/images/blog/automation.jpg",
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        activeCategory === "All" || blog.category === activeCategory;

      const matchesSearch =
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const featuredBlog = blogs[0];

  return (
    <main className="w-full overflow-x-clip bg-white text-[#101828]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F3F8FF] py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-blue-700">
              <Sparkles size={14} />
              Ideas. Insights. Innovation.
            </div>

            <h1 className="text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              Perspectives for a
              <span className="block text-blue-600">
                digital-first world.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-gray-500 sm:text-base">
              Explore ideas, insights and perspectives on technology,
              software development, digital transformation and the
              innovations shaping tomorrow.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#latest-articles"
                className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-[#0B3B8F]"
              >
                Explore Articles
                <ArrowRight size={17} />
              </a>

              <span className="text-xs font-medium text-gray-400">
                Insights from Easeon Technologies
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">

          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
                Editor's Pick
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Featured Article
              </h2>
            </div>
            <span className="hidden text-xs text-gray-400 sm:block">
              A closer look at what matters
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid overflow-hidden rounded-[28px] border border-blue-100 bg-[#F5F9FF] lg:grid-cols-2"
          >
            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B3B8F] via-[#0866FF] to-[#08B9D2] p-10 sm:min-h-[380px]">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/20" />
              <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full border border-white/20" />

              <div className="relative z-10 max-w-sm text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/10 text-white backdrop-blur">
                  <Sparkles size={30} />
                </div>
                <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/65">
                  Technology That Works For You
                </p>
                <p className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Turning complex challenges into digital possibilities.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <span className="w-fit rounded-full bg-blue-100 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-blue-700">
                {featuredBlog.category}
              </span>

              <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                {featuredBlog.title}
              </h3>

              <p className="mt-5 text-sm leading-8 text-gray-500">
                {featuredBlog.excerpt}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-5 text-xs text-gray-400">
                <span className="flex items-center gap-2">
                  <CalendarDays size={15} />
                  {featuredBlog.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock3 size={15} />
                  {featuredBlog.readTime}
                </span>
              </div>

              <a
                href="#latest-articles"
                className="mt-8 inline-flex w-fit items-center gap-3 text-sm font-semibold text-blue-600 transition hover:gap-5"
              >
                Explore article
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section id="latest-articles" className="bg-[#F8FAFD] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">

          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
                The Easeon Journal
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Latest Insights
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500">
                Thoughts and knowledge to help you understand the
                evolving world of technology and business.
              </p>
            </div>

            <div className="relative w-full lg:max-w-[300px]">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-full border border-gray-200 bg-white py-3.5 pl-11 pr-5 text-sm outline-none transition focus:border-blue-500"
              />
            </div>
          </div>

          {/* CATEGORY FILTER */}
          <div className="mt-9 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-3 text-xs font-semibold transition ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "border border-gray-200 bg-white text-gray-500 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* BLOG GRID */}
          <div className="mt-10 grid min-w-0 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group flex min-w-0 flex-col overflow-hidden rounded-[22px] border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B3B8F] to-[#08B9D2] p-8">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/20" />
                  <div className="absolute -bottom-14 -left-10 h-40 w-40 rounded-full border border-white/20" />

                  <span className="relative z-10 max-w-[220px] text-center text-2xl font-semibold leading-tight text-white">
                    {blog.category}
                  </span>

                  <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                      {blog.category}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight transition group-hover:text-blue-600">
                    {blog.title}
                  </h3>

                  <p className="mt-3 flex-1 text-xs leading-7 text-gray-500">
                    {blog.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                    <span className="text-[10px] text-gray-400">
                      {blog.date}
                    </span>
                    {/* <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600">
                      Read More
                      <ArrowRight
                        size={15}
                        className="transition group-hover:translate-x-1"
                      />
                    </span> */}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="py-20 text-center">
              <Search className="mx-auto text-gray-300" size={35} />
              <h3 className="mt-5 text-lg font-semibold">
                No articles found
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Try another search or select a different category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="relative overflow-hidden rounded-[28px] bg-[#0B3B8F] px-7 py-14 text-center text-white sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full border border-white/10" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Send size={21} />
              </div>

              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                Stay Connected
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Ideas worth exploring.
                <span className="block text-cyan-300">
                  Insights worth following.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-blue-100/75">
                Keep exploring the ideas and innovations shaping
                the future of digital business.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-blue-700 transition hover:bg-cyan-100"
              >
                Let's Connect
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;

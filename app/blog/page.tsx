"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { blogs } from "@/mock/blogs/blogPosts";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Clock, Search, User, Tag } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SectionTitle from "@/components/common/SectionTitle";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // 🧠 Fake loading 1.5s để render skeleton
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filtered = blogs.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.author.toLowerCase().includes(query.toLowerCase())
  );

  const categories = ["Tin tức nổi bật", "Blog học viên", "Góc kiến thức"];

  const getExcerpt = (html: string, maxLength = 200) => {
    const text = html.replace(/<[^>]+>/g, "");
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  // 🧱 Skeleton Card
  const BlogSkeleton = () => (
    <div className="max-w-4xl rounded-md border border-gray-200 p-5 space-y-3">
      <Skeleton className="h-4 w-3/4 bg-gray-200" />
      <Skeleton className="h-3 w-full bg-gray-200" />
      <Skeleton className="h-3 w-5/6 bg-gray-200" />
      <div className="flex gap-2 mt-4">
        <Skeleton className="h-5 w-14 rounded-full bg-gray-200" />
        <Skeleton className="h-5 w-20 rounded-full bg-gray-200" />
      </div>
      <Separator className="my-4" />
      <div className="flex gap-3">
        <Skeleton className="h-4 w-20 bg-gray-200" />
        <Skeleton className="h-4 w-16 bg-gray-200" />
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-balance mb-14 space-y-3">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
          Blog DraViE
        </h1>
        <p className="text-gray-600 max-w-2xl leading-relaxed text-sm md:text-base">
          Cập nhật tin tức, chia sẻ bí quyết học ngôn ngữ, và những câu chuyện
          truyền cảm hứng từ học viên DraViE. Cùng khám phá hành trình học tập
          thông minh với công nghệ AI!
        </p>
      </div>

      {/* Thanh tìm kiếm */}
      <div className="flex mb-8">
        <div className="relative w-full max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <Input
            placeholder="Tìm bài viết..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 w-full bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-[#0046AF] focus:ring-[#0046AF]"
          />
        </div>
      </div>

      {/* Render theo category */}
      {categories.map((cat) => (
        <section key={cat} className="mb-14">
          <h2 className="text-2xl font-semibold mb-6 border-l-[3px] border-gray-400 ps-2">
            {cat}
          </h2>

          <div className="space-y-3">
            {loading
              ? // 🦴 Skeleton Loading
                Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <BlogSkeleton />
                  </motion.div>
                ))
              : // ✅ Render bài thật
                filtered
                  .filter((p) => p.category === cat)
                  .map((post) => (
                    <motion.div
                      key={post.id}
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => router.push(`/blog/${post.id}`)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter")
                            router.push(`/blog/${post.id}`);
                        }}
                        className="max-w-4xl cursor-pointer rounded-md border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition py-3 px-5"
                      >
                        {/* Title */}
                        <div className="mb-1">
                          <h3 className="text-base font-semibold text-gray-900 leading-tight">
                            {post.title}
                          </h3>
                        </div>

                        {/* Excerpt */}
                        <p className="text-sm text-gray-600 mb-3">
                          {getExcerpt(post.body)}
                        </p>

                        {/* Keywords */}
                        {post.keywords && post.keywords.length > 0 && (
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <Tag className="h-4 w-4 text-gray-400" />
                            {post.keywords.map((kw) => (
                              <Badge
                                key={kw}
                                variant="outline"
                                className="text-gray-600 border-gray-300 text-xs px-2 py-0.5"
                              >
                                {kw}
                              </Badge>
                            ))}
                          </div>
                        )}

                        <Separator className="my-4" />

                        {/* Author & Date */}
                        <div className="flex flex-col gap-1 text-xs text-gray-500">
                          <div className="flex flex-wrap items-center gap-2">
                            <User className="h-4 w-4 text-gray-400" />
                            <span className="whitespace-nowrap">Đăng bởi:</span>
                            <Badge
                              variant="outline"
                              className="text-muted-foreground border-accent"
                            >
                              {post.author}
                            </Badge>
                          </div>

                          <div className="flex flex-wrap items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span>Thời gian đăng tải: {post.date}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
          </div>
        </section>
      ))}
    </div>
  );
}

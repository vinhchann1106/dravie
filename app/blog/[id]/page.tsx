"use client";

import { useParams, useRouter } from "next/navigation";
import { blogs } from "@/mock/blogs/blogPosts";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Clock, Tag, User } from "lucide-react";

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params?.id);

  const post = blogs.find((p) => p.id === id);

  if (!post) {
    console.warn("❌ Không tìm thấy bài viết id:", id);
    return (
      <div className="max-w-3xl mx-auto py-10 px-4 text-center">
        <p className="text-gray-500 mb-4">Không tìm thấy bài viết.</p>
        <button
          onClick={() => router.push("/blog")}
          className="text-sm px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
        >
          ← Quay lại Blog
        </button>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto py-10 px-4">
      <Link
        href="/blog"
        className="text-gray-500 hover:text-gray-700 text-sm mb-6 inline-block transition"
      >
        ← Quay lại Blog
      </Link>

      <h1 className="text-3xl font-bold mb-2 text-gray-900 leading-snug">
        {post.title}
      </h1>

      <div className="">
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
      <Separator className="my-6" />
      <div
        className="prose prose-neutral dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </article>
  );
}

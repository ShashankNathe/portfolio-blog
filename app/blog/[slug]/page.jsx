import { getBlogBySlug } from "@/app/actions/database";
import { markdownToHtml } from "@/utils/markdownToHtml";
import siteMetadata from "@/utils/siteMetaData";
import { User } from "lucide-react";
import Link from "next/link";
import React from "react";

export async function generateMetadata(slug) {
  const post = await getBlogBySlug(slug.params.slug);
  if (!post) {
    return;
  }

  const publishedAt = new Date(post.created_at).toISOString();
  const modifiedAt = new Date(post.updated_at || post.created_at).toISOString();
  let imageList = [siteMetadata.socialBanner];
  if (post.images) {
    imageList = typeof post.images === "string" ? [post.images] : post.images;
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes("http") ? img : siteMetadata.siteUrl + img,
    };
  });

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: "./",
      images: ogImages,
      authors: [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  };
}

const page = async (slug) => {
  const blog = await getBlogBySlug(slug.params.slug);
  if (!blog) {
    return <div>Blog not found</div>;
  }

  const contentHtml = await markdownToHtml(blog.content);
  const postDateTemplate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div>
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={blog.created_at}>{new Date(blog.created_at).toLocaleDateString(siteMetadata.locale, postDateTemplate)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                  {blog.title}
                </h1>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
            <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  <li className="flex items-center space-x-2 text-center xl:text-left">
                    <User className="h-10 w-10 rounded-full p-2 border-2 hidden xl:block" />
                    <dl className="whitespace-nowrap text-sm font-medium leading-5">
                      <dt className="sr-only">Name</dt>
                      <dd className="text-gray-900 dark:text-gray-100">Shashank Nathe</dd>
                      <dt className="sr-only">Linkedin</dt>
                      <dd>
                        <Link
                          href="https://www.linkedin.com/in/shashank-nathe-6730b2205/"
                          target="_blank"
                          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-200 dark:hover:text-neutral-200"
                        >
                          @linkedin
                        </Link>
                      </dd>
                    </dl>
                  </li>
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} style={{ marginTop: "0 !important" }} />
              </div>
            </div>
            <footer>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y"></div>
              <div className="pt-4 xl:pt-8">
                <Link href={`/blog`} className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="Back to the blog">
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </div>
  );
};

export default page;

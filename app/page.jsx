import Badge from "@/components/Badge";
import BlogsHome from "@/components/BlogsHome";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";
// import nextLogo from "../public/nextjs.svg";
export default function Home() {
  return (
    <>
      <section className="mb-10">
        <h1 className="mb-8 text-3xl font-medium tracking-tighter">Hey, I'm Shashank 👋</h1>
        <p className="prose prose-neutral dark:prose-invert leading-8">
          {`I'm a fullstack developer. I currently `}
          {`work as the Lead Developer at `}
          <Link href="https://fuzen.io" className="underline font-bold underline-offset-8">
            Fuzen
          </Link>
          {`, where I help build an innovative no-code app builder. I love working with `}
          <Badge href="https://nextjs.org">
            <Image alt="Next.js logomark" src="/next-logo.svg" className="!mr-1 h-4" width="14" height="14" />
            Next.js
          </Badge>
          {" & "}
          <Badge href="https://react.dev/">
            <Image alt="React logomark" src="/react.svg" className="!mr-1 h-4" width="14" height="14" />
            React
          </Badge>{" "}
        </p>
      </section>
      <section className="mb-10">
        <Skills />
      </section>
      <section className="mb-10">
        <Projects />
        <div className="mt-4 text-center">
          <Badge href="/work">
            <Link href="/work" className="p-3">
              View more
            </Link>
          </Badge>
        </div>
      </section>
      <BlogsHome />
    </>
  );
}

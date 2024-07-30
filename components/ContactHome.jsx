import { GitBranch, Github, Linkedin, LinkedinIcon, LucideLinkedin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactHome = () => {
  return (
    <section className="mb-10">
      <h1 className="mb-8 text-3xl font-medium tracking-tighter">Lets get in touch</h1>
      <div className="grid sm:grid-cols-2 gap-4 items-start">
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10">
              <div className="gap-y-3">
                <div className="mb-3">
                  <label htmlFor="name" className="block text-sm font-medium leading-6 ">
                    Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="janesmith"
                        autoComplete="name"
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 border-gray-600 focus:border-gray-400"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 ">
                    Email
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="hello@email.com"
                        autoComplete="email"
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 border-gray-600 focus:border-gray-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="about" className="block text-sm font-medium leading-6 ">
                    Message
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-800 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 border-gray-600 focus:border-gray-400"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>

                <div className=" mt-6 ">
                  <div className="flex rounded-md shadow-sm sm:max-w-md justify-end">
                    <button
                      type="submit"
                      className="rounded-md w-full sm:w-auto bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="mt-5 sm:mb-0 sm:mt-16 sm:ml-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-base  text-justify">
            {" "}
            I'm currently available for freelance work. If you have a project in mind that you'd like to discuss, feel free to reach out to me. I'm always open to new opportunities
            and collaborations.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-base mt-2">I'd love to hear from you!</p>
          <div className="flex items-center gap-3 mt-3 justify-between">
            <div className="flex items-center gap-3">
              <Phone />
              <p className="text-neutral-600 dark:text-neutral-400 text-base">+91 8483851903</p>
            </div>
            <div className="flex items-center gap-3">
              <Link href={"https://www.linkedin.com/in/shashank-nathe-6730b2205/"} target="_blank">
                <Linkedin width={25} height={25} />
              </Link>
              <Link href={"https://github.com/shashanknathe"} target="_blank">
                <Image src="/github.png" alt="github link icon" width={25} height={25} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHome;

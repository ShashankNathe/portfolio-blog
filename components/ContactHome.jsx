"use client";
import { Phone, X } from "lucide-react";
import React, { useState } from "react";
import Badge from "./Badge";
import { sendContactEmail } from "@/app/actions/mail";

const ContactHome = () => {
  const [alert, setAlert] = useState(null);
  const [visible, setVisible] = useState(false);
  const [pending, setPending] = useState(false);

  const sendEmail = async (formData) => {
    const response = await sendContactEmail(formData);
    if (response && response.success) {
      setAlert({ success: true, message: "Thank you for reaching out! I will get back to you soon." });
      setVisible(true);
    } else {
      setAlert({ success: false, message: "Something went wrong." });
      setVisible(true);
    }
    setPending(false);
  };
  return (
    <section className="mb-10 mt-10">
      <h1 className="mb-8 text-3xl font-medium tracking-tighter">Lets get in touch</h1>
      <div className="grid sm:grid-cols-2 gap-4 items-start">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setVisible(false);
            setPending(true);
            const formData = new FormData(e.target);
            sendEmail(formData);
          }}
        >
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
                  <label htmlFor="message" className="block text-sm font-medium leading-6 ">
                    Message
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-800 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 border-gray-600 focus:border-gray-400"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`${alert?.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} rounded-md transition-all duration-500 ease-in-out ${
                    visible ? "opacity-100 max-h-screen p-4" : "opacity-0 max-h-0"
                  } overflow-hidden`}
                >
                  <div className="flex justify-between">
                    <p>{alert?.message}</p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setVisible(false);
                      }}
                      className="text-lg font-bold"
                    >
                      <X />
                    </button>
                  </div>
                </div>

                <div className=" mt-3 ">
                  <div className="flex rounded-md shadow-sm sm:max-w-md justify-end">
                    <Badge>
                      <button className="p-2" type="submit" disabled={pending}>
                        {pending ? "Sending..." : "Send Message"}
                      </button>
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className=" flex flex-col items-center justify-between sm:ml-4 h-full">
          <div>
            <p className="text-neutral-600 dark:text-neutral-400 text-base text-left">
              {" "}
              If you have any ideas in mind that you'd like to discuss, feel free to reach out to me. I'm always open to new opportunities and collaborations.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-base mt-2">I'd love to hear from you!</p>
          </div>
          <div className="flex items-center gap-3 justify-end w-full pb-1 mt-10 sm:mt-0">
            <div className="flex items-center gap-3">
              <Phone />
              <p className="text-neutral-600 dark:text-neutral-400 text-base">+91 8483851903</p>
            </div>
            {/* <div className="flex items-center gap-3">
              <Link href={"https://www.linkedin.com/in/shashank-nathe-6730b2205/"} target="_blank">
                <Linkedin width={25} height={25} />
              </Link>
              <Link href={"https://github.com/shashanknathe"} target="_blank">
                <img src="/github.png" alt="github link icon" width={25} height={25} />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHome;

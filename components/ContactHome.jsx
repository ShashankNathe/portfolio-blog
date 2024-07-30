import React from "react";

const ContactHome = () => {
  return (
    <section className="mb-10">
      <h1 className="mb-8 text-3xl font-medium tracking-tighter">Contact me</h1>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="name" className="block text-sm font-medium leading-6 ">
                  Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
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
              <div className="sm:col-span-4">
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

              <div className="sm:col-span-4">
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

              <div className="sm:col-span-4 mt-6 ">
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
    </section>
  );
};

export default ContactHome;

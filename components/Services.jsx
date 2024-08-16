import { AppWindow, BookOpen, Code, Gauge, Globe, MonitorSmartphone, ServerIcon, ShoppingCart, SwatchBook, Terminal, UserCog, WandSparkles, Wrench } from "lucide-react";
import React from "react";

const Services = () => {
  const services = [
    {
      title: "SaaS Development",
      description: "Create a custom MVP for your SaaS application using scalable, secure technologies tailored to your business needs.",
      icon: <AppWindow />,
    },

    {
      title: "Custom Web Applications",
      description: "Develop custom, responsive, high-performance web applications tailored to your specific business needs and goals.",
      icon: <ServerIcon />,
    },
    {
      title: "No Code Development",
      description: "Quickly build and deploy custom applications using no-code platforms, eliminating the need for extensive coding.",
      icon: <WandSparkles />,
    },
    {
      title: "Web Design",
      description: "Design user-friendly, visually striking websites, focusing on great UX and brand identity.",
      icon: <SwatchBook />,
    },
    {
      title: "E-commerce Development",
      description: "Develop custom e-commerce websites with secure payment gateways, product management, and user-friendly interfaces.",
      icon: <ShoppingCart />,
    },
    {
      title: "CMS, LMS Implementation",
      description: "Implement and customize content and learning management systems to streamline content creation, distribution, and management.",
      icon: <BookOpen />,
    },
    {
      title: "API Development",
      description: "Build and integrate robust APIs to connect your website with other applications and services.",
      icon: <Terminal />,
    },
    {
      title: "Performance Optimization",
      description: "Optimize your website for faster load times and better performance, improving user experience and search rankings.",
      icon: <Gauge />,
    },
    {
      title: "Responsive Design",
      description: "Ensure your website looks great and functions well on all devices, from desktops to mobile phones.",
      icon: <MonitorSmartphone />,
    },
    {
      title: "Maintenance and Support",
      description: "Provide ongoing maintenance and support to keep your website up-to-date, secure, and running smoothly.",
      icon: <Wrench />,
    },

    {
      title: "UX Design",
      description: "Improve your website's usability and user satisfaction through thoughtful UX design.",
      icon: <UserCog />,
    },
    {
      title: "Web Hosting ",
      description: "Offer reliable web hosting and domain registration services to get your site online quickly.",
      icon: <Globe />,
    },
  ];

  return (
    <section className="mb-10">
      <h1 className="mb-8 text-3xl font-medium tracking-tighter">Areas I Focus On</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col items-center py-5 p-3 rounded border group border-neutral-200 bg-neutral-50 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 hover:[background:linear-gradient(45deg,#262626,theme(colors.neutral.800)_50%,#262626)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.neutral.500)_86%,_theme(colors.neutral.300)_90%,_theme(colors.neutral.500)_94%,_theme(colors.slate.600/.48))_border-box] hover:border-transparent hover:animate-border ease-in cursor-pointer"
          >
            <h2 className="flex items-center gap-2 mb-4 text-lg font-medium tracking-tighter">
              {service.icon}
              {service.title}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-center text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

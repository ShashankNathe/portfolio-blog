/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: () => [
    {
      source: "/blog",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store",
        },
      ],
    },
    {
      source: "/",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store",
        },
      ],
    },
  ],
};

export default nextConfig;

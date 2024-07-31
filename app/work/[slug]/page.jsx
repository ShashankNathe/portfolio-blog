import React from "react";

const page = (slug) => {
  console.log(slug);
  return <div>slug {slug.params.slug} </div>;
};

export default page;

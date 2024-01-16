import React from "react";

import { Helmet } from "react-helmet-async";

export const Seo = ({ title, description, url, image }) => {
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
};

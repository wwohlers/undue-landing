import React from "react";
import {useSiteMetadata} from "../hooks/useSiteMetadata";

export const SEO: React.FC<{
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}> = ({ title, description, pathname, children }) => {
  const defaults = useSiteMetadata();

  const seo = {
    title: title || defaults.title,
    description: description || defaults.description,
    image: `${defaults.siteUrl}${defaults.image}`,
    url: `${defaults.siteUrl}${pathname || ""}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {children}
    </>
  )
}

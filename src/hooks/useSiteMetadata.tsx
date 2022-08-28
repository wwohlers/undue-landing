import { graphql, useStaticQuery } from "gatsby";

export function useSiteMetadata() {
  const data = useStaticQuery<{
    site: {
      siteMetadata: {
        title: string;
        description: string;
        image: string;
        siteUrl: string;
      };
    };
  }>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
}

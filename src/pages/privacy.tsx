import React from "react";
import {PageProps} from "gatsby";
import {Layout} from "../components/Layout";
import {MdOutlinePrivacyTip} from "react-icons/md";
import {SEO} from "../components/SEO";

export const Head = () => (
  <SEO
    title={"Privacy — Undue"}
    description={
      "Undue puts privacy first: we don't collect or share any of your data. Read more about our privacy policy here."
    }
    pathname={"/privacy"}
  />
);

const Privacy = ({ path, location }: PageProps) => {
  return (
    <Layout location={location}>
      <div className="container py-8">
        <div className="flex flex-row space-x-2 items-center">
          <MdOutlinePrivacyTip size={32}/>
          <h1 className="text-3xl font-light">Privacy</h1>
        </div>
        <p className="text-xl mt-4">
          <b>Undue doesn't collect or share any of your data.</b>
        </p>
        <p className="mt-4">
          That's our entire privacy policy. This is possible because the app doesn't interact with the internet yet.
          When we add functionality to the app that relies on web services &mdash; like syncing data between devices &mdash;
          this policy will change. Even then, we'll only collect the data we need to support these features,
          and we'll never share it with anyone else.
        </p>
      </div>
    </Layout>
  );
};

export default Privacy;

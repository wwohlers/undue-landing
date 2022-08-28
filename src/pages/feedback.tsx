import React from "react";
import { PageProps } from "gatsby";
import { Layout } from "../components/Layout";
import { AiOutlineForm } from "react-icons/ai";
import { FEEDBACK_FORM_URL } from "../constants";
import { SEO } from "../components/SEO";

export const Head = () => (
  <SEO
    title={"Feedback — Undue"}
    description={
      "User feedback is central to Undue's design process. If you have a suggestion for how to improve Undue, you can submit it through our feedback form."
    }
    pathname={"/feedback"}
  />
);

const Feedback = ({ path, location }: PageProps) => {
  return (
    <Layout location={location}>
      <div className="container py-8">
        <div className="flex flex-row space-x-2 items-center">
          <AiOutlineForm size={32} />
          <h1 className="text-3xl font-light">Feedback</h1>
        </div>
        <p className="text-md mt-4">
          Undue's user-centric design philosophy depends on feedback from users
          like you. Whether you've run into an issue or have a suggestion to
          improve the app, fill out the form below. I read every response I get.
        </p>
        <p className="mt-4">
          <a href={FEEDBACK_FORM_URL} target="_blank">
            Undue Feedback Form
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default Feedback;

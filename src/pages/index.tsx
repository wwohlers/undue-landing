import * as React from "react";
import type { PageProps } from "gatsby";
import { Layout } from "../components/Layout";
import headerImage from "../images/screenshots/events_list.png";
import appStore from "../images/app_store_button.png";
import { MdOutlinePrivacyTip, MdSpeed } from "react-icons/md";
import { IconType } from "react-icons";
import { BsListNested } from "react-icons/bs";
import view_week from "../images/screenshots/view_week.png";
import dayify from "../images/screenshots/dayify.png";
import set_reminder from "../images/screenshots/set_reminder.png";
import { Screenshot } from "../components/Screenshot";
import { SEO } from "../components/SEO";

export const Head = () => <SEO />;

const banner = {
  image: headerImage,
  header: (
    <>
      The easiest planning app <b>you'll ever use</b>.
    </>
  ),
  text: (
    <>
      Introducing a new kind of calendar &mdash; one where planning doesn't feel
      like a chore.
    </>
  ),
};

const columns = [
  {
    icon: MdSpeed as IconType,
    header: "Fast",
    text: (
      <>
        <b>10 seconds</b> &mdash; that's how short it should take to add
        something to your calendar. Undue was designed to meet this goal from
        the very beginning.
      </>
    ),
  },
  {
    icon: BsListNested as IconType,
    header: "Simple",
    text: (
      <>
        Your success depends on meeting tight deadlines and keeping track of
        important events. Undue helps you do both &mdash; without the bloat of
        other planning apps.
      </>
    ),
  },
  {
    icon: MdOutlinePrivacyTip as IconType,
    header: "Private",
    text: (
      <>
        <b>9 words.</b> That's how long our privacy policy is. We'll never
        collect any more data than we need to power features that are useful to
        you. And we'll never share it with anyone else.
      </>
    ),
  },
];

const sections = [
  {
    img: view_week,
    header: "A calendar that thinks like you do",
    paragraphs: [
      <>
        You think in weeks, not months. Oh, and Sunday is part of your weekend,
        not the first day of the week.
      </>,
      <>
        We've thrown away all convention that typical calendar apps follow.
        Undue will change the way that you think about planning your life.
      </>,
    ],
  },
  {
    img: dayify,
    header: "An app that (tries to) keep up with you",
    paragraphs: [
      <>
        You think fast &mdash; and you expect the same from the apps that help
        you navigate your life.
      </>,
      <>
        Undue has streamlined flows that make it mind-blowingly easy to set
        dates for all the important things in life.
      </>,
    ],
  },
  {
    img: set_reminder,
    header: "Never miss a deadline again",
    paragraphs: [
      <>
        Reminders help you stay on top of your plans while focusing on what's
        important to you. With Undue, creating reminders for all the important
        things in your life has never been easier.
      </>,
      <>
        Your event got pushed back? Don't worry &mdash; Undue will automatically
        push back your reminders for you.
      </>,
    ],
  },
];

const IndexPage = ({ path, location }: PageProps) => {
  return (
    <Layout location={location}>
      <div className="md:py-8 w-full flex justify-center items-start">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="my-8 md:mr-16">
            <p className="text-5xl font-extralight">{banner.header}</p>
            <p className="mt-4 text-2xl font-light">{banner.text}</p>
            <div className="mt-4 md:mt-8 flex justify-center items-center">
              <img
                className="w-40 cursor-pointer"
                src={appStore}
                alt="Download on the app store"
              />
              <p className="text-slate-500 uppercase text-xs font-semibold ml-4">
                Coming Soon To the Play Store
              </p>
            </div>
          </div>
          <div className="shrink-0 my-8 md:my-0">
            <Screenshot src={headerImage} size={"large"} />
          </div>
        </div>
      </div>
      <div className="container py-12 md:py-20 flex flex-col md:flex-row md:justify-between">
        {columns.map(({ icon, header, text }, index) => (
          <Column key={index} icon={icon} header={header} text={text} />
        ))}
      </div>
      {sections.map(({ img, header, paragraphs }, index) => (
        <Section
          key={index}
          img={img}
          header={header}
          paragraphs={paragraphs}
          reverse={index % 2 === 1}
        />
      ))}
    </Layout>
  );
};

export default IndexPage;

const Column: React.FC<{
  icon: IconType;
  header: string;
  text: React.ReactNode;
}> = ({ icon: Icon, header, text }) => {
  return (
    <div className="w-full py-6 md:py-6 md:w-[30%] md:border-r border-slate-100 last:border-r-0">
      <div className="flex items-center">
        <Icon fontSize={24} />
        <p className="text-2xl ml-2 font-light">{header}</p>
      </div>
      <p className="text-lg md:text-md mt-2 text-md leading-snug">{text}</p>
    </div>
  );
};

const Section: React.FC<{
  img: string;
  header: string;
  paragraphs: React.ReactNode[];
  reverse: boolean;
}> = ({ img, header, paragraphs, reverse }) => {
  const reverseClass = reverse && "md:flex-row-reverse ";
  const backgroundClass = reverse && "bg-slate-100 ";
  return (
    <div
      className={"w-full flex justify-center py-12 md:py-16 " + backgroundClass}
    >
      <div
        className={
          "container flex flex-col md:flex-row justify-between items-center " +
          reverseClass
        }
      >
        <Screenshot src={img} size={"medium"} />
        <div className="mt-8 md:mt-0 md:w-8/12">
          <p className="text-3xl font-light mb-4">{header}</p>
          {paragraphs.map((paragraph, index) => (
            <p className="mb-3 text-lg leading-snug font-light">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

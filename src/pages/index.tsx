import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/Layout";
import headerImage from "../images/screenshots/events_list.png";
import appStore from "../images/app_store_button.png";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IconType } from "react-icons";
import { BsListNested } from "react-icons/bs";
import { MdSpeed } from "react-icons/md";
import view_week from "../images/screenshots/view_week.png";
import dayify from "../images/screenshots/dayify.png";
import set_reminder from "../images/screenshots/set_reminder.png";

const banner = {
  image: headerImage,
  header: (
    <>
      From <i>due</i> to <i>done</i>, without all the fuss.
    </>
  ),
  text: (
    <>
      Because planning your life <b>shouldn't feel like a chore</b>.
    </>
  ),
};

const columns = [
  {
    icon: AiOutlineClockCircle as IconType,
    header: "Smart",
    text: (
      <>
        Undue knows what you want to see, when you want to see it. It's an app
        built for planners that don't have any time to waste.
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
    icon: MdSpeed as IconType,
    header: "Fast",
    text: (
      <>
        <b>15 seconds</b> &mdash; that's how short it should take to add
        something to your calendar. Undue was designed around this number from
        the very beginning.
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
        You plan in weeks, not months. Oh, and Sunday is part of your weekend,
        not the start of the next week.
      </>,
      <>Undue will change the way you look at your personal calendar.</>,
    ],
  },
  {
    img: dayify,
    header: "An app that (tries to) keep up with you",
    paragraphs: [
      <>
        You think fast &mdash; and demand the same from the apps that you use
        every day.
      </>,
      <>
        That's why Undue has streamlined flows that make it mind-blowingly easy
        to set dates for all the important things in life.
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
        Oh, your event got pushed back? Don't worry &mdash; Undue will
        automatically push back your reminders for you.
      </>,
    ],
  },
];

const IndexPage = ({ path, location }: PageProps) => {
  return (
    <Layout location={location}>
      <div className="md:py-8 w-full flex justify-center items-start bg-slate-100">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="my-8 md:pr-8">
            <p className="text-5xl font-extralight">{banner.header}</p>
            <p className="mt-8 md:mt-4 text-2xl font-light">{banner.text}</p>
            <div className="mt-8 md:mt-4 md:mt-8 flex justify-center items-center">
              <img
                className="w-40 cursor-pointer"
                src={appStore}
                alt="Download on the app store"
              />
              <p className="text-slate-400 uppercase text-xs font-semibold ml-4">
                Coming Soon To the Play Store
              </p>
            </div>
          </div>
          <img
            className="my-4 md:my-0 w-80"
            src={headerImage}
            alt="Screenshot"
          />
        </div>
      </div>
      <div className="container py-8 flex flex-col md:flex-row md:justify-between">
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
          reverse={index % 2 === 0}
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
    <div className="w-full py-4 md:py-6 md:w-[30%] md:border-r border-slate-100 last:border-r-0">
      <div className="flex items-center">
        <Icon fontSize={24} />
        <p className="text-2xl ml-2 font-light">{header}</p>
      </div>
      <p className="mt-2 text-md leading-snug">{text}</p>
    </div>
  );
};

const Section: React.FC<{
  img: string;
  header: string;
  paragraphs: React.ReactNode[];
  reverse: boolean;
}> = ({ img, header, paragraphs, reverse }) => {
  const reverseClass = reverse && "flex-row-reverse ";
  const backgroundClass = reverse && "bg-slate-100 ";
  return (
    <div className={"w-full flex justify-center py-8 " + backgroundClass}>
      <div
        className={
          "container flex justify-between items-center " + reverseClass
        }
      >
        <div className="w-8/12">
          <p className="text-3xl font-light mb-4">{header}</p>
          {paragraphs.map((paragraph, index) => (
            <p className="mb-3 text-lg leading-snug font-light">{paragraph}</p>
          ))}
        </div>
        <img className="w-3/12" src={img} alt="Week view" />
      </div>
    </div>
  );
};

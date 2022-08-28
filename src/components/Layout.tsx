import React from "react";
import { Link, PageProps } from "gatsby";
import logo from "../images/logo_rectangle.png";
import { APP_STORE_URL } from "../constants";
import appStore from "../images/app_store_button.png";

export const Layout: React.FC<{
  location: PageProps["location"];
  children: React.ReactNode;
}> = ({ location, children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <nav className="w-full flex justify-center">
        <div className="container py-6 flex justify-between items-center">
          <Link className="border-b-0" to="/">
            <img className="w-32 cursor-pointer" src={logo} alt="Undue logo" />
          </Link>
          <div className="nav-menu flex items-center space-x-4 md:space-x-6">
            <Link activeClassName="active" to={"/feedback"}>
              Feedback
            </Link>
            <a className="font-bold" href={APP_STORE_URL}>
              Download
            </a>
          </div>
        </div>
      </nav>
      <div className="w-full flex flex-col items-center flex-1">{children}</div>
      <div className="w-full py-12 md:py-24 bg-slate-100 flex justify-center shadow-2xl">
        <div className="container flex flex-col items-center">
          <p className="text-5xl font-extralight">Ready to start planning?</p>
          <br />
          <p className="text-lg font-light text-slate-500">
            No account needed &mdash; just download the app and start adding
            events to your calendar!
          </p>
          <div className="mt-4 md:mt-8 flex justify-center items-center">
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
      </div>
      <div className="w-full py-3 bg-slate-100 border-slate-200 border-t flex flex-col items-center">
        <p className="text-sm text-slate-400 flex space-x-3">
          <a
            className="border-b-0"
            href="https://billwohlers.com"
            target="_blank"
          >
            &copy; {new Date().getFullYear()} Bill Wohlers
          </a>
          <Link className="border-b-0" to="/privacy">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

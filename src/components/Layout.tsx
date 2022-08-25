import React from "react";
import {PageProps} from "gatsby";
import logo from "../images/logo_rectangle.png";
import {APP_STORE_URL} from "../constants";

export const Layout: React.FC<{
  location: PageProps['location'];
  children: React.ReactNode;
}> = ({ location, children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <nav className="w-full flex justify-center">
        <div className="container py-1 flex justify-between items-center">
          <img className="w-32 cursor-pointer" src={logo} alt="Undue. logo" />
          <div className="nav-menu">
            <a className="font-bold border-b-2" href={APP_STORE_URL}>Download</a>
          </div>
        </div>
      </nav>
      <div className="w-full flex flex-col items-center flex-1">
        { children }
      </div>
      <div className="w-full py-3 bg-slate-100 border-slate-200 border-t flex flex-col items-center">
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Undue
        </p>
      </div>
    </div>
  )
}

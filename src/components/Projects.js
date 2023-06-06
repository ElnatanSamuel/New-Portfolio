import React from "react";
import { UilGithub } from "@iconscout/react-unicons";
// import { CgMediaLive } from "react-icons/cg";
import { UilBrowser } from "@iconscout/react-unicons";

const Projects = () => {
  return (
    <div className=" max-w-7xl m-auto mt-44 mb-12">
      <div className="projuctheaddiv">
        <p className="projectshead text-lg font-bold">
          HERE ARE SOME OF MY PROJECTS
        </p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-12 mt-12">
        <div className="projcard">
          <div className="image">
            <img className="cardimg" src="/img/ecomapp.png" alt="" />
          </div>
          <div className="flex flex-col items-center space-y-6">
            <p className="font-bold text-lg pt-4">Electronics Ecommerce App</p>
            <p className="cardtext text-md opacity-60  text-center">
              A multipage electronics shop ecommerce app made in React with
              different functionalities like adding and removing items from
              cart, category filtering, price filtering and an amazing UI.
            </p>
            <div className="flex justify-center items-center space-x-4">
              <p className="font-bold text-lg opacity-90">React</p>
              <p className="font-bold text-lg opacity-90">Tailwind</p>
              <p className="font-bold text-lg opacity-90">ContextAPI</p>
              <p className="font-bold text-lg opacity-90">Sass</p>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center opacity-70 space-x-1 cursor-pointer hover:text-teal-500">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/ElnatanSamuel/ecomtask"
                  className="font-bold text-lg"
                >
                  Code
                </a>
                <UilGithub size="28" />
              </div>
              <div className="flex items-center opacity-70 cursor-pointer space-x-1 hover:text-teal-500">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://ecomtask.vercel.app"
                  className="font-bold text-lg"
                >
                  Live Demo
                </a>{" "}
                {/* <CgMediaLive className="text-2xl" style={{ color: "#000" }} /> */}
                <UilBrowser size="28" />
              </div>
            </div>
          </div>
        </div>

        <div className="projcard2 ">
          <div className="flex flex-col items-center space-y-6">
            <p className="font-bold text-lg pt-4">Movie App</p>
            <p className="cardtext text-md opacity-60 text-center">
              A movie app made in React where viewer can browse through new
              movies and select categories, search movies in database, and
              bookmark the movies they like.
            </p>
            <div className="flex justify-center items-center space-x-4">
              <p className="font-bold text-lg opacity-90">React</p>
              <p className="font-bold text-lg opacity-90">Tailwind</p>
              <p className="font-bold text-lg opacity-90">ContextAPI</p>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center opacity-70 space-x-1 cursor-pointer hover:text-teal-500">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/ElnatanSamuel/Movie-App"
                  className="font-bold text-lg"
                >
                  Code
                </a>{" "}
                <UilGithub size="28" />
              </div>
              <div className="flex items-center opacity-70 cursor-pointer space-x-1 hover:text-teal-500">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://movie-app-psi-five.vercel.app/"
                  className="font-bold text-lg"
                >
                  Live Demo
                </a>{" "}
                {/* <CgMediaLive className="text-2xl" style={{ color: "#000" }} /> */}
                <UilBrowser size="28" />
              </div>
            </div>
          </div>
          <div className="image">
            <img className="cardimg" src="/img/movieapp.png" alt="" />
          </div>
        </div>

        <div className="projcard">
          <div className="image">
            <img className="cardimg" src="/img/blogapp.png" alt="" />
          </div>
          <div className="flex flex-col items-center space-y-6">
            <p className="font-bold text-lg pt-4">Blog App</p>
            <p className="cardtext text-md opacity-60 text-center">
              A Nodejs CRUD app that allows the user to add a new blog, edit an
              existing article, view content of the article and delete the blog
              from database.
            </p>
            <div className="flex justify-center items-center space-x-4">
              <p className="font-bold text-lg opacity-90">Express</p>
              <p className="font-bold text-lg opacity-90">Mongoose</p>
              <p className="font-bold text-lg opacity-90">EJS</p>
              <p className="font-bold text-lg opacity-90">Bootstrap</p>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center opacity-70 space-x-1 cursor-pointer hover:text-teal-500">
                <p className="font-bold text-lg">Code</p>{" "}
                <UilGithub size="28" />
              </div>
              <div className="flex items-center opacity-70 cursor-pointer space-x-1 hover:text-teal-500">
                <p className="font-bold text-lg">Live Demo</p>{" "}
                {/* <CgMediaLive className="text-2xl" style={{ color: "#000" }} /> */}
                <UilBrowser size="28" />
              </div>
            </div>
          </div>
        </div>

        <div className="projcard2 ">
          <div className="flex flex-col items-center space-y-6">
            <p className="font-bold text-lg pt-4">Smart Tech Landing Page</p>
            <p className="cardtext text-md opacity-60 text-center">
              A Tech product Landing page with great UI meant to attract
              customers to the official site.
            </p>
            <div className="flex justify-center items-center space-x-4">
              <p className="font-bold text-lg opacity-90">React</p>
              <p className="font-bold text-lg opacity-90">Sass</p>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center opacity-70 space-x-1 cursor-pointer hover:text-teal-500">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/ElnatanSamuel/landingtask"
                  className="font-bold text-lg"
                >
                  Code
                </a>{" "}
                <UilGithub size="28" />
              </div>
              <div className="flex items-center opacity-70 cursor-pointer space-x-1 hover:text-teal-500">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://landingtask.vercel.app/"
                  className="font-bold text-lg"
                >
                  Live Demo
                </a>{" "}
                {/* <CgMediaLive className="text-2xl" style={{ color: "#000" }} /> */}
                <UilBrowser size="28" />
              </div>
            </div>
          </div>
          <div className="image">
            <img className="cardimg" src="/img/landing.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

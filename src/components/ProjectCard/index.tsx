import Link from "next/link";
import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  projectName: string;
  // We can keep this prop as a string as long as we just want to show a plain paragraph a description
  projectDescription: string;
  imageSrc?: string;
  statusBadge: JSX.Element;
  liveDemoLink?: string;
  gitHubLink?: string;
  technologyBadges: JSX.Element[];
}

export const ProjectCard = ({
  projectName,
  projectDescription,
  imageSrc,
  statusBadge,
  liveDemoLink,
  gitHubLink,
  technologyBadges,
}: ProjectCardProps) => {
  return (
    <div className="transition-[border-color,box-shadow] duration-500 border-2 border-slate-200 dark:border-slate-800 shadow-md dark:shadow-none flex flex-col rounded-lg overflow-clip">
      {/* TODO: Add alt pictures  */}
      {imageSrc && (
        <div className="h-56 w-full relative">
          <Image src={imageSrc} alt="" fill className="object-cover" />
        </div>
      )}
      <div className="grow flex flex-col p-3">
        <div className="flex items-start justify-between mb-3">
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-medium">{projectName}</h3>
            {statusBadge}
          </div>
          <div className="flex items-center gap-1.5">
            {liveDemoLink && (
              <Link
                href={liveDemoLink}
                target="_blank"
                aria-label="Live demo"
                title="Live demo"
              >
                <svg
                  viewBox="-4 1.5 28 28"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-blue-500 dark:fill-blue-400 w-6 h-6"
                >
                  <path d="M15.656 8.5l-10.438 10.5 2.188 2.219 10.469-10.469 1.938 1.906c0.531 0.531 1 0.375 1-0.438v-5.656c0-0.5-0.438-0.969-0.969-0.969h-5.656c-0.813 0-1 0.469-0.469 1zM16.813 23.031v-7.094h2.375v7.906c0 1.406-1.156 2.563-2.563 2.563h-14.063c-1.406 0-2.563-1.156-2.563-2.563v-14.094c0-1.406 1.156-2.563 2.563-2.531h8.656v2.375h-7.844c-0.5 0-0.969 0.469-0.969 0.969v12.469c0 0.5 0.469 0.969 0.969 0.969h12.469c0.5 0 0.969-0.469 0.969-0.969z"></path>
                </svg>
              </Link>
            )}
            {gitHubLink && (
              <Link
                href={gitHubLink}
                target="_blank"
                rel="noopener"
                aria-label="View source code"
                title="View source code"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-blue-500 dark:fill-blue-400 w-6 h-6"
                >
                  <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path>
                </svg>
              </Link>
            )}
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <p>{projectDescription}</p>
          {/* TODO: Add to projects that have a separate page */}
          {/* <Link
        href="/"
        className="text-blue-500 dark:text-blue-400 hover:underline mt-1"
      >
        Read more
      </Link> */}
        </div>
        <div className="flex flex-wrap gap-1.5 text-sm mt-auto">
          {technologyBadges}
        </div>
      </div>
    </div>
  );
};

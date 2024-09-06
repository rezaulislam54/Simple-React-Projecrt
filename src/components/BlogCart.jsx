import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const BlogCart = () => {
  const blogdetail = useLoaderData();
  const {
    title,
    reading_time_minutes,
    comments_count,
    published_at,
    public_reactions_count,
  } = blogdetail;

  const [index, setindex] = useState(0);

  return (
    <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8  text-black">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-800 font-medium">
            <div className="flex items-center md:space-x-2">
              <p className="text-sm">
                {reading_time_minutes} min read •{" "}
                {new Date(published_at).toLocaleDateString()}
              </p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              {comments_count} comments • {public_reactions_count} views
            </p>
          </div>
        </div>
      </article>

      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
          to={``}
          onClick={() => setindex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            index === 0 ? " border border-b-0" : "border-b"
          } rounded-t-md dark:border-gray-800 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Contant</span>
        </Link>

        <Link
          to={`author`}
          onClick={() => setindex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            index === 1 ? " border border-b-0" : "border-b"
          } rounded-t-md dark:border-gray-800 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Author</span>
        </Link>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default BlogCart;

import { FaDribbble, FaGithub, FaTwitter } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

const Author = () => {
  const blog = useLoaderData();
  const {
    name,
    username,
    profile_image,
    website_url,
    github_username,
    twitter_username,
  } = blog.user;
  return (
    <div>
      <div className="flex flex-col justify-center border items-center max-w-full p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
        <img
          src={profile_image}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
              Username: {username}
            </p>
          </div>
          <div className="flex justify-center pt-2 space-x-4 align-center text-xl">
            <a
              target="_blank"
              href={`https://github.com/${github_username}`}
              className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
            >
              <FaGithub></FaGithub>
            </a>
            <a
              target="_blank"
              href={website_url || "#"}
              className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
            >
              <FaDribbble></FaDribbble>
            </a>
            <a
              target="_blank"
              href={`https://twitter.com/${twitter_username}`}
              className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
            >
              <FaTwitter></FaTwitter>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;

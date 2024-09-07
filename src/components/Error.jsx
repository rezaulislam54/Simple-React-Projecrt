import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold ">No Bookmarks Found</h1>
      <h2 className="text-xl font-bold">please Add Bookmarks</h2>
      <Link
        to={"/blogs"}
        className="relative inline-block px-4 py-2 font-bold group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-primary"></span>
        <span className="relative text-black group-hover:text-white">
          Read Blogs
        </span>
      </Link>
    </div>
  );
};

export default Error;

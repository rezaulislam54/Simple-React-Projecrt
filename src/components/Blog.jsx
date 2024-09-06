import { Link } from "react-router-dom";
import image from "../assets/error.jpg";

const Blog = ({ blog }) => {
  const { id, title, description, cover_image, published_at } = blog;
  return (
    <div className="border-2 border-opacity-45 border-green-700 hover:border-blue-700 shadow-lg rounded-lg p-4 hover:scale-105 duration-300 ">
      <Link
        to={`/blogs/${id}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline "
      >
        <img
          className="object-cover w-full rounded h-44 "
          src={cover_image || image}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold ">{title}</h3>
          <h2 className="text-sm text-gray-400">
            Published : {new Date(published_at).toLocaleDateString()}
          </h2>
          <p> {description} </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;

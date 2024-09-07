import { useLoaderData } from "react-router-dom";
import image from "../assets/error.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Contant = () => {
  const blog = useLoaderData();
  const { id, cover_image, body_html, tags, title } = blog;

  return (
    <div className="overflow-hidden border-opacity-25 border-2 shadow-lg rounded-lg p-2">
      <div className="mx-auto group hover:no-underline focus:no-underline ">
        <img
          className="object-cover w-full rounded h-44 "
          src={cover_image || image}
        />
      </div>

      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
        {tags.map((tag) => (
          <a
            key={id}
            className="px-3 py-1 rounded-sm hover:underline text-gray-900"
          >
            #{tag}
          </a>
        ))}
      </div>

      <div className="p-2 space-y-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Contant;

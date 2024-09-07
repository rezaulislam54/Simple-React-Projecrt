import { useEffect, useState } from "react";
import { deleteCart, geteItemLocalStorage } from "../utilites";
import Blog from "../components/Blog";
import Error from "../components/Error";

const Bokmarks = ({ delatable }) => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    const storcart = geteItemLocalStorage();
    setblogs(storcart);
  }, []);

  const handleDelete = (id) => {
    deleteCart(id);
    const storcart = geteItemLocalStorage();
    setblogs(storcart);
  };

  if (blogs.length < 1) return <Error></Error>;

  return (
    <div className="grid justify-center p-12 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <Blog
          delatable={true}
          handleDelete={handleDelete}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

export default Bokmarks;

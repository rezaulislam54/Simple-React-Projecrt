import { useEffect, useState } from "react";
import { deleteCart, geteItemLocalStorage } from "../utilites";
import Blog from "../components/Blog";
import Error from "../components/Error";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title> Byte Blaze | Bokmarks</title>
      </Helmet>
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

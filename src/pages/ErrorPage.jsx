import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <img
        src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1725709532/conceptrezaul_bbsqhm.jpg"
        alt=""
      />
      <h1 className="text-5xl font-bold">Opps!!</h1>
      <p className="text-2xl font-medium">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-2xl font-medium">
        {error.statusText || error.message}
      </p>
      <Link to={"/"}>
        <button className=" bg-purple-800 text-white rounded-lg py-2.5 px-5 text-2xl font-semibold border-2 ">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;

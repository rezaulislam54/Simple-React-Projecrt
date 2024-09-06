import { Link } from "react-router-dom";

const Hero = () => {
    return (
      <div className="hero  ">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">
              Welcome to{" "}
              <span className="text-5xl font-bold bg-300% bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">
                ByteBlaze
              </span>
            </h1>
            <p className="py-6">
              ByteBlaze is the bridge between the complex world of technology
              and the curious minds eager to understand it
            </p>
            <div className="flex justify-center items-center gap-3">
              <Link
                to={"/blogs"}
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-primary"></span>
                <span className="relative text-black group-hover:text-white">
                  Read Blogs
                </span>
              </Link>
              <Link
                to={"/bokmarks"}
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-primary"></span>
                <span className="relative text-black group-hover:text-white">
                  Bokmarks
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;
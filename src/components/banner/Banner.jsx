import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-[calc(100vh-250px)] rounded-md bg-base-200 mt-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.postimg.cc/QC9Jk36N/1994.jpg"
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold mr-36">
              Books to freshen up <br /> your bookshelf
            </h1>
            <Link
              to="/"
              className="btn bg-[#23BE0A] text-white text-xl mt-6"
            >
              View The List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

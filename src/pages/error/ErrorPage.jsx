import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <h1 className="flex items-center justify-center text-5xl font-bold my-48">
        404 page not found
      </h1>
      <Link to={-1}>
      
      <button className="text-3xl btn btn-error">GO Back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;

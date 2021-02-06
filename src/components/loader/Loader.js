import React from "react";
import Loader from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <div className="loader">
      <Loader type="ThreeDots" color="#008080" height={80} width={80} />
    </div>
  );
};

export default LoaderSpinner;

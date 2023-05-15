import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { FidgetSpinner } from "react-loader-spinner";

import Header from "../Header/Header";


const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div>
            <FidgetSpinner
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
              ballColors={["#ff0000", "#00ff00", "#0000ff"]}
              backgroundColor="#F4442E"
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

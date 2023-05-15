import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { FidgetSpinner } from "react-loader-spinner";

import * as SC from "../StyledComponents"
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";


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
        <SC.SharedCon>
          <SideBar />
          <Outlet />
        </SC.SharedCon>
      </Suspense>
    </>
  );
};

export default SharedLayout;

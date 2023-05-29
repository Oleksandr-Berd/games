import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { GlobalStyle } from "./Components/GlobalStyled";
import Layout from "./Components/Layout/Layout";
import SharedLayout from "./Components/SharedLayout/SharedLayout";

const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("./Pages/LoginPage/LoginPage"));
const SignInPage = lazy(() => import("./Pages/SingInPage/SignInPage"));
const AllGamesPage = lazy(() => import("./Pages/AllGamesPage/AllGamesPage"))
const GameByIdPage = lazy(() => import("./Pages/GameByIdPage/GameByIdPage.jsx"))
const DLC = lazy(() => import("./Components/DLC/DLC"));
const Trailers = lazy(() => import("./Components/Trailers/Trailers"));
const Achieves = lazy(() => import("./Components/Achieves/Achieves"));
const Developers = lazy(() => import("./Components/Developers/Developers"));
const ScreenShots = lazy(() => import("./Components/Screenshots/Screenshots"));

function App() {

  
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signin" element={<SignInPage />} />
            <Route path="all" element={<AllGamesPage />} />
            <Route path="/all/:id" element={<GameByIdPage />}>
              <Route path="screenshots" element={<ScreenShots />} />
              <Route path="developers" element={<Developers />} />
              <Route path="dlc" element={<DLC />} />
              <Route path="achievements" element={<Achieves />} />
            </Route>
            <Route path="/all/:id/trailers" element={<Trailers />} />
          </Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;

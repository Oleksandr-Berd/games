import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { GlobalStyle } from "./Components/StyledComponents";
import Layout from "./Components/Layout/Layout";
import SharedLayout from "./Components/SharedLayout/SharedLayout";

const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("./Pages/LoginPage/LoginPage"));
const SignInPage = lazy(() => import("./Pages/SingInPage/SignInPage"));
const AllGamesPage = lazy(()=> import("./Pages/AllGamesPage/AllGamesPage"))

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
            <Route path="all" element={<AllGamesPage/>}/>
          </Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;

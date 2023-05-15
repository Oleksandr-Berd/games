import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { GlobalStyle } from "./Components/StyledComponents";
import Layout from "./Components/Layout/Layout";
import SharedLayout from "./Components/SharedLayout/SharedLayout";

const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("./Pages/LoginPage/LoginPage"));
const SignInPage = lazy(() => import("./Pages/SingInPage/SignInPage"));

function App() {
  return (
    <>
      <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="signin" element={<SignInPage />} />
            </Route>
          </Routes>
        </Layout>

    </>
  );
}

export default App;

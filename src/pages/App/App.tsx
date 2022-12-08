import React, { useState } from "react";
import routes from "@routes/routes";
import { Route, Routes } from "react-router";
import Header from "@components/Header";
import Footer from "@components/Footer";
import OffCanvasCart from "@UI/OffCanvasCart";

interface IRoutes {
  path: string;
  component: React.FC;
}

const App: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((show) => !show);
  return (
    <>
      <Header toggleShow={toggleShow} />

      <div style={{ minHeight: "100vh" }}>
        <Routes>
          {routes.map((route: IRoutes) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
        </Routes>
      </div>
      <Footer />
      <OffCanvasCart show={show} handleClose={handleClose} />
    </>
  );
};

export default App;

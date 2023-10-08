import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import Loader from './Loader';
import { Bars as Loader } from "react-loader-spinner";
const App = lazy(() => import("./App"));

function IndexComponent() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setShowLoader(false);
    }, 2000); // 2 seconds
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Suspense
          fallback={
            <div
              style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: "1500",
              }}
            >
              <Loader height="100" width="100" color="#d772b6" />
            </div>
          }
        >
          {showLoader ? (
            <div
              style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: "1500",
              }}
            >
              <Loader height="100" width="100" color="#d772b6" />
            </div>
          ) : (
            <App />
          )}
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<IndexComponent />);

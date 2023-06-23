import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { IsCartOpenProvider } from "./contexts/uiContext";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
import { Suspense, lazy } from "react";
import LoaderSpinner from "./components/LoaderSpinner";

const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));

function App() {
  const location = useLocation();
  return (
    <div>
      <IsCartOpenProvider>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="/products/category/:category"
                element={
                  <Suspense fallback={<LoaderSpinner />}>
                    <ProductsPage />
                  </Suspense>
                }
              />
              <Route
                path="/checkout"
                element={
                  <Suspense fallback={<LoaderSpinner />}>
                    <CheckoutPage />
                  </Suspense>
                }
              />
            </Route>
            <Route
              path="/auth"
              element={
                <Suspense fallback={<LoaderSpinner />}>
                  <AuthPage />
                </Suspense>
              }
            />
          </Routes>
        </AnimatePresence>
      </IsCartOpenProvider>
    </div>
  );
}

export default App;

import React, { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorBoundary";
const Carousel = lazy(() => import("./Home/Carousel"));
const Content = lazy(() => import("./Home/Content"));

const Home = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => console}>
        <Suspense fallback={<div>Loading...</div>}>
          <Carousel />
          <Content />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Home;

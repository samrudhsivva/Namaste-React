import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const routeError = useRouteError();
  console.log("route err obj is", routeError);

  return (
    <div>
      <h1>{routeError.status}: {routeError.statusText}</h1>
      <h1>{routeError.data}</h1>
      <h2>😵❌😵</h2>
    </div>
  );
};

export default ErrorPage;

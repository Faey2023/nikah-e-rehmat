import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../custom hooks/UseAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className=" w-40 h-40 mx-auto">
        <div className="loading loading-spinner text-accent h-40 w-40 mx-auto"></div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

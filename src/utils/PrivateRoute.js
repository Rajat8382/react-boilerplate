import { Redirect, Route } from 'react-router-dom';

const logged = true;
const PrivateRoute = ({ isProtected, ...rest }) => {
  if (isProtected) {
    if (logged) {
      return (
        <>
          <Route {...rest} />
        </>
      );
    } else {
      return <Redirect to='/login' />;
    }
  }

  return (
    <>
      <Route {...rest} />
    </>
  );
};

export default PrivateRoute;

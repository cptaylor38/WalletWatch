import React, { useContext, useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserProvider from './UserProvider';

const ProtectedRoute = ({ children, ...rest }) => {
  const providedUser = useContext(UserProvider.context);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(providedUser);
  }, [providedUser]);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: {
                from: location,
              },
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;

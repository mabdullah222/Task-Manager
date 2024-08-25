
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/authSlice';

function Auth() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleAuthAction = () => {
    if (isLoggedIn) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  };

  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={handleAuthAction}
        className={`px-4 py-2 rounded ${
          isLoggedIn
            ? 'bg-red-500 hover:bg-red-600 text-white'
            : 'bg-green-500 hover:bg-green-600 text-white'
        }`}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default Auth;

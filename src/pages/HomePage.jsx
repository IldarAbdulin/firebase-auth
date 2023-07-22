import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { removeUser } from '../redux/slices/userSlice';

export default function HomePage() {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div>
      <h1>Welcome {email}</h1>
      <button onClick={() => dispatch(removeUser())}>Logout</button>
    </div>
  ) : (
    <Navigate to={`/login`} />
  );
}

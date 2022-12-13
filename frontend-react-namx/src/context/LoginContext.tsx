import React from "react";
import Cookies from 'universal-cookie';

const cookies = new Cookies()
const fff = cookies.get('accessToken');

export const defaultProtectedRouteProps = {
    isAuthenticated: fff,
    authenticationPath: '/login',
}
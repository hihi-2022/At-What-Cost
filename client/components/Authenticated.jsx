import React from 'react'
// TODO: import useAuth0 function
import { useAuth0 } from '@auth0/auth0-react'

const useIsAuthenticated = () => {
  // TODO: call the useAuth0 hook, destructure and return isAuthenticated
  const { isAuthenticated } = useAuth0()
  return isAuthenticated
}

export function IfAuthenticated({ children }) {
  return useIsAuthenticated() ? <>{children}</> : null
}

export function IfNotAuthenticated({ children }) {
  return !useIsAuthenticated() ? <>{children}</> : null
}
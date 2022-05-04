import { useState, useEffect } from 'react';
import Router from 'next/router';
import authService from '../../services/authService';

const AuthService = new authService();

export const useIsAdmin = () => {
  const [state, setState] = useState({
    proceed: false,
    loading: false,
    error: null,
  });

  useEffect(() => {
    async function checkIfLoggedIn() {
      setState({ proceed: false, loading: true, error: null });
      try {
        const response = await AuthService.loggedin();
        if (response.user) {
          setState({
            proceed: true,
            loading: false,
            error: null,
          });
        } else {
          Router.push('/admin/login');
          setState({
            proceed: true,
            loading: false,
            error: false,
          });
        }
      } catch (e) {
        Router.push('/admin/login');
        setState({
          proceed: true,
          loading: false,
          error: true,
        });
        console.log(e);
      }
    }
    checkIfLoggedIn();
  }, []);

  return [state];
};

export default useIsAdmin;

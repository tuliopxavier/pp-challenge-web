import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { Staff } from '../types/Staff';
import type { Roles } from '../types/Roles';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { RolesContext, StaffContext } from '../providers/DataProvider';
import Header from '../components/Header';
import api from '../services/api';

function MyApp({ Component, pageProps }: AppProps) {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [roles, setRoles] = useState<Roles[]>([]);

  const getStaff = async () => {
    const response = await api.get('agents');
    setStaff(response.data.items);
  };

  const getRoles = async () => {
    const response = await api.get('roles');
    setRoles(response.data.roles);
  };

  useEffect(() => {
    getStaff();
    getRoles();
  }, []);

  return (
    <>
      <Head>
        <title>Pedido Pago</title>
      </Head>

      <StaffContext.Provider value={staff}>
        <RolesContext.Provider value={roles}>
          <Header />
          <Component {...pageProps} />
        </RolesContext.Provider>
      </StaffContext.Provider>
    </>
  );
}

export default MyApp;

import React from 'react';
import HttpInterceptor from '../HttpInterceptor/HttpInterceptor';

interface Props {
  page: React.ReactNode;
}

const PublicRoute: React.FC<Props> = ({ page }) => {
  return (
    <>
      <HttpInterceptor />
      {page}
    </>
  );
};

export default PublicRoute;

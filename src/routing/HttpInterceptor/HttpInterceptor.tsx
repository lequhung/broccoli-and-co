import React from 'react';
import { httpService } from '../../services';
import { AxiosError } from 'axios';

const HttpInterceptor: React.FC = (): React.ReactElement => {
  React.useEffect(() => {
    httpService.interceptors.request.use(
      configuration => {
        configuration.headers.Accept = 'application/json';
        return configuration;
      },
      (error: AxiosError): Promise<AxiosError> => {
        return Promise.reject(error);
      }
    );

    httpService.interceptors.response.use(
      response => {
        return response;
      },
      (error: AxiosError): Promise<AxiosError> => {
        return Promise.reject(error);
      }
    );
  }, []);

  // TODO: API whitelist can be implemented here
  // TODO: Redirections can be implemented here

  return null;
};

export default HttpInterceptor;

interface Service {
  url: string;
}

interface AxiosHeaders {
  'Access-Control-Allow-Origin': string;
}

interface AxiosConfig {
  allowAbsoluteUrls: boolean;
  baseURL: string;
  headers: AxiosHeaders;
}

const AxiosConfig = {
  allowAbsoluteUrls: true,
  baseURL: 'http://127.0.0.1:8000',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

const Service: Service = {
  url: 'http://127.0.0.1:8000',
};

const { url } = Service;

export { Service as default, url };

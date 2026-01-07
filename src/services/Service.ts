interface Service {
  url: string;
  get: (cb: Function) => void
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

const URL: string = 'http://127.0.0.1:8000';

const Service: Service = {
  url: URL,
  get: (cb) => {
    if (cb) {
      cb()
    }
  },
};

const { url } = Service;

export { Service as default, url };

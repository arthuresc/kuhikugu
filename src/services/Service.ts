import axios from 'axios';
// import { useNotification } from '../components/Notifications/NotificationsContext';

interface Service {
  url: string;
  get: (params: string) => Promise<any>;
}

interface AxiosHeaders {
  'Access-Control-Allow-Origin': string;
}

interface AxiosConfig {
  allowAbsoluteUrls: boolean;
  baseURL: string;
  headers: AxiosHeaders;
}

// const { criaNotification } = useNotification()

const AxiosConfig = {
  allowAbsoluteUrls: true,
  baseURL: 'http://127.0.0.1:8000',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

const URL: string = 'http://127.0.0.1:8000';

// const services = function (params: string): Service {
//   //REFACTOR  Caso eu precise de HEADERS customizáveis para as requisições eu crio essa função para ser privada dentro do uso do serviço, não sei se isso causa um problema de segurança
//   // const configHeaders = (config) => {
//   //   return {}
//   // }

//   const paramJoint = (params: string): string => {
//     // REFACTOR Possivelmente melhorar com um array ou um objeto de chave valor para cada parametro são opções meelhores
//     return URL + params;
//   };
//   // REFACTOR Resolução de erros aqui também é necessário para resolver erros comuns como os de stastus 4XX
//    const get = async (params: string) => {
    
//     let result = await axios.get(paramJoint(params), AxiosConfig);
    
//     return result
//   };

//   return { url: paramJoint(params), get };
// };


function paramJoint (params: string): string {
    // REFACTOR Possivelmente melhorar co array ou um objeto de chave valor para cada parametro são opções meelhores
    return URL + params;
}



async function get(params: string) {
  let result 
  try {
    const answer = await axios.get(paramJoint(params), AxiosConfig);

    
  }catch(err:any) {
    criaNotification(
      `Erro em requisição`,
      `Status: ${err.status} - ${err.message}`,
      'danger'
    )
    console.error("Erro na requisição 🛑", err.status, err.message)

  }

  // TYPE - result
  return result;
}

// console.log(typeof services)

export {get};

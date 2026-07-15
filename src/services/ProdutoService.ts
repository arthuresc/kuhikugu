import {get} from '@/src/services/Service'

const path: string = '/produtos/'

async function getProduto(id:number) {
  let result = await get(`/${id}`);

  // TYPE result
  return result.data
}
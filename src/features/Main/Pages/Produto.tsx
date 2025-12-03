import { useState } from 'react';
import Button from '../../../components/Button/Button';
import { useLoaderData } from '@tanstack/react-router';
import axios from 'axios';

function Produto() {
  // const [ products, setProducts ] = useState([])

  // const apiUrl = 'http://127.0.0.1:8000/produto'

  // async function fetchData() {
  //   try {
  //     const teste = await axios.get('http://127.0.0.1:8000/produtos/', {
  //       allowAbsoluteUrls: true,
  //     });

  //     console.log(teste);
  //   } catch (err) {
  //     console.error('Erro ao buscar produto:', err);
  //     throw err;
  //   }
  // }

  const axiosConf = {
    allowAbsoluteUrls: true,
    baseURL: 'http://127.0.0.1:8000',
    headers: {}
  };

  function fetchData() {
    let result;
    axios
      .get('/produtos', axiosConf)
      .then((item) => {
        console.log(item);
        result = item;
      })
      .catch((e) => {
        console.log(e)
      });

      return result;
  }

  const data = fetchData();

  // data.then((item) => {
  //   console.log(item, '😃')
  // })

  console.log(data, '🧅');

  return (
    <>
      <div className="px-[10dvw] flex justify-around items-center text-neutral-800">
        <img
          className="max-h-[50dvh]"
          src="https://placehold.co/1080x1350"
          srcSet=""
        />
        {/* bloco de  */}
        <div className="px-[5dvw] py-[5dvh] *:mt-[1rem">
          <h1>Produto</h1>
          <h2>Sub titulo do produto</h2>
          <p className="line-clamp-12"></p>
          <Button type="warning" title="Adicionar ao orçamento" />
        </div>
      </div>

      <div className="flex text-neutral-800 my-[10dvh]">
        <div className="mx-[10dvw]">
          <h3>Sinopse</h3>
          <p>
            Fugiat id aliquip ex aliqua ut irure adipisicing irure. Proident
            incididunt incididunt veniam voluptate reprehenderit Lorem ipsum
            cupidatat sit laborum aute voluptate aliqua aliquip. Minim nostrud
            nostrud cillum ex. Incididunt aliquip Lorem commodo proident laboris
            amet sint dolor nostrud est eiusmod non incididunt. Ullamco dolor
            qui minim mollit ad magna velit officia quis. Aute veniam amet
            veniam aute. Nisi et ex enim velit aute reprehenderit elit ex. Sint
            non nisi ex minim non ad aliquip aute minim aliqua excepteur. Ut
            nisi sit anim tempor quis proident excepteur nulla cupidatat eu
            mollit cupidatat consequat. Qui sunt sunt est esse consequat. Dolor
            et cupidatat amet id. Minim culpa sunt sint fugiat cupidatat
            excepteur elit occaecat amet aliqua commodo exercitation
            reprehenderit. Eiusmod minim anim ullamco aute commodo sit. Non
            adipisicing occaecat incididunt exercitation in non ex est amet et
            sint commodo. Incididunt exercitation sit elit aliqua adipisicing
            veniam. In duis laboris nisi voluptate commodo quis. Ea deserunt
            occaecat id in eu dolor Lorem et aliquip ut ex ex eu nostrud. Culpa
            amet et ad incididunt reprehenderit elit non quis ut. Mollit ut ex
            incididunt elit eiusmod consectetur fugiat sunt velit dolore quis
            commodo ad.
          </p>
        </div>
      </div>
    </>
  );
}

export default Produto;

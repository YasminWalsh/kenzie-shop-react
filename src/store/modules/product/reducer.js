const data = [
  {
    id: 1,
    name: "Coleção Harry Potter - 7 Volumes",
    price: 129.99,
    img: "https://images-submarino.b2w.io/produtos/01/00/img/1995355/8/1995355829_1SZ.jpg",
  },
  {
    id: 2,
    name: "Box Corte De Espinhos E Rosas – 4 Volumes",
    price: 142.9,
    img: "https://images-submarino.b2w.io/produtos/01/00/img/2449594/2/2449594216_1SZ.jpg",
  },
  {
    id: 3,
    name: "Livro - O Poder Do Hábito",
    price: 48.93,
    img: "https://images-submarino.b2w.io/produtos/111949251/imagens/livro-o-poder-do-habito/111949251_1_xlarge.jpg",
  },
  {
    id: 4,
    name: "Livro - A Sutil Arte De Ligar O F*Da-Se",
    price: 29.9,
    img: "https://images-submarino.b2w.io/produtos/132730056/imagens/livro-a-sutil-arte-de-ligar-o-f-da-se-uma-estrategia-inusitada-para-uma-vida-melhor/132730056_1_xlarge.jpg",
  },
  {
    id: 5,
    name: "Livro - É Assim Que Acaba",
    price: 38.9,
    img: "https://images-submarino.b2w.io/produtos/132899741/imagens/livro-e-assim-que-acaba/132899741_1_xlarge.jpg",
  },
  {
    id: 6,
    name: "Box De Livros - Senhor Dos Anéis - 3 Volumes",
    price: 114.9,
    img: "https://images-submarino.b2w.io/produtos/01/00/img/1708585/6/1708585690_1SZ.jpg",
  },
];

const reducerProducts = (state = data, action) => {
  console.log("PRODUCTS", action);
  return state;
};

export default reducerProducts;

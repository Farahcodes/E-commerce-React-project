export const localProducts = [
  {
    id: '1',
    name: 'first product',
    price: 25999,
    image: '/images/product-3.jpg',
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    company: 'marcos',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'nursery',
    shipping: true,
    stock: 0,
    reviews: 60,
    stars: 5,
    images: [
      { url: '/images/product-1.jpg' },
      { url: '/images/product-4.jpg' },
      { url: '/images/product-5.jpg' },
      { url: '/images/product-6.jpg' },
    ],
    featured: true,
  },
  {
    id: '2',
    name: 'second product',
    price: 30000,
    image: '/images/product-8.jpg',
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'playroom',
    shipping: true,
    stock: 5,
    reviews: 55,
    stars: 4,
    images: [
      { url: '/images/product-2.jpg' },
      { url: '/images/product-8.jpg' },
      { url: '/images/product-11.jpg' },
      { url: '/images/product-15.jpg' },
    ],
    featured: true,
  },
  {
    id: '3',
    name: 'third product',
    price: 15000,
    image: '/images/product-10.jpg',
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    company: 'aubert',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'decor',
    shipping: true,
    stock: 10,
    reviews: 30,
    stars: 4,
    images: [
      { url: '/images/product-10.jpg' },
      { url: '/images/product-14.jpg' },
      { url: '/images/product-7.jpg' },
      { url: '/images/product-9.jpg' },
    ],
    featured: true,
  },
  {
    id: '4',
    name: 'fourth product',
    price: 45000,
    image: '/images/product-16.jpg',
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    company: 'baby first',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'bath',
    shipping: true,
    stock: 10,
    reviews: 30,
    stars: 4,
    images: [
      { url: '/images/product-16.jpg' },
      { url: '/images/product-17.jpg' },
      { url: '/images/product-18.jpg' },
      { url: '/images/product-19.jpg' },
    ],
    featured: false,
  },
];


export const getSingleProduct = (id) =>{
    const product = localProducts.find((product)=> product.id === id);
    return product
}
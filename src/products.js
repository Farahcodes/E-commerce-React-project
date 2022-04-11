import product1 from './assets/product-1.jpg';
import product2 from './assets/product-2.jpg';
import product3 from './assets/product-3.jpg';
import product4 from './assets/product-4.jpg';
import product5 from './assets/product-5.jpg';
import product6 from './assets/product-6.jpg';
import product7 from './assets/product-7.jpg';
import product8 from './assets/product-8.jpg';
import product9 from './assets/product-9.jpg';
import product10 from './assets/product-10.jpg';
import product11 from './assets/product-11.jpg';
import product12 from './assets/product-12.jpg';
import product13 from './assets/product-13.jpg';
import product14 from './assets/product-14.jpg';
import product15 from './assets/product-15.jpg';
import product16 from './assets/product-16.jpg';
import product17 from './assets/product-17.jpg';
import product18 from './assets/product-18.jpg';
import product19 from './assets/product-19.jpg';


export const localProducts = [
  {
    id: '1',
    name: 'baby nursery',
    price: 25999,
    image: product6,
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    company: 'marcos',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'nursery',
    shipping: true,
    stock: 12,
    reviews: 60,
    stars: 5,
    images: [
      { url: product4 },
      { url: product5 },
      { url: product6},
      { url: product7},
    ],
    featured: true,
  },
  {
    id: '2',
    name: 'playing baby',
    price: 30000,
    image: product15,
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
      { url: product2 },
      { url: product8 },
      { url: product11 },
      { url: product15 },
    ],
    featured: true,
  },
  {
    id: '3',
    name: 'sleeping baby',
    price: 15000,
    image: product10,
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
      { url: product7 },
      { url: product9 },
      { url: product10},
      { url: product14 },
    ],
    featured: false,
  },
  {
    id: '4',
    name: 'bathing baby',
    price: 45000,
    image: '/images/product-16.jpg',
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    company: 'baby first',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'bath',
    shipping: true,
    stock: 20,
    reviews: 65,
    stars: 5,
    images: [
      { url: product16 },
      { url: product17},
      { url: product18 },
      { url: product19},
    ],
    featured: true,
  },
];


export const getSingleProduct = (id) =>{
    const product = localProducts.find((product)=> product.id === id);
    return product
}
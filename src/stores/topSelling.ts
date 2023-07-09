import { BsArrayStore, Helper } from 'vue-mdbootstrap';

export const topSelling = new BsArrayStore([
  {
    id: Helper.uuid(true),
    product: 'iPad Pro 2020 11',
    category: 'Tablet',
    image: '/images/products/1.jpg',
    price: '$579.98',
    orders: 180,
    revenue: 45
  },
  {
    id: Helper.uuid(true),
    product: 'iPhone XS',
    category: 'Smartphone',
    image: '/images/products/7.jpg',
    price: '$380.18',
    orders: 125,
    revenue: 25
  },
  {
    id: Helper.uuid(true),
    product: 'Amazefit Pace',
    category: 'Smartwatch',
    image: '/images/products/2.jpg',
    price: '$179.98',
    orders: 60,
    revenue: 5
  },
  {
    id: Helper.uuid(true),
    product: 'Lotto AMF Posh Sports',
    category: 'Shoes',
    image: '/images/products/3.jpg',
    price: '$79.28',
    orders: 50,
    revenue: 4
  },
  {
    id: Helper.uuid(true),
    product: 'Casual Long Sleeve Hoodle',
    category: 'Jacket',
    image: '/images/products/4.jpg',
    price: '$109.25',
    orders: 80,
    revenue: 15
  },
  {
    id: Helper.uuid(true),
    product: 'Playstation 4, 1TB Slim',
    category: 'Console',
    image: '/images/products/5.jpg',
    price: '$875.35',
    orders: 70,
    revenue: 7
  },
  {
    id: Helper.uuid(true),
    product: 'Sungait Lightweight Sunglass',
    category: 'Jacket',
    image: '/images/products/4.jpg',
    price: '$219.98',
    orders: 100,
    revenue: 13
  }
]);

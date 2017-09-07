const products = [
  {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/daniel.jpg',
    productImageUrl: 'images/products/image-aqua.png',
  },
  {
    id: 2,
    title: 'Red bucket',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, cum!',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/daniel.jpg',
    productImageUrl: 'images/products/image-aqua.png',
  },
  {
    id: 3,
    title: 'Blue Pail',
    description: 'Lorem ipsum dolor sit.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/daniel.jpg',
    productImageUrl: 'images/products/image-aqua.png',
  },
  {
    id: 4,
    title: 'Purple Windmill',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/daniel.jpg',
    productImageUrl: 'images/products/image-aqua.png',
  }
];

function generateVoteCount(){
  return Math.floor(Math.random() * 100)
}

export default {
  products
}

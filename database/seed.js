const faker = require('faker');
const { Homes, db } = require('./index.js');

const sampleImages = [];
const possibleTags = ['For Sale', 'For Rent', 'New', 'New Construction'];

// for now we will not include neighborhood
faker.seed(333);
function getRandomInt(min, max) {
  return faker.random.number({
    min,
    max,
  });
}
for (let j = 0; j < 40; j += 1) {
  sampleImages.push(`https://loremflickr.com/900/600?random=${j}`);
}
const sampleHomes = [];
for (let i = 0; i < 100; i += 1) {
  const numBeds = getRandomInt(0, 10);
  const numBaths = getRandomInt(0, 10);
  const sqft = (numBeds + numBaths) * getRandomInt(200, 600);
  const tagIndex = getRandomInt(0, possibleTags.length);
  const sampleHome = {
    images: sampleImages,
    tags: [possibleTags[tagIndex]],
    details: {
      floorplan: {
        numBeds,
        numBaths,
        sqft,
      },
      price: sqft * getRandomInt(100, 800),
      address: {
        line1: faker.address.streetAddress(),
        line2: `${faker.address.city}, ${faker.address.stateAbbr}`,
      },
    },
  };
  sampleHomes.push(sampleHome);
}

const insertSampleHomes = () => {
  Homes.create(sampleHomes)
    .then(() => {
      console.log('added stuff to db');
    });
};

insertSampleHomes();

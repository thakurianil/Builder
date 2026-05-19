const fs = require('fs');

const firstNames = ['James', 'Sarah', 'Michael', 'Emma', 'David', 'Olivia', 'John', 'Chloe', 'Robert', 'Mia', 'William', 'Sophia', 'Jessica', 'Daniel', 'Emily'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez'];
const cities = [
  'Malibu, CA', 'Beverly Hills, CA', 'Aspen, CO', 'Miami, FL', 'New York, NY', 
  'Chicago, IL', 'London, UK', 'Dubai, UAE', 'Tokyo, JP', 'Sydney, AU', 
  'Paris, FR', 'Toronto, CA', 'Seattle, WA', 'Austin, TX', 'Denver, CO'
];

const villaTitles = ['Oceanfront Villa', 'Modern Hilltops', 'Secluded Estate', 'Sunset Mansion', 'Desert Oasis', 'Lakeside Chateau', 'Cliffside Retreat', 'Valley View Mansion', 'Forest Haven', 'Mountain Peak Estate', 'Coastal Paradise', 'Grand Manor'];
const aptTitles = ['Downtown Penthouse', 'Skyline Loft', 'Soho Studio', 'Marina Balcony', 'Bayview Condos', 'Urban High-Rise', 'City Center Apartment', 'Luxury Suite', 'Riverfront Condo', 'Historic District Loft', 'Modern Duplex', 'Artisan Flat'];
const commTitles = ['Creative Hub', 'Corporate HQ', 'Retail Corner', 'Industrial Warehouse', 'Tech Park Office', 'Downtown Storefront', 'Logistics Center', 'Boutique Office', 'Medical Plaza', 'Restaurant Space', 'Co-working Center', 'Distribution Facility'];
const projectTitles = ['The Vertex Towers', 'Eden Greens', 'Neon Flats', 'Solaris Suburbs', 'Oasis Heights', 'Pinnacle Estates', 'Aurora Residences', 'Zenith Complex', 'Crescent Park', 'Nova Condominiums', 'Genesis Valley', 'Elysium Park'];

const conditions = ['Pristine', 'Newly Renovated', 'Under Construction', 'Move-in Ready', 'Excellent', 'Custom Built'];
const years = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 1995, 2005, 2010, 2015];
const parkings = ['2 Car Garage', '4 Car Garage', 'Street Parking', 'Valet', 'Underground Facility', '1 Assigned Spot'];
const amens = ['Pool & Spa', 'Home Theater', 'Smart Home Integration', 'Gym / Fitness Center', 'Rooftop Deck', '24/7 Security'];

let globalId = 1;

const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function generateCategory(seedPrefix, titlesCount, priceFormat, getType, typeName) {
  let items = [];
  for (let i = 0; i < titlesCount.length; i++) {
    const title = titlesCount[i];
    const image = `https://picsum.photos/seed/${seedPrefix}${i}/300/450`;
    const location = randomItem(cities);
    const agentName = `${randomItem(firstNames)} ${randomItem(lastNames)}`;
    const price = priceFormat();
    
    // Core Details
    let details = '';
    if (typeName === 'Commercial Space') {
      details = `${randomItem(['Open Plan', 'Private Units', 'Mixed Use'])} • ${randomNum(10, 50)} Rooms • ${randomNum(5000, 50000).toLocaleString()} sqft`;
    } else {
      details = `${randomNum(1, 8)} Beds • ${randomNum(1, 10)} Baths • ${randomNum(800, 15000).toLocaleString()} sqft`;
    }

    const extraSpecs = [
      { label: 'Year Built', value: String(randomItem(years)) },
      { label: 'Property Type', value: typeName },
      { label: 'Condition', value: randomItem(conditions) },
      { label: 'Parking', value: randomItem(parkings) },
      { label: 'Key Feature', value: randomItem(amens) },
    ];

    items.push({
      id: globalId++,
      title,
      image,
      location,
      price,
      agentName,
      description: `Spectacular ${title.toLowerCase()} situated in the incredible heart of ${location.split(',')[0]}. Designed for modern luxury, offering exceptional lifestyle opportunities and state-of-the-art facilities.`,
      details,
      extraSpecs
    });
  }
  return items;
}

const formatMillion = () => `$${(Math.random() * 20 + 1).toFixed(1)}M`;
const formatComm = () => `$${randomNum(5, 100)},000/mo`;
const formatFrom = () => `From $${randomNum(400, 2500)}k`;

const luxuryVillas = generateCategory('villaX', villaTitles, formatMillion, null, 'Single Family Home');
const modernApartments = generateCategory('aptX', aptTitles, formatMillion, null, 'Condominium');
const commercialSpaces = generateCategory('commX', commTitles, formatComm, null, 'Commercial Space');
const newProjects = generateCategory('newX', projectTitles, formatFrom, null, 'Pre-Construction');

const heroProperty = {
  title: 'The Edge Estate',
  location: 'Exclusive Cliffside, CA',
  price: '$45,000,000',
  description: 'An architectural masterpiece floating above the clouds. Featuring infinity pools, helipad, and uncompromised luxury tailored for the elite. Live on the edge of the world.',
  backdrop: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80',
};

const output = `
export const luxuryVillas = ${JSON.stringify(luxuryVillas, null, 2)};
export const modernApartments = ${JSON.stringify(modernApartments, null, 2)};
export const commercialSpaces = ${JSON.stringify(commercialSpaces, null, 2)};
export const newProjects = ${JSON.stringify(newProjects, null, 2)};
export const heroProperty = ${JSON.stringify(heroProperty, null, 2)};
`;

fs.writeFileSync('../data/properties.js', output.trim());
console.log('Successfully generated properties data with expansive categories and random specs!');

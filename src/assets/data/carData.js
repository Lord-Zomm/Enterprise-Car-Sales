// import all images from assets/images directory
import img01 from "../all-images/cars-img/tesla.png";
import img02 from "../all-images/cars-img/toyota.png";
import img03 from "../all-images/cars-img/bmw.png";
import img04 from "../all-images/cars-img/kia.png";
import img05 from "../all-images/cars-img/ferrari.png";
import img06 from "../all-images/cars-img/mercedes.png";
import img07 from "../all-images/cars-img/audi.png";
import img08 from "../all-images/cars-img/lamborghini_2.png";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Model 3",
    imgUrl: img01,
    model: "Model 3",
    price: 50000, // Price in dollars
    miles: "35k", // Mileage in thousands
    location: "Los Angeles, CA",
    distance: "15", // Distance in miles
    speed: "200km/h",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Tesla Modle 3 offers an exhilarating driving experience with cutting-edge technology and safety features. Perfect for both city driving and long road trips.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota bZ4X",
    imgUrl: img02,
    model: "Model-2022",
    price: 40000,
    miles: "50k",
    location: "San Francisco, CA",
    distance: "20",
    speed: "180km/h",
    gps: "GPS Navigation",
    seatType: "Leather seats",
    automatic: "Automatic",
    description:
      "Toyota bZ4X combines reliability with high performance. It's perfect for families and daily commutes, offering exceptional fuel efficiency.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW i7",
    imgUrl: img03,
    model: "Model-2022",
    price: 65000,
    miles: "28k",
    location: "Miami, FL",
    distance: "5",
    speed: "240km/h",
    gps: "GPS Navigation",
    seatType: "Sports seats",
    automatic: "Automatic",
    description:
      "The BMW i7 offers luxury, performance, and advanced features for a premium driving experience. This car is perfect for long-distance journeys and family trips.",
  },

  {
    id: 4,
    brand: "Kia",
    rating: 102,
    carName: "Kia K5",
    imgUrl: img04,
    model: "Model-2022",
    price: 30000,
    miles: "65k",
    location: "New York, NY",
    distance: "12",
    speed: "160km/h",
    gps: "GPS Navigation",
    seatType: "Fabric seats",
    automatic: "Automatic",
    description:
      "Kia K5 offers an affordable yet dynamic driving experience. Ideal for city commuting, it features advanced safety and entertainment systems.",
  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari SP-8",
    imgUrl: img05,
    model: "Model-2022",
    price: 120000,
    miles: "15k",
    location: "Chicago, IL",
    distance: "25",
    speed: "300km/h",
    gps: "GPS Navigation",
    seatType: "Luxury leather seats",
    automatic: "Automatic",
    description:
      "Ferrari SP-8 is a supercar with breathtaking speed and luxurious interiors. It combines stunning looks with exceptional performance for an unparalleled driving experience.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz GLC",
    imgUrl: img06,
    model: "Model-2022",
    price: 85000,
    miles: "40k",
    location: "Austin, TX",
    distance: "30",
    speed: "220km/h",
    gps: "GPS Navigation",
    seatType: "Heated and ventilated seats",
    automatic: "Automatic",
    description:
      "The Mercedes Benz GLC combines modern technology with superior performance and luxury. It offers ample space, making it perfect for families or long drives.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi R8",
    imgUrl: img07,
    model: "Model 3",
    price: 45000,
    miles: "32k",
    location: "Seattle, WA",
    distance: "18",
    speed: "200km/h",
    gps: "GPS Navigation",
    seatType: "Comfort seats",
    automatic: "Automatic",
    description:
      "The Audi R8 offers a smooth ride with excellent handling. This car is perfect for both city and highway driving, with advanced safety and entertainment features.",
  },

  {
    id: 8,
    brand: "Lamborghini",
    rating: 52,
    carName: "Lamborghini Revuelto",
    imgUrl: img08,
    model: "Model 3",
    price: 200000,
    miles: "10k",
    location: "Denver, CO",
    distance: "8",
    speed: "320km/h",
    gps: "GPS Navigation",
    seatType: "Luxury seats",
    automatic: "Automatic",
    description:
      "Lamborghini Revuelto is the epitome of luxury. With a powerful engine and unparalleled comfort, this car is designed for those who value both performance and style.",
  },
];

export default carData;

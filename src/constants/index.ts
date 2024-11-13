import {
  appleImg,
  bagImg,
  banner1Img,
  banner2Img,
  banner3Img,
  banner4Img,
  blackImg,
  blueImg,
  gasPumpImg,
  highlightFirstmv,
  highlightFourthmv,
  highlightSectmv,
  highlightThirdmv,
  logoImg,
  searchImg,
  service1Img,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

// constants.ts
export const hightlightsSlides = [
  {
    id: 1,
    headerText: "Driving Nigeria’s Clean Energy Future",
    smallerText: "Transforming energy with CNG solutions",
    mediaType: "image", // or "video"
    media: banner1Img,
    contentType: "media",
    mediaDuration: 4,
  },
  {
    id: 2,
    headerText: "Titanium.",
    smallerText: "So strong. So light. So Pro.",
    mediaType: "image",
    media: banner2Img,
    contentType: "nav",
    mediaDuration: 5,
    buttonText: "Explore"
  },
  {
    id: 3,
    headerText: "iPhone 15 Pro Max",
    smallerText: "Longest optical zoom in iPhone ever. Far out.",
    mediaType: "image",
    media: banner3Img,
    contentType: "media",
    mediaDuration: 2,
  },
  {
    id: 4,
    headerText: "Upcoming Conference.",
    smallerText: "What will yours do?",
    mediaType: "video",
    media: highlightFirstmv,
    contentType: "form",
    mediaDuration: 5,
    buttonText: "Register Now"
  },
];


export const ourServices =[
  {
    serviceId: 1,
    serviceName: 'Vehicle conversion',
    serviceDescription: 'Obtain necessary medical notes for work or school with only a few clicks of hassle.',
    serviceIcon: service1Img,
  }, 
  {
     serviceId: 2,
    serviceName: 'Vehicle conversion',
    serviceDescription: 'Obtain necessary medical notes for work or school with only a few clicks of hassle.',
    serviceIcon: service1Img,
  },
  {
     serviceId: 3,
    serviceName: 'Vehicle conversion',
    serviceDescription: 'Obtain necessary medical notes for work or school with only a few clicks of hassle.',
    serviceIcon: service1Img,
  }
]

export const whyChooseUs = [
  "Cost savings with CNG",
  "Low carbon emissions",
  "Government incentives",
  "Sustainability initiatives"
]


export const blogs = [
  {
    coverImage: gasPumpImg,
    title: "Understanding CNG Conversion",
    readDuration: "5 min read",
    datePublished: "2023-10-01",
    content: `Compressed Natural Gas (CNG) is a cleaner fuel alternative... (add your full blog text here)`,
  },
  {
    coverImage: gasPumpImg,
    title: "Benefits of CNG for Vehicles",
    readDuration: "6 min read",
    datePublished: "2023-09-28",
    content: `Switching to CNG can lead to cost savings and reduced emissions... (add your full blog text here)`,
  },
  {
    coverImage: gasPumpImg,
    title: "Autogas Training Programs",
    readDuration: "4 min read",
    datePublished: "2023-09-20",
    content: `Autogas Nigeria offers a range of training programs... (add your full blog text here)`,
  },
];

export const testimonials = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4.5,
    location: "New York, USA",
    testimony:
      "This service has transformed my daily routine. Highly recommended!",
  },
  {
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    location: "Los Angeles, USA",
    testimony:
      "An incredible experience! The team was professional and very helpful.",
  },
  {
    name: "Carlos Rossi",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4,
    location: "Rome, Italy",
    testimony:
      "A truly wonderful service that I would recommend to anyone. Thank you!",
  },
];


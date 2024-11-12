import {
  appleImg,
  bagImg,
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

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Driving Nigeria’s Clean Energy Future",
      // "Game‑changing chip.",
      // "Groundbreaking performance.",
    ],
    video: logoImg,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: bagImg,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: appleImg,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: searchImg,
    videoDuration: 3.63,
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

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];



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

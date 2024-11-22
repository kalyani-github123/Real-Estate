import prop1 from "../assets/images/prop1.webp";
import prop2 from "../assets/images/prop2.webp";
import prop3 from "../assets/images/prop3.webp";
import prop4 from "../assets/images/prop4.webp";
import prop5 from "../assets/images/prop5.webp";
import prop6 from "../assets/images/prop6.webp";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client5 from "../assets/images/client5.png";
import client6 from "../assets/images/client6.png";
import { MdNoteAlt } from "react-icons/md";
import {
  FaHome,
  FaSearch,
  FaNotesMedical,
  FaCameraRetro,
} from "react-icons/fa";
import { GoLaw } from "react-icons/go";

export const property = [
  {
    images: prop1,
    address: "6Downtown, Las Vegas",
    name: "Villa with Amazing View",
    price: "$ 213.23",
    about:
      "A charming agricultural property offering vast potential, Street Farm features fertile land, ideal for farming or equestrian use.",
    bed: 4,
    bath: 3,
    area: "250 sq ft",
    owner: "Alice adams",
  },
  {
    images: prop2,
    address: "Meadows Village, Las Vegas",
    name: "Townhouse for Sale",
    price: "$ 345.18",
    about:
      "Beautiful 3-bedroom townhouse featuring modern amenities, spacious living areas, and a private outdoor space. ",
    bed: 4,
    bath: 3,
    area: "450 sq ft",
    owner: "Drew Alice",
  },
  {
    images: prop3,
    address: "49 DC townhall alex",
    name: "Duplex sea facing for rent",
    price: "$ 652.18",
    about:
      "Luxury sea-facing duplex available for rent! This spacious property features modern interiors, large windows with stunning ocean views.",
    bed: 4,
    bath: 3,
    area: "129 sq ft",
    owner: "Fursi Bam",
  },
  {
    images: prop4,
    address: "Underground street 20 texax",
    name: "Villa with Side View",
    price: "$ 876.13",
    about:
      "A charming villa with a picturesque side view, showcasing elegant architecture, large windows, and lush greenery.",
    bed: 4,
    bath: 3,
    area: "453 sq ft",
    owner: "Neon Alice",
  },
  {
    images: prop5,
    address: "Rubari London Hills",
    name: "Awesome villa for rent",
    price: "$ 341.83",
    about:
      "Experience luxury and comfort in this stunning villa, featuring spacious rooms, modern amenities, a private pool, and breathtaking views.",
    bed: 4,
    bath: 3,
    area: "320 sq ft",
    owner: "Firari Alice",
  },
  {
    images: prop6,
    address: "Northean fersh alice",
    name: "Street Farm for sale",
    price: "$ 675.23",
    about:
      "A charming agricultural property offering vast potential, Street Farm features fertile land, ideal for farming or equestrian use",
    bed: 4,
    bath: 3,
    area: "340 sq ft",
    owner: "Jordan Bram",
  },
];

export const service = [
  {
    icon: MdNoteAlt,
    title: "Sell Home",
    desc: "We sell your home at the best market price",
  },
  {
    icon: FaHome,
    title: "Home Loans",
    desc: "We offer you free consultancy to get a loan",
  },
  {
    icon: GoLaw,
    title: "Legal Services",
    desc: "Expert legal help for all related property items",
  },
  {
    icon: FaSearch,
    title: "Home Inspection",
    desc: "We make sure you get what you were promised",
  },
  {
    icon: FaNotesMedical,
    title: "Evaluation",
    desc: "We offer you free evaluation to get a mortgage loan",
  },
  {
    icon: FaCameraRetro,
    title: "Photoshoot",
    desc: "We prepare your home visual presentation",
  },
];

export const client = [
  {
    image: client1,
    name: "Dana Gilmore",
    text: "Excellent team!",
    feedback:
      "The Estate team did an outstanding job helping me buy my first home. The high level of service and dedication",
  },
  {
    image: client2,
    name: "Ana Anderson",
    text: "Very good work",
    feedback:
      "The agent was professional, knowledgeable, and made the process seamless. We found our dream home effortlessly",
  },
  {
    image: client3,
    name: "Albert adame",
    text: "Very well",
    feedback:
      "They provided excellent advice and kept us informed every step of the way. Truly dedicated to their clients!",
  },
  {
    image: client4,
    name: "Dana Gilmore",
    text: "Excellent team!",
    feedback:
      "Our property sold quickly at a great price, thanks to their expertise in marketing and negotiations.",
  },
  {
    image: client5,
    name: "Alex gilmore",
    text: "Excellent team!",
    feedback:
      "Always available to answer questions and address concerns promptly. Fantastic service!",
  },
  {
    image: client6,
    name: "Sivay Ashbi",
    text: "Excellent team!",
    feedback:
      "They understood our needs perfectly and found the ideal property for us. Highly recommend!",
  },
];

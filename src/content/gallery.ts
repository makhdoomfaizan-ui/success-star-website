export type GalleryItem = {
  id: string;
  title: string;
  category: "Campus" | "Classroom" | "Kids" | "Skills" | "Events";
  alt: string;
  image: string;
};

export const gallery: GalleryItem[] = [
  {
    id: "1",
    title: "Success Star Training Center, Sharjah",
    category: "Campus",
    alt: "Exterior of Success Star Training Center building in Sharjah",
    image: "/images/campus/exterior.jpg",
  },
  {
    id: "2",
    title: "Reception & welcome area",
    category: "Campus",
    alt: "Success Star Sharjah reception desk and logo wall",
    image: "/images/campus/reception.jpg",
  },
  {
    id: "3",
    title: "Kids in maths class",
    category: "Classroom",
    alt: "Children learning maths with a Success Star teacher",
    image: "/images/campus/class-math-1.jpg",
  },
  {
    id: "4",
    title: "Students learning together",
    category: "Classroom",
    alt: "Students in a vibrant Success Star classroom lesson",
    image: "/images/campus/class-math-2.jpg",
  },
  {
    id: "5",
    title: "IELTS preparation materials",
    category: "Skills",
    alt: "IELTS mock test papers and Cambridge IELTS books at Success Star",
    image: "/images/campus/ielts-desk.jpg",
  },
  {
    id: "6",
    title: "English & IELTS study resources",
    category: "Skills",
    alt: "IELTS academic books, grammar binders and practice materials",
    image: "/images/campus/ielts-materials.jpg",
  },
  {
    id: "7",
    title: "KG learning room",
    category: "Kids",
    alt: "Kindergarten learning room with Success Star branding",
    image: "/images/campus/kg-room.jpg",
  },
  {
    id: "8",
    title: "Waiting area",
    category: "Campus",
    alt: "Success Star waiting area with logo and seating",
    image: "/images/campus/waiting.jpg",
  },
];

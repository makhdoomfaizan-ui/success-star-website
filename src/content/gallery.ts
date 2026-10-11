export type GalleryItem = {
  id: string;
  title: string;
  category: "Campus" | "Classroom" | "Kids" | "Skills" | "Events";
  alt: string;
  image: string;
};

/** Replace these Unsplash placeholders with your real Success Star photos anytime. */
export const gallery: GalleryItem[] = [
  {
    id: "1",
    title: "Focused classroom learning",
    category: "Classroom",
    alt: "Students learning in a bright classroom in Sharjah",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "2",
    title: "One-to-one tutoring support",
    category: "Classroom",
    alt: "Tutor helping a student during personalised tutoring",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "3",
    title: "Kids skills development",
    category: "Kids",
    alt: "Children developing learning skills with guidance",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "4",
    title: "Computer skills practice",
    category: "Skills",
    alt: "Learner practising computer skills on a laptop",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "5",
    title: "Creative design session",
    category: "Skills",
    alt: "Creative design training session with digital tools",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b7993141ae2?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "6",
    title: "Parent-trusted learning space",
    category: "Campus",
    alt: "Welcoming education centre environment",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=80",
  },
];

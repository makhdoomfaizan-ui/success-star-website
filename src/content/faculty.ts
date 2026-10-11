export type FacultyMember = {
  name: string;
  role: string;
  focus: string;
  bio: string;
};

export const faculty: FacultyMember[] = [
  {
    name: "Academic Lead — School Programmes",
    role: "Lead Tutor",
    focus: "School subjects & exam readiness",
    bio: "Guides personalised learning plans for foundation to secondary learners, with progress tracking parents can understand.",
  },
  {
    name: "Skills Instructor — Digital Tools",
    role: "Computer & Excel Trainer",
    focus: "Excel, software & workplace skills",
    bio: "Teaches practical computer skills through real tasks so students and professionals can apply learning immediately.",
  },
  {
    name: "Kids Skills Coach",
    role: "Mental Math Facilitator",
    focus: "Mental calculation & focus skills",
    bio: "Runs engaging mental math sessions that build speed, memory, and confidence for younger learners.",
  },
  {
    name: "Creative Skills Mentor",
    role: "Graphic Design Instructor",
    focus: "Design foundations & projects",
    bio: "Supports beginners through project-based design practice with clear feedback and portfolio-minded outcomes.",
  },
];

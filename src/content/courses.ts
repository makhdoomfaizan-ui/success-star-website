export type Course = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "School Tutoring" | "Kids Skills" | "Professional Skills" | "Higher Education";
  audience: string;
  duration: string;
  mode: string;
  summary: string;
  outcomes: string[];
  seoTitle: string;
  seoDescription: string;
  primaryKeyword: string;
  featured?: boolean;
};

export const courses: Course[] = [
  {
    slug: "school-tutoring-sharjah",
    title: "School Tutoring in Sharjah (FS1 to Grade 12)",
    shortTitle: "School Tutoring",
    category: "School Tutoring",
    audience: "FS1 to Grade 12 / British & other curricula",
    duration: "Flexible weekly plans",
    mode: "In-centre + online",
    summary:
      "Personalised subject tutoring that builds confidence, fills learning gaps, and improves exam results for Sharjah students.",
    outcomes: [
      "Stronger grades in core subjects",
      "Homework and exam preparation support",
      "Personal learning plans with progress checks",
    ],
    seoTitle: "School Tutoring Centre Sharjah | Success Star Training",
    seoDescription:
      "Personalised school tutoring in Al Riqa, Sharjah for FS1 to Grade 12. Expert tutors, flexible plans, in-centre and online support.",
    primaryKeyword: "tutoring centre Sharjah",
    featured: true,
  },
  {
    slug: "igcse-tuition-sharjah",
    title: "IGCSE & Exam Preparation Tuition Sharjah",
    shortTitle: "IGCSE Tuition",
    category: "School Tutoring",
    audience: "Secondary / IGCSE candidates",
    duration: "Term-based or intensive",
    mode: "In-centre + online",
    summary:
      "Focused IGCSE and board-exam coaching with practice papers, topic mastery, and confidence-building revision.",
    outcomes: [
      "Topic-by-topic exam readiness",
      "Past-paper practice with feedback",
      "Clear study plans before exams",
    ],
    seoTitle: "IGCSE Tuition Sharjah | Exam Prep | Success Star",
    seoDescription:
      "IGCSE tuition in Sharjah with structured revision, past papers, and expert subject support near Al Riqa.",
    primaryKeyword: "IGCSE tuition Sharjah",
    featured: true,
  },
  {
    slug: "mental-math-kids-sharjah",
    title: "Mental Math for Kids in Sharjah",
    shortTitle: "Mental Math",
    category: "Kids Skills",
    audience: "Kids & early learners",
    duration: "Level-based programme",
    mode: "In-centre",
    summary:
      "Fun, structured mental calculation training that boosts speed, focus, and number confidence for children.",
    outcomes: [
      "Faster mental calculation",
      "Better concentration and memory",
      "Stronger maths confidence at school",
    ],
    seoTitle: "Mental Math for Kids Sharjah | Success Star Training",
    seoDescription:
      "Mental math classes for kids in Sharjah. Build speed, focus, and maths confidence at Success Star Training Center, Al Riqa.",
    primaryKeyword: "mental math for kids Sharjah",
    featured: true,
  },
  {
    slug: "microsoft-excel-course-sharjah",
    title: "Microsoft Excel Course Sharjah",
    shortTitle: "Excel Course",
    category: "Professional Skills",
    audience: "Students, job seekers & working professionals",
    duration: "Short practical batches",
    mode: "In-centre + online",
    summary:
      "Hands-on Excel training from essentials to workplace tools — formulas, charts, tables, and real office tasks.",
    outcomes: [
      "Confident spreadsheet skills",
      "Workplace-ready formulas and reports",
      "Practical exercises you can use immediately",
    ],
    seoTitle: "Excel Course Sharjah | Microsoft Excel Training",
    seoDescription:
      "Microsoft Excel course in Sharjah for students and professionals. Practical batches at Success Star Training Center.",
    primaryKeyword: "Excel course Sharjah",
    featured: true,
  },
  {
    slug: "graphic-design-course-sharjah",
    title: "Graphic Design Course Sharjah",
    shortTitle: "Graphic Design",
    category: "Professional Skills",
    audience: "Beginners & creatives",
    duration: "Project-based batches",
    mode: "In-centre",
    summary:
      "Learn practical graphic design skills with guided projects so you can create clean visuals for school, business, or freelancing.",
    outcomes: [
      "Design fundamentals and tools practice",
      "Portfolio-ready project work",
      "Creative confidence for real briefs",
    ],
    seoTitle: "Graphic Design Course Sharjah | Success Star",
    seoDescription:
      "Graphic design course in Sharjah with practical projects and supportive instructors at Success Star Training Center.",
    primaryKeyword: "graphic design course Sharjah",
    featured: true,
  },
  {
    slug: "computer-software-training-sharjah",
    title: "Computer & Software Training Sharjah",
    shortTitle: "Computer Training",
    category: "Professional Skills",
    audience: "Beginners to intermediate",
    duration: "Flexible modules",
    mode: "In-centre + online",
    summary:
      "Computer and software skills training to help students and professionals stay ready for school, college, and workplace digital work.",
    outcomes: [
      "Essential computer literacy",
      "Software tools for study and work",
      "Step-by-step guided practice",
    ],
    seoTitle: "Computer Training Sharjah | Software Courses",
    seoDescription:
      "Computer and software training in Sharjah. Practical digital skills for students and professionals at Success Star.",
    primaryKeyword: "computer training Sharjah",
  },
  {
    slug: "university-pathway-consultancy-uae",
    title: "Higher Education & University Pathway Support",
    shortTitle: "University Pathways",
    category: "Higher Education",
    audience: "Bachelor’s, Master’s & doctoral aspirants",
    duration: "Guidance by stage",
    mode: "Consultation + study support",
    summary:
      "Educational consultancy and academic support for learners exploring higher-education pathways, with personalised planning and study guidance.",
    outcomes: [
      "Clear pathway planning",
      "Academic readiness support",
      "Guided next-step counselling",
    ],
    seoTitle: "University Pathway Consultancy Sharjah | Success Star",
    seoDescription:
      "Higher education and university pathway support in Sharjah. Personalised guidance from Success Star Training Center.",
    primaryKeyword: "university admission consultancy Sharjah",
  },
  {
    slug: "online-tutoring-uae",
    title: "Online Tutoring Across the UAE",
    shortTitle: "Online Tutoring",
    category: "School Tutoring",
    audience: "Sharjah, Dubai & UAE families",
    duration: "Weekly live sessions",
    mode: "Online",
    summary:
      "Live online tutoring for families who need flexible schedules without losing personal attention from our Sharjah-based team.",
    outcomes: [
      "Learn from home with live tutors",
      "Flexible timing for busy families",
      "Same personalised learning approach",
    ],
    seoTitle: "Online Tutoring UAE | Success Star Training Center",
    seoDescription:
      "Online tutoring from Success Star Training Center in Sharjah — flexible live sessions for students across the UAE.",
    primaryKeyword: "online tutoring UAE",
  },
];

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export const courseCategories = [
  "School Tutoring",
  "Kids Skills",
  "Professional Skills",
  "Higher Education",
] as const;

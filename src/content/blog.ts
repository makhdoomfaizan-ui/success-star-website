export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  keywords: string[];
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "how-to-choose-tutoring-centre-sharjah",
    title: "How to Choose a Tutoring Centre in Sharjah",
    excerpt:
      "A practical checklist for parents comparing tutoring centres in Sharjah — location, teaching style, progress tracking, and trust signals.",
    date: "2026-09-15",
    category: "Parents",
    keywords: ["tutoring centre Sharjah", "private tuition Sharjah"],
    content: [
      "Choosing a tutoring centre in Sharjah is easier when you focus on outcomes, not slogans. Start with the subjects your child needs, the curriculum they follow, and whether the centre can show a clear learning plan.",
      "Visit the centre if you can. Ask how progress is measured, how often parents receive updates, and whether classes are personalised or one-size-fits-all.",
      "Location matters for consistency. Families in Al Riqa and nearby Sharjah communities often do better with a nearby centre plus flexible online options for busy weeks.",
      "Finally, check real reviews, accreditation/registration claims, and whether you can book an assessment before committing to a long package.",
    ],
  },
  {
    slug: "mental-math-benefits-for-kids",
    title: "Why Mental Math Helps Kids Beyond Faster Calculations",
    excerpt:
      "Mental math builds focus, memory, and school confidence — not only speed. Here’s what parents in Sharjah should know.",
    date: "2026-09-22",
    category: "Kids Skills",
    keywords: ["mental math for kids Sharjah", "mental calculation Sharjah"],
    content: [
      "Mental math is more than quick answers. Children practise attention, working memory, and number sense — skills that support school maths and everyday problem solving.",
      "A good programme moves level by level, keeps sessions engaging, and shows parents visible improvement over time.",
      "At Success Star in Sharjah, mental math is designed for young learners who need confidence as much as technique.",
      "If your child freezes during timed work or avoids maths homework, a structured mental math class can be a strong first step.",
    ],
  },
  {
    slug: "excel-skills-students-professionals-uae",
    title: "Excel Skills Every Student and Professional in the UAE Should Learn",
    excerpt:
      "From school projects to office reports, Microsoft Excel is still one of the most useful career skills in the UAE.",
    date: "2026-10-01",
    category: "Professional Skills",
    keywords: ["Excel course Sharjah", "computer training Sharjah"],
    content: [
      "Excel shows up everywhere: school data work, university assignments, admin jobs, sales trackers, and management reports.",
      "Beginners should master clean data entry, basic formulas, charts, sorting/filtering, and simple dashboards before jumping into advanced tools.",
      "Practical courses work better than theory. Look for training that uses real examples and gives you files you can reuse at work or college.",
      "Success Star’s Excel course in Sharjah is built around hands-on practice so learners leave with skills they can use immediately.",
    ],
  },
  {
    slug: "igcse-exam-prep-plan-sharjah",
    title: "A Simple IGCSE Exam Prep Plan for Sharjah Students",
    excerpt:
      "Use this calm, practical revision structure to prepare for IGCSE exams without last-minute panic.",
    date: "2026-10-05",
    category: "Exam Prep",
    keywords: ["IGCSE tuition Sharjah", "exam preparation Sharjah"],
    content: [
      "Start with a subject map: list topics you know, topics you almost know, and topics you avoid. That map becomes your weekly plan.",
      "Use past papers early, not only in the final week. Timed practice reveals gaps while there is still time to fix them.",
      "Short, regular tutoring sessions often beat long cramming. Consistency builds exam stamina and confidence.",
      "If you need guided support in Sharjah, Success Star offers IGCSE-focused tuition with clear topic practice and feedback.",
    ],
  },
  {
    slug: "graphic-design-beginners-sharjah",
    title: "Starting Graphic Design as a Beginner in Sharjah",
    excerpt:
      "You do not need to be ‘naturally artistic’ to begin. A project-based design course can get you creating sooner than you think.",
    date: "2026-10-08",
    category: "Creative Skills",
    keywords: ["graphic design course Sharjah", "design training Sharjah"],
    content: [
      "Beginners progress fastest when they learn design basics through small real projects — posters, social graphics, simple brand layouts.",
      "Focus first on hierarchy, contrast, spacing, and readable type. Tools matter, but judgement matters more.",
      "Build a tiny portfolio from course projects. Even three clean pieces help for freelance starts or college applications.",
      "Success Star’s graphic design course in Sharjah supports beginners with structured practice and instructor guidance.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

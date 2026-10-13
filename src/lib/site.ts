export const site = {
  name: "Success Star Training Center",
  shortName: "Success Star",
  tagline: "Focused academic support from FS1 to Year 12 in Sharjah.",
  description:
    "Success Star Training Center in Al Riqa, Sharjah — a focus academy for FS1 to Year 12 academics, with IELTS and short skills courses for families who want clear progress.",
  url: "https://successstartraining.com",
  email: "info@successstartraining.com",
  phone: "+971508596379",
  phoneDisplay: "+971 50 859 6379",
  landline: "+97165379711",
  landlineDisplay: "+971 6 537 9711",
  whatsapp:
    "https://wa.me/971508596379?text=Hello%20Success%20Star%2C%20I%20want%20to%20enquire%20about%20academic%20support%20FS1%20to%20Year%2012.",
  address:
    "Villa No. 295, Sheikh Khalid Bin Mohammed Al Qasimi St, Al Ghafiya - Al Riqa Suburb, Sharjah, UAE",
  area: "Al Riqa, Sharjah",
  city: "Sharjah",
  country: "United Arab Emirates",
  hours: [
    { day: "Monday – Thursday", time: "8:00 AM – 4:00 PM" },
    { day: "Friday – Sunday", time: "Closed / by appointment" },
  ],
  mapsQuery:
    "Villa+295+Sheikh+Khalid+Bin+Mohammed+Al+Qasimi+St+Al+Ghafiya+Al+Riqa+Sharjah",
  social: {
    facebook: "https://www.facebook.com/sstraining.ae",
    instagram: "https://www.instagram.com/sstraining.ae",
    linkedin: "https://www.linkedin.com/company/sstraining",
  },
  accreditation: "Registered with the Sharjah Private Education Authority (SPEA)",
} as const;

/** Primary journey = academics. Short courses live under /courses as secondary. */
export const nav = [
  { href: "/academics", label: "Academics" },
  { href: "/gallery", label: "Life at Success Star" },
  { href: "/admissions", label: "Admissions" },
  { href: "/courses", label: "Short Courses" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const academicStages = [
  {
    stage: "FS1 – FS2",
    title: "Foundation",
    ages: "Early years",
    focus: "Playful foundations in literacy, numbers, confidence and school readiness.",
  },
  {
    stage: "Year 1 – 6",
    title: "Primary",
    ages: "Primary years",
    focus: "Core subjects, homework support and strong learning habits that stick.",
  },
  {
    stage: "Year 7 – 9",
    title: "Lower Secondary",
    ages: "Key Stage 3",
    focus: "Subject depth, exam skills and confidence through the secondary jump.",
  },
  {
    stage: "Year 10 – 12",
    title: "Upper Secondary",
    ages: "IGCSE & beyond",
    focus: "Exam preparation, revision plans and results-focused academic coaching.",
  },
] as const;

export const site = {
  name: "Success Star Training Center",
  shortName: "Success Star",
  tagline: "From first steps to future leaders — success starts here.",
  description:
    "Sharjah training centre for school tutoring, mental math, computer skills, and higher-education pathways. SPEA-registered support from foundation years to university.",
  url: "https://successstartraining.com",
  email: "info@successstartraining.com",
  phone: "+971508596379",
  phoneDisplay: "+971 50 859 6379",
  landline: "+97165379711",
  landlineDisplay: "+971 6 537 9711",
  whatsapp:
    "https://wa.me/971508596379?text=Hello%20Success%20Star%2C%20I%20want%20to%20enquire%20about%20courses.",
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
    linkedin: "https://www.linkedin.com/company/sstraining",
  },
  accreditation: "Registered with the Sharjah Private Education Authority (SPEA)",
} as const;

export const nav = [
  { href: "/courses", label: "Courses" },
  { href: "/admissions", label: "Admissions" },
  { href: "/faculty", label: "Faculty" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

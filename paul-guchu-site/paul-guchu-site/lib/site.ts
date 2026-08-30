// Central configuration for Paul Guchu's fitness website.
// Update trainer info, packages, nav, and social links here; everything
// else on the site reads from this single source of truth.

export const trainer = {
  name: "Paul Guchu",
  title: "Certified Fitness Trainer",
  location: "Dubai, UAE",
  whatsappNumber: "971555420634", // digits only, used to build wa.me links
  whatsappDisplay: "+971 55 542 0634",
  email: "cp.fitwithpaul@gmail.com",
};

export const certifications = [
  {
    name: "Active IQ Level 3 Diploma in Personal Training",
    icon: "certificate",
  },
  {
    name: "Active IQ Level 2 Diploma in Gym Instructing",
    icon: "dumbbell",
  },
  {
    name: "Emergency First Aid / CPR Certification",
    icon: "heart",
  },
] as const;

// Matches the reference nav (Home / About / Plans / Contact).
// "Login" from the reference is intentionally omitted per brief.
export const nav = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Plans", href: "#pricing" },
  { label: "Contact", href: "#contact" },
] as const;

// Free-to-use stock photography (Pexels License, free for commercial use,
// no attribution legally required, but credited in IMAGE-CREDITS.md anyway).
// All by photographer Andrea Piacquadio.
export const stockImages = {
  groupWorkout:
    "https://images.pexels.com/photos/863926/pexels-photo-863926.jpeg?auto=compress&cs=tinysrgb&w=1600",
  womenWarmup:
    "https://images.pexels.com/photos/4376663/pexels-photo-4376663.jpeg?auto=compress&cs=tinysrgb&w=1600",
  womenDumbbells:
    "https://images.pexels.com/photos/903171/pexels-photo-903171.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

export const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=61554854015437",
  instagram: "https://www.instagram.com/coach_pau?igsi=aXZ2eDZsbmNnNDBj",
  tiktok: "https://www.tiktok.com/@coach_paul5?_r=1&_t=ZS-99JiejzLOPH",
  linkedin: "#",
};

export type TrainingPlan = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  features: string[];
  image: string;
  whatsappMessage: string;
  highlighted?: boolean;
};

export const trainingPlans: TrainingPlan[] = [
  {
    id: "basic",
    name: "Basic Package",
    price: "AED 1,200",
    priceNote: "/ month",
    features: [
      "2 training sessions per week (8 sessions/month)",
      "Fitness assessment",
      "Basic workout plan",
      "Monthly progress review",
    ],
    image: "/images/WhatsApp_Image_2026-08-28_at_5_59_20_PM.jpeg",
    whatsappMessage:
      "Hi Paul, I'm interested in the Basic Package. Could you please share the next steps?",
  },
  {
    id: "standard",
    name: "Standard Package",
    price: "AED 2,000",
    priceNote: "/ month",
    features: [
      "3 training sessions per week (12 sessions/month)",
      "Personalized workout program",
      "Nutrition guidance",
      "Weekly progress tracking",
      "WhatsApp support",
    ],
    image: "/images/WhatsApp_Image_2026-08-28_at_5_59_22_PM.jpeg",
    whatsappMessage:
      "Hi Paul, I'm interested in the Standard Package. Could you please share the next steps?",
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium Package",
    price: "AED 3,500",
    priceNote: "/ month",
    features: [
      "4 to 5 training sessions per week (16 to 20 sessions/month)",
      "Customized training and nutrition plan",
      "Body composition tracking",
      "Unlimited WhatsApp support",
      "Lifestyle and habit coaching",
    ],
    image: "/images/WhatsApp_Image_2026-08-28_at_5_59_22_PM__1_.jpeg",
    whatsappMessage:
      "Hi Paul, I'm interested in the Premium Package. Could you please share the next steps?",
  },
  {
    id: "group",
    name: "Group Training Package",
    price: "AED 400",
    priceNote: "/ person / month",
    features: [
      "Small group sessions (3 to 10 people)",
      "3 sessions per week",
      "Group accountability and support",
    ],
    image: stockImages.groupWorkout,
    whatsappMessage:
      "Hi Paul, I'm interested in the Group Training Package. Could you please share the details?",
  },
];

export const faqs = [
  {
    question: "What does personal training with Paul Guchu include?",
    answer:
      "Personal training with Paul includes a fitness assessment, a structured workout plan tailored to your goals, and regular progress tracking. Higher-tier packages add nutrition guidance and ongoing WhatsApp support.",
  },
  {
    question: "How much does personal training cost?",
    answer:
      "Packages range from AED 1,200/month for the Basic Package up to AED 3,500/month for the Premium Package. Group Training is available at AED 400 per person/month.",
  },
  {
    question: "What qualifications does Paul Guchu have?",
    answer:
      "Paul holds an Active IQ Level 3 Diploma in Personal Training, an Active IQ Level 2 Diploma in Gym Instructing, and an Emergency First Aid / CPR Certification.",
  },
  {
    question: "What is included in the Basic Package?",
    answer:
      "2 training sessions per week (8 sessions/month), a fitness assessment, a basic workout plan, and a monthly progress review.",
  },
  {
    question: "What is included in the Standard Package?",
    answer:
      "3 training sessions per week (12 sessions/month), a personalized workout program, nutrition guidance, weekly progress tracking, and WhatsApp support.",
  },
  {
    question: "What is included in the Premium Package?",
    answer:
      "4 to 5 sessions per week (16–20 sessions/month), a customized training and nutrition plan, body composition tracking, unlimited WhatsApp support, and lifestyle and habit coaching.",
  },
  {
    question: "Do you offer group training?",
    answer:
      "Yes. Group Training is run in small groups of 3 to 10 people, 3 sessions per week, at AED 400 per person/month.",
  },
  {
    question: "How do I get started?",
    answer:
      "Message Paul on WhatsApp using any of the contact buttons on this site, or fill in the contact form. He'll reply with the next steps.",
  },
] as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";

import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

export const personalInfo = {
  name: "SAKSHAM MOGHA",
  role: "AI Expert",
  bio: "Decoding the future. Passionate about AI and its potential to transform the world. Not a robot, just really into them.",
  location: "India",
  experience_years: "16+",
  focus: "AI, Diplomacy, Geopolitics",
  email: "saksham456456@gmail.com",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/saksham456456",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/saksham-mogha-b4094a37a",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      url: "https://x.com/SAKSHAM_456456",
      icon: Twitter,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/saksham_456456",
      icon: Instagram,
    },
    {
      name: "Email",
      url: "mailto:saksham456456@gmail.com",
      icon: Mail,
    },
  ],
};

export const skills = {
  technical: [
    { name: "AI Expert", icon: "SiOpenai" },
    { name: "Dark Manipulator", icon: "SiGhost" },
    { name: "Diplomat", icon: "SiGlobe" },
    { name: "Geopolitical Analyst", icon: "SiGraph" },
  ],
  tools: ["Brain"],
};

export const experience = [
  {
    id: 1,
    year: "2008 - Present",
    title: "AI & Diplomacy Expert",
    description: "16+ years of continuous and effective experience becoming an expert in AI and Diplomacy.",
    highlights: ["AI Mastery", "Diplomatic Strategy", "Geopolitical Analysis"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Cognito AI",
    description: "An AI developed from scratch trained with several LLM models.",
    tech: ["Custom AI", "LLMs", "Encryption"],
    image: "/cognito-logo.png",
    link: "#",
    details: {
      problem: "The need for a secure, private, and versatile AI system.",
      solution: "Built entirely from scratch using extensive experience and knowledge.",
      features: ["100% Privacy", "Encryption", "Multi-Model Intelligence"],
    },
  },
];

export const stats = [
  { label: "Experience", value: "16+ Years" },
  { label: "Focus", value: "100%" }, // Added filler stats to maintain layout balance
  { label: "Commitment", value: "∞" },
  { label: "Rivals", value: "0" },
];

export const philosophy = {
  quote: "No one is better than me, its always me vs me",
  author: "Saksham Mogha"
};

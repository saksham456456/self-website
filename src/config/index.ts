import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const personalInfo = {
  name: "ALEX CHEN",
  role: "AI-Driven Creator • Tech Innovator • Digital Architect",
  bio: "A dynamic, technology-forward creator specializing in AI-driven experiences, full-stack development, and cinematic digital design. Focused on building immersive interfaces that merge creativity with engineering precision.",
  location: "San Francisco, CA",
  experience_years: "6+",
  focus: "AI, Web, Automation",
  email: "alex.chen@example.com",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: Twitter,
    },
    {
      name: "Email",
      url: "mailto:alex.chen@example.com",
      icon: Mail,
    },
  ],
};

export const skills = {
  technical: [
    { name: "Next.js", icon: "SiNextdotjs" }, // Using string identifiers for now, will map to icons or use Lucide
    { name: "React", icon: "SiReact" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Tailwind", icon: "SiTailwindcss" },
    { name: "Three.js", icon: "SiThreedotjs" },
    { name: "Python", icon: "SiPython" },
    { name: "AI/ML", icon: "SiOpenai" },
  ],
  tools: ["Git", "VSCode", "Figma", "Vercel"],
};

export const experience = [
  {
    id: 1,
    year: "2024",
    title: "Lead Developer at TechCorp",
    description: "Built high-traffic web platforms. Designed AI-powered workflows.",
    highlights: ["Scalable Architecture", "Team Leadership"],
  },
  {
    id: 2,
    year: "2023",
    title: "AI Project: Neural Vision System",
    description: "Created a real-time neural-visual dashboard.",
    highlights: ["Computer Vision", "Real-time Data"],
  },
  {
    id: 3,
    year: "2022",
    title: "Freelance Full-Stack Developer",
    description: "Delivered 30+ client projects.",
    highlights: ["E-commerce", "SaaS MVPs"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Nexus Dashboard",
    description: "A futuristic data visualization dashboard for AI metrics.",
    tech: ["Next.js", "Three.js", "Tailwind"],
    image: "/placeholder-project-1.jpg",
    link: "#",
    details: {
      problem: "Visualizing complex neural network states in real-time.",
      solution: "Implemented a WebGL-based particle system to represent node weights.",
      features: ["Real-time updates", "3D Graph View", "Exportable Reports"],
    },
  },
  {
    id: 2,
    title: "CyberCommerce",
    description: "Headless e-commerce platform with 3D product previews.",
    tech: ["React", "Shopify API", "Framer Motion"],
    image: "/placeholder-project-2.jpg",
    link: "#",
    details: {
      problem: "Static product images were not converting.",
      solution: "Integrated 3D model viewer with AR capabilities.",
      features: ["AR View", "Custom Shaders", "Fast Checkout"],
    },
  },
  {
    id: 3,
    title: "AI Chat Interface",
    description: "Glassmorphism-based chat UI for LLMs.",
    tech: ["TypeScript", "OpenAI API", "Vercel SDK"],
    image: "/placeholder-project-3.jpg",
    link: "#",
    details: {
      problem: "Standard chat interfaces look boring.",
      solution: "Created a holographic UI with voice input visualization.",
      features: ["Voice Reactive", "Streaming Text", "Context Memory"],
    },
  },
];

export const stats = [
  { label: "Projects Completed", value: "50+" },
  { label: "Combined Views", value: "1M+" },
  { label: "Years Experience", value: "4+" },
  { label: "Client Satisfaction", value: "98%" },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO @ FutureTech",
    quote:
      "Alex transformed our digital presence. The 3D integrations were seamless and high-performance.",
    avatar: "/avatars/sarah.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder @ StartUp",
    quote:
      "Incredible attention to detail. The animations feel cinematic but the site remains lightning fast.",
    avatar: "/avatars/michael.jpg",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Design Lead",
    quote: "A developer who truly understands design. A rare find.",
    avatar: "/avatars/elena.jpg",
  },
];

import { BookOpen, Brain, Clock, Users, Shield, Bot } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Advanced artificial intelligence algorithms adapt to each student's learning style and pace."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock assistance for students, providing help whenever they need it."
  },
  {
    icon: BookOpen,
    title: "Comprehensive Support",
    description: "Covers multiple subjects and learning materials with detailed explanations."
  },
  {
    icon: Users,
    title: "Interactive Learning",
    description: "Engaging learning experience through natural conversation and real-time feedback."
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Protected environment ensuring student data privacy and security."
  },
  {
    icon: Bot,
    title: "Smart Analytics",
    description: "Detailed insights into student performance and learning patterns."
  }
];
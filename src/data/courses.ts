import { CourseDataT } from "@/types";

export const courseData: CourseDataT[] = [
  {
    id: 1,
    title: "A1 – Beginner Level (Grundstufe 1)",
    description:
      "Perfect for absolute beginners. Learn foundational German vocabulary and grammar.",
    level: "A1",
    price: 299,
    imageUrl: "/course1.png",
    duration: "8 weeks",
    whatYouWillLearn: [
      "Basic German vocabulary",
      "Simple grammar rules",
      "Everyday conversation skills",
    ],
    schedule: {
      daysOfWeek: ["Monday", "Wednesday", "Friday"],
      time: "6:00 PM - 7:30 PM",
      coursePeriod: ["Jan 10 - Mar 4", "Mar 14 - May 6"],
    },
  },
  {
    id: 2,
    title: "A2 – Elementary Level (Grundstufe 2)",
    description:
      "Build on basic knowledge and develop simple conversation skills.",
    level: "A2",
    price: 349,
    imageUrl: "/course2.png",
    duration: "10 weeks",
    schedule: {
      daysOfWeek: ["Tuesday", "Thursday"],
      time: "6:00 PM - 7:30 PM",
      coursePeriod: ["Jan 11 - Mar 17", "Mar 22 - May 26"],
    },
  },
  {
    id: 3,
    title: "B1 - Intermediate Level (Mittelstufe 1)",
    description:
      "Achieve independent communication for work and daily life scenarios.",
    level: "B1",
    price: 399,
    imageUrl: "/course3.png",
    duration: "12 weeks",
    whatYouWillLearn: [
      "Intermediate German vocabulary",
      "Complex grammar rules",
      "Professional communication skills",
    ],
    schedule: {
      daysOfWeek: ["Monday", "Wednesday", "Friday"],
      time: "6:00 PM - 7:30 PM",
      coursePeriod: ["Jan 10 - Mar 4", "Mar 14 - May 6"],
    },
  },
  {
    id: 4,
    title:
      "B2 – Upper Intermediate Business German (Mittelstufe 2: Berufssprache)",
    description:
      "Express yourself fluently and understand complex texts and discussions.",
    level: "B2",
    price: 449,
    imageUrl: "/course4.png",
    duration: "12 weeks",
    whatYouWillLearn: [
      "Advanced German vocabulary",
      "Business communication skills",
      "Cultural understanding",
    ],
    schedule: {
      daysOfWeek: ["Tuesday", "Thursday"],
      time: "6:00 PM - 7:30 PM",
      coursePeriod: ["Jan 11 - Mar 17", "Mar 22 - May 26"],
    },
  },
  {
    id: 5,
    title: "C1 – Advanced Level (Fortgeschrittene: Sprachliche Perfektion)",
    description:
      "Master complex language for academic and professional environments.",
    level: "C1",
    price: 499,
    imageUrl: "/course5.png",
    duration: "14 weeks",
    whatYouWillLearn: [
      "Proficient German vocabulary",
      "Advanced grammar rules",
      "Critical thinking and analysis",
    ],
    schedule: {
      daysOfWeek: ["Monday", "Wednesday", "Friday"],
      time: "6:00 PM - 7:30 PM",
      coursePeriod: ["Jan 10 - Mar 4", "Mar 14 - May 6"],
    },
  },
  {
    id: 6,
    title: "TestDaF Preparation",
    description:
      "Specialized training for the Test of German as a Foreign Language exam.",
    level: "B2-C1",
    price: 549,
    imageUrl: "/course6.png",
    duration: "8 weeks",
    whatYouWillLearn: [
      "TestDaF exam structure",
      "Test-taking strategies",
      "Practice tests and feedback",
    ],
    schedule: {
      daysOfWeek: ["Saturday", "Sunday"],
      time: "10:00 AM - 12:00 PM",
      coursePeriod: ["Jan 15 - Mar 6", "Mar 12 - May 1  "],
    },
  },
];

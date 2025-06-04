import { CourseDataT } from "@/types";

export const courseData: CourseDataT[] = [
  {
    id: "1",
    title: "A1 – Beginner Level (Grundstufe 1)",
    description:
      "Designed for absolute beginners, this course introduces fundamental German vocabulary, grammar, and essential communication skills for everyday situations.",
    level: "A1",
    price: 300,
    imageUrl: "/course1.png",
    duration: "8 weeks",
    whatYouWillLearn: [
      "Essential German vocabulary and pronunciation",
      "Basic sentence structures and grammar rules",
      "Understanding and forming simple conversations",
    ],
    schedule: {
      daysOfWeek: ["Monday", "Wednesday", "Friday"],
      time: "6:00 PM - 7:30 PM",
      coursePeriod: ["Jan 10 - Mar 4", "Mar 14 - May 6"],
    },
  },
  {
    id: "2",
    title: "A2 – Elementary Level (Grundstufe 2)",
    description:
      "Expand your basic knowledge and gain confidence in speaking, writing, and understanding German in everyday contexts.",
    level: "A2",
    price: 300,
    imageUrl: "/course2.png",
    duration: "10 weeks",
    whatYouWillLearn: [
      "Extended vocabulary for daily conversations",
      "More complex grammar structures (past and future tenses)",
      "Writing simple texts and understanding short dialogues",
      "Expressing personal opinions in basic discussions",
    ],
    schedule: {
      daysOfWeek: ["Tuesday", "Thursday"],
      time: "6:00 PM - 7:30 PM",
      coursePeriod: ["Jan 11 - Mar 17", "Mar 22 - May 26"],
    },
  },
  {
    id: "3",
    title: "B1 - Intermediate Level (Mittelstufe 1)",
    description:
      "Develop independent communication skills for work, travel, and everyday life with a stronger grasp of German grammar and vocabulary.",
    level: "B1",
    price: 350,
    imageUrl: "/course3.png",
    duration: "12 weeks",
    whatYouWillLearn: [
      "Intermediate vocabulary for professional and social settings",
      "Complex sentence structures and modal verbs",
      "Reading and summarizing short articles and emails",
      "Confidently participating in discussions and problem-solving",
    ],
    schedule: {
      daysOfWeek: ["Monday", "Wednesday", "Friday"],
      time: "6:00 PM - 7:30 PM",
      coursePeriod: ["Jan 10 - Mar 4", "Mar 14 - May 6"],
    },
  },
  {
    id: "4",
    title:
      "B2 – Upper Intermediate Business German (Mittelstufe 2: Berufssprache)",
    description:
      "Enhance your fluency and comprehension to engage in professional discussions, understand complex texts, and express opinions confidently.",
    level: "B2",
    price: 350,
    imageUrl: "/course4.png",
    duration: "12 weeks",
    whatYouWillLearn: [
      "Advanced vocabulary for business and academic use",
      "Clear articulation of ideas in professional and social contexts",
      "Understanding and analyzing complex texts and discussions",
      "Writing structured emails, reports, and presentations",
    ],
    schedule: {
      daysOfWeek: ["Tuesday", "Thursday"],
      time: "6:00 PM - 7:30 PM",
      coursePeriod: ["Jan 11 - Mar 17", "Mar 22 - May 26"],
    },
  },
  {
    id: "5",
    title: "C1 – Advanced Level (Fortgeschrittene: Sprachliche Perfektion)",
    description:
      "Achieve near-native proficiency in German for academic, business, and everyday professional interactions.",
    level: "C1",
    price: 400,
    imageUrl: "/course5.png",
    duration: "14 weeks",
    whatYouWillLearn: [
      "Comprehensive vocabulary for academic and professional communication",
      "Mastering complex grammar structures",
      "Critical thinking and structured argumentation in German",
      "Understanding and discussing abstract and technical topics",
    ],
    schedule: {
      daysOfWeek: ["Monday", "Wednesday", "Friday"],
      time: "6:00 PM - 7:30 PM",
      coursePeriod: ["Jan 10 - Mar 4", "Mar 14 - May 6"],
    },
  },
  {
    id: "6",
    title: "TestDaF Preparation",
    description:
      "Intensive training for the TestDaF exam, focusing on test structure, strategies, and practice to achieve high scores.",
    level: "B2-C1",
    price: 400,
    imageUrl: "/course6.png",
    duration: "8 weeks",
    whatYouWillLearn: [
      "Familiarization with TestDaF exam format and requirements",
      "Effective test-taking strategies for reading, writing, listening, and speaking",
      "Analyzing and answering exam-style questions",
      "Mock exams with personalized feedback",
    ],
    schedule: {
      daysOfWeek: ["Saturday", "Sunday"],
      time: "10:00 AM - 12:00 PM",
      coursePeriod: ["Jan 15 - Mar 6", "Mar 12 - May 1"],
    },
  },
];

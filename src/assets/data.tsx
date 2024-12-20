import {
  BookIcon,
  ClipboardIcon,
  ContactIcon,
  SunIcon,
  WhatsAppIcon,
} from "./icons";

export const QUICK_LINKS: Array<{
  id: number;
  icon?: React.ReactNode;
  title: string;
  description: string;
  variant: "base" | "primary" | "secondary" | "tertiary";
} | null> = [
  {
    id: 1,
    icon: <>{BookIcon}</>,
    title: "Canvas LMS",
    description:
      "Click here to access your LMS portal for assignments, class recordings and notes.",
    variant: "tertiary",
  },
  {
    id: 2,
    icon: <>{ContactIcon}</>,
    title: "Join Live Class",
    description: "Class 7 Math is starting in 1 hour, 35 minutes.",
    variant: "secondary",
  },
  {
    id: 3,
    icon: <>{WhatsAppIcon}</>,
    title: "Contact Teacher",
    description:
      "Click here to contact your teacher for any doubts or concerns.",
    variant: "primary",
  },
];

export const ANNOUNCEMENT_DATA: Array<{
  id: number;
  icon?: React.ReactNode;
  announcement: string;
}> = [
  {
    id: 1,
    icon: <>{SunIcon}</>,
    announcement:
      "On account of Independence Day, August 15th will be a holiday.",
  },
  {
    id: 2,
    icon: <>{ClipboardIcon}</>,
    announcement:
      "Reminder to finish your assignments and submit them by Monday..",
  },
];

export const CLASS_RECORDINGS: Array<{
  id: number;
  standard: number;
  subjects: string;
  topic: string;
  date: Date;
  videoUrl: string;
}> = [
  {
    id: 1,
    standard: 7,
    subjects: "Math",
    topic: "Algebraic Equations",
    date: new Date("2024-10-24"),
    videoUrl: "/assets/video.jpeg",
  },
  {
    id: 2,
    standard: 7,
    subjects: "Math",
    topic: "Differential Maths",
    date: new Date("2024-10-24"),
    videoUrl: "/assets/video.jpeg",
  },
  {
    id: 3,
    standard: 7,
    subjects: "Science",
    topic: "Fundamentals of Organic Chemistry",
    date: new Date("2024-10-24"),
    videoUrl: "/assets/video.jpeg",
  },
  {
    id: 4,
    standard: 7,
    subjects: "Math",
    topic: "Trignometry 101",
    date: new Date("2024-10-24"),
    videoUrl: "/assets/video.jpeg",
  },
];

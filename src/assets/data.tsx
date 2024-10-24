import {BookIcon, ContactIcon, WhatsAppIcon} from "./icons";

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

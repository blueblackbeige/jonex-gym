export type Membership = {
  name: string;
  price: string;
  period: string;
  eyebrow: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const navigation = [
  { label: "The club", href: "#club" },
  { label: "Training", href: "#training" },
  { label: "Memberships", href: "#memberships" },
  { label: "Hours", href: "#hours" },
];

export const trainingSpaces = [
  {
    number: "01",
    title: "Strength",
    description: "Free weights, resistance stations, and the space to stay focused.",
    image: "/assets/strength.jpg",
    accent: "Power lives here",
  },
  {
    number: "02",
    title: "Cardio",
    description: "Build capacity with equipment that keeps pace with your goals.",
    image: "/assets/cardio.jpg",
    accent: "Keep moving",
  },
  {
    number: "03",
    title: "Conditioning",
    description: "A dedicated treadmill lane for the miles that shape your mindset.",
    image: "/assets/treadmills.jpg",
    accent: "Find your rhythm",
  },
];

export const memberships: Membership[] = [
  {
    name: "Starter",
    price: "₹2,000",
    period: "3 months",
    eyebrow: "Cardio included",
    description: "A consistent start with the full training floor at your disposal.",
    features: ["Gym-floor access", "Cardio floor access", "Strength & conditioning"],
  },
  {
    name: "Committed",
    price: "₹4,200",
    period: "6 months",
    eyebrow: "Most popular",
    description: "The sweet spot for turning a plan into a real habit.",
    features: ["Gym-floor access", "Cardio floor access", "Strength & conditioning", "Progress check-in"],
    highlighted: true,
  },
  {
    name: "All year",
    price: "₹6,000",
    period: "12 months",
    eyebrow: "Best value",
    description: "Twelve months of room to build your strongest routine yet.",
    features: ["Gym-floor access", "Cardio floor access", "Strength & conditioning", "Best annual rate"],
  },
];

export const schedule = [
  ["Monday to Saturday", "6:00 AM to 11:00 PM"],
  ["Sunday", "7:00 AM to 9:00 PM"],
  ["Personal training", "Available by appointment"],
];

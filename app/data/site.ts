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
  { label: "Why Jonex", href: "#club" },
  { label: "The floor", href: "#training" },
  { label: "Memberships", href: "#memberships" },
];

export const trainingSpaces = [
  {
    number: "01",
    title: "Strength",
    description: "The weights, racks, and machines to take your training seriously.",
    image: "/assets/strength.jpg",
    accent: "Lift a little more",
  },
  {
    number: "02",
    title: "Cardio",
    description: "A bright, energetic zone for the sessions that build your engine.",
    image: "/assets/cardio.jpg",
    accent: "Keep moving forward",
  },
  {
    number: "03",
    title: "Conditioning",
    description: "Your lane for steady steps, fast bursts, and every pace in between.",
    image: "/assets/treadmills.jpg",
    accent: "Move at your pace",
  },
];

export const memberships: Membership[] = [
  {
    name: "Find your rhythm",
    price: "₹2,000",
    period: "3 months",
    eyebrow: "Cardio included",
    description: "Enough time to settle in, try the floor, and make training part of your week.",
    features: ["Gym-floor access", "Cardio floor access", "Strength & conditioning"],
  },
  {
    name: "Build the habit",
    price: "₹4,200",
    period: "6 months",
    eyebrow: "Most popular",
    description: "Our most-loved plan for members who are ready to stay consistent.",
    features: ["Gym-floor access", "Cardio floor access", "Strength & conditioning", "Progress check-in"],
    highlighted: true,
  },
  {
    name: "Go all in",
    price: "₹6,000",
    period: "12 months",
    eyebrow: "Best value",
    description: "The best value for a full year of showing up for yourself.",
    features: ["Gym-floor access", "Cardio floor access", "Strength & conditioning", "Best annual rate"],
  },
];

export const schedule = [
  ["Monday to Saturday", "6:00 AM to 11:00 PM"],
  ["Sunday", "7:00 AM to 9:00 PM"],
  ["Personal training", "Available by appointment"],
];

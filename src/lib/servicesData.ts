// Shared service card type and initial data
export type ServiceCard = {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const initialCards: ServiceCard[] = [
  {
    title: "Basic Plan",
    price: "INR 2000",
    description: "Perfect for startups and small businesses taking their first step into eCommerce.",
    features: [
      "Complete Store Design & Development",
      "Shopify Store Setup",
      "Payment Gateway Integration",
      "Shopify Training & Walkthrough"
    ]
  },
  {
    title: "Premium Plan",
    price: "INR 6500",
    description: "Ideal for growing brands that want enhanced customer experience and smoother transactions.",
    features: [
      "Includes Everything in Basic",
      "Checkout Integration (Optimized for conversions)"
    ],
    highlighted: true
  },
  {
    title: "Professional Plan",
    price: "INR 15000",
    description: "Best suited for established businesses looking for a fully functional and conversion-driven Shopify store.",
    features: [
      "Includes Everything in Premium",
      "Advanced Customizations & Tweaks (UI/UX based)",
      "Performance Optimization",
      "Strategic Store Structuring for Better Sales"
    ]
  },
];

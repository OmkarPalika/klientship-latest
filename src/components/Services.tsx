"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import type { FC } from 'react';
import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Services: FC = () => {
    const [imageLoading, setImageLoading] = useState(true);

    const handleWhatsAppClick = (planTitle: string) => {
        const message = `Hi, I'm interested in the ${planTitle} for Shopify development services.`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/+919876543210?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="flex flex-col items-center py-8 md:py-12 min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 px-4 sm:px-6 md:px-8 lg:px-16">
            <motion.div 
                className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800 tracking-tight">
                    Limited Period Offer
                </h1>
                <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
                    Avail our services at special discounted rates. Offer ends soon!
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full max-w-7xl">
                {[
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
                    }
                ].map((plan, index) => (
                    <motion.div
                        key={plan.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                    >
                        <Card className={`relative w-full bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 ${
                            plan.highlighted ? 'border-2 border-black scale-105 z-10' : ''
                        }`}>
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md">
                                    Most Popular
                                </div>
                            )}
                            <CardHeader className="space-y-6 p-6">
                                <div className="relative w-full h-48 sm:h-40 lg:h-48 rounded-lg overflow-hidden">
                                    <Image
                                        src="https://klientship.online/social-bubble/assets/images/posters/shopify_ecommerce.jpg"
                                        alt="Shopify eCommerce Website"
                                        width={500}
                                        height={500}
                                        className={`object-cover transition-opacity duration-500 ${
                                            imageLoading ? 'opacity-0' : 'opacity-100'
                                        }`}
                                        onLoad={() => setImageLoading(false)}
                                    />
                                </div>
                                <div>
                                    <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                                        {plan.title}
                                    </CardTitle>
                                    <CardDescription className="text-base text-gray-600">
                                        {plan.description}
                                    </CardDescription>
                                </div>
                            </CardHeader>

                            <CardContent className="p-6 pt-0">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className="w-full text-center">
                                            <h2 className="text-3xl md:text-4xl font-bold mb-6 transition-colors">
                                                {plan.price}
                                            </h2>
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-gray-900 text-white p-3">
                                            <p>Save up to 20% with annual billing</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                                <div className="flex flex-col space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-700">Key Features:</h3>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start space-x-3">
                                                <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-600 leading-tight">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>

                            <CardFooter className="flex flex-col sm:flex-row gap-4 p-6 pt-0 justify-center">
                                <Button 
                                    variant="outline" 
                                    className="hover:bg-gray-50"
                                >
                                    Know More
                                </Button>
                                <Button 
                                    className="text-white"
                                    onClick={() => handleWhatsAppClick(plan.title)}
                                >
                                    WhatsApp Now
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
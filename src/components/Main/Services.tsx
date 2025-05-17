"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import dynamic from "next/dynamic";
import type { FC } from 'react';
import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useServicesStore } from "@/lib/servicesStore";
import type { ServiceCard } from "@/lib/servicesData";

const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });

const Services: FC = () => {
    const [imageLoading, setImageLoading] = useState(true);
    const cards = useServicesStore((state: { cards: ServiceCard[] }) => state.cards);

    const handleWhatsAppClick = (planTitle: string) => {
        const message = `Hi, I'm interested in the ${planTitle} for Shopify development services.`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/+919876543210?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="flex flex-col items-center py-8 md:py-12 min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 px-4 sm:px-6 md:px-8 lg:px-16">
            <MotionDiv
                className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800 tracking-tight">
                    Limited Period Offer
                </h1>
                <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto text-center">
                    Avail our services at special discounted rates. Offer ends soon!
                </p>
            </MotionDiv>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full max-w-7xl">
                {cards.map((plan: ServiceCard, index: number) => (
                    <MotionDiv
                        key={plan.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                    >
                        <Card className={`relative w-full bg-white shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 ${plan.highlighted ? 'border-2 border-black scale-105 z-10' : ''
                            }`}>
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md">
                                    Most Popular
                                </div>
                            )}
                            <CardHeader className="space-y-2 p-6">
                                <div className="relative w-full h-48 sm:h-40 lg:h-48 rounded-lg overflow-hidden">
                                    <Image
                                        src="/shopify_ecommerce.webp"
                                        alt="Shopify eCommerce Website"
                                        priority
                                        width={500}
                                        height={500}
                                        quality={80}
                                        style={{ width: '100%', height: 'auto' }}
                                        className={`object-cover transition-opacity duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
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
                                        <TooltipTrigger className="w-full text-center min-h-[48px] min-w-[48px]">
                                            <h2 className="text-3xl md:text-4xl font-bold mb-6 transition-colors">
                                                {plan.price}
                                            </h2>
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-gray-900 text-white p-3">
                                            <p className="text-sm">Save up to 20% with annual billing</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                                <div className="flex flex-col space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-700">Key Features:</h3>
                                    <ul>
                                        {plan.features.map((feature: string, i: number) => (
                                            <li key={i} className="flex items-start space-x-3 min-h-[44px] py-2">
                                                <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-base text-gray-600 leading-tight">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>

                            <CardFooter className="flex flex-col sm:flex-row gap-6 p-6 pt-0 justify-center">
                                <Button
                                    variant="outline"
                                    className="hover:bg-gray-50 text-base w-full sm:w-auto px-6 py-4 min-h-[48px]"
                                >
                                    Know More
                                </Button>
                                <Button
                                    className="text-white text-base w-full sm:w-auto px-6 py-4 min-h-[48px]"
                                    onClick={() => handleWhatsAppClick(plan.title)}
                                >
                                    WhatsApp Now
                                </Button>
                            </CardFooter>
                        </Card>
                    </MotionDiv>
                ))}
            </div>
        </div>
    );
};

export default Services;

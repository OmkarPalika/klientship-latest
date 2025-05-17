import { CircleHelp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

// FAQ data array for better maintainability
const faqData = [
    {
        id: 'item-1',
        question: 'What is Shopify and why should I use it for my online store?',
        answer: 'Shopify is a leading e-commerce platform that allows you to easily create, manage, and grow your online store. It\'s user-friendly, scalable, and offers a wide range of customizable templates and features to meet your business needs.'
    },
    {
        id: 'item-2',
        question: 'How secure is Shopify for my business?',
        answer: 'Shopify provides enterprise-level security with SSL encryption, PCI DSS compliance, and fraud analysis tools. Your store and customer data are protected by industry-leading security measures.'
    },
    {
        id: 'item-3',
        question: 'What payment methods can I accept through Shopify?',
        answer: 'Shopify supports multiple payment methods including credit cards, PayPal, Apple Pay, Google Pay, and many local payment options. You can easily configure various payment gateways to suit your business needs.'
    },
    {
        id: 'item-4',
        question: 'Can I customize my online store design?',
        answer: 'Yes, Shopify offers extensive customization options. You can choose from numerous professional themes, modify layouts, colors, and fonts, or even create a completely custom design using Liquid, HTML, and CSS.'
    }
];

export default function FAQs() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full pb-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl w-full">
                <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-800 tracking-tight text-center">
                    Frequently Asked <span className="font-bold">Questions</span>
                </h2>
                <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
                    Find answers to common questions about our services, features, and how we can help you.
                </p>
            </div>
            <div className="w-full max-w-6xl">
                <Accordion type="single" collapsible className="w-full">
                    {faqData.map((faq) => (
                        <AccordionItem
                            key={faq.id}
                            value={faq.id}
                            className="border-b-2 border-gray-800 last:border-b-0"
                        >
                            <AccordionTrigger className="text-lg font-medium hover:text-gray-700 transition-colors">
                                <div className="flex items-center justify-between gap-4">
                                    <CircleHelp />
                                    {faq.question}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-lg text-gray-600">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
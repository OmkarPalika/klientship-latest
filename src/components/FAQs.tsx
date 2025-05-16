import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export default function FAQs() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full my-12">
            <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-800 tracking-tight">Frequently Asked <span className="font-bold">Questions</span></h1>
                <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto text-center">Find answers to common questions about our services, features, and how we can help you.</p>
            </div>
            <div className="w-full px-36 mt-8 text-4xl">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b-2 border-gray-800">
                        <AccordionTrigger className="text-lg">What is Shopify and why should I use it for my online store?</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            Shopify is a leading e-commerce platform that allows you to easily create, manage, and grow your online store. It&apos;s user-friendly, scalable, and offers a wide range of customizable templates and features to meet your business needs.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-b-2 border-gray-800">
                        <AccordionTrigger className="text-lg">What is Shopify and why should I use it for my online store?</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            Shopify is a leading e-commerce platform that allows you to easily create, manage, and grow your online store. It&apos;s user-friendly, scalable, and offers a wide range of customizable templates and features to meet your business needs.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-b-2 border-gray-800">
                        <AccordionTrigger className="text-lg">What is Shopify and why should I use it for my online store?</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            Shopify is a leading e-commerce platform that allows you to easily create, manage, and grow your online store. It&apos;s user-friendly, scalable, and offers a wide range of customizable templates and features to meet your business needs.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}
import { MoveDown } from "lucide-react";

export default function Process() {
    const steps = [
        {
            id: 1,
            title: "Theme Selection",
            description: "Explore Social Bubble's curated Shopify themes for any modern store—whether a minimal boutique or a feature-rich megastore, our designs provide the ideal eCommerce foundation.",
            icon: <MoveDown />
        },
        {
            id: 2, 
            title: "Custom Coding Advanced Features",
            description: "We develop advanced eCommerce features—like bundle builders, mega menus, and cross-sells—giving your store the tools for higher conversions and a customized brand experience.",
            icon: <MoveDown />
        },
        {
            id: 3,
            title: "Making CRO-Focused Store Layout",
            description: "We craft result-driven layouts grounded in Conversion Rate Optimization. We balance eye-catching design with a seamless shopping path—so every visitor is encouraged to take action.",
            icon: <MoveDown />
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full h-full py-12 px-4 md:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-800 tracking-tight text-center">
                Our Process Of Making <span className="font-bold">High<br />Quality Shopify Store</span>
            </h1>
            <p className="text-sm md:text-lg text-gray-600 max-w-4xl mx-auto text-center">
                From initial blueprint to final launch, here&apos;s how we craft each high-converting Shopify store.
            </p>
            <div className="max-w-6xl w-full px-4 pt-8">
                <div className="w-full">
                    {steps.map((step) => (
                        <div key={step.id} className="flex justify-between items-start gap-8">
                            <div className="w-15 h-12 rounded-full bg-green-100 text-center flex items-center justify-center transition-all duration-300 hover:bg-amber-200 border-2 border-black">
                                {step.icon}
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
                                <p className="text-gray-700 mb-12">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

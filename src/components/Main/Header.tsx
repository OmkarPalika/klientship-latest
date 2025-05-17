'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { preloadImage } from '@/hooks/useOptimizedImage';
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuIndicator,
    NavigationMenuViewport
} from "@/components/ui/navigation-menu";

export default function Header() {
    // Preload the logo image (local asset only)
    // useEffect(() => {
    //     preloadImage("/logo.webp");
    // }, []);

    return (
        <h1>
            <header className="flex justify-between items-center p-4 bg-black text-white sm:px-4 md:px-6 lg:px-12" role="banner">
                <Link href="/" aria-label="Home" className="p-2 min-w-[44px] min-h-[44px] inline-flex items-center justify-center">
                    <Image
                        src="/logo.webp"
                        width={24}
                        height={60}
                        quality={100}
                        style={{ width: '10%', height: 'auto' }}
                        sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
                        alt="Logo"
                        priority={true}
                        className="w-24 h-auto"
                    />
                </Link>
                <NavigationMenu aria-label="Main navigation">
                    <NavigationMenuList className="font-bold space-x-4">
                        <NavigationMenuItem className="p-2">
                            <NavigationMenuLink asChild>
                                <Link href="/" tabIndex={0} className="p-2 min-w-[44px] min-h-[44px] inline-flex items-center">What we do?</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="p-2">
                            <NavigationMenuLink asChild>
                                <Link href="/about" tabIndex={0} className="p-2 min-w-[44px] min-h-[44px] inline-flex items-center">Portfolio</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="p-2">
                            <NavigationMenuLink asChild>
                                <Link href="/contact" tabIndex={0} className="p-2 min-w-[44px] min-h-[44px] inline-flex items-center">Testinomials</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="p-2">
                            <NavigationMenuLink asChild>
                                <Link href="/contact" tabIndex={0} className="p-2 min-w-[44px] min-h-[44px] inline-flex items-center">Plans</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    <NavigationMenuIndicator />
                    <NavigationMenuViewport />
                </NavigationMenu>
                <Button className="text-black font-bold rounded p-4 min-w-[44px] min-h-[44px]" variant="outline">
                    <Link href="/contact" tabIndex={0} aria-label="Contact Us" className="p-2">Contact Us</Link>
                </Button>
            </header>
        </h1>
    );
}

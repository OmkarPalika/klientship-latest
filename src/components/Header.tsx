import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport
} from "@/components/ui/navigation-menu";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-4 bg-black text-white sm:px-4 md:px-6 lg:px-12">
            <Link href="/">
                <Image
                    src="https://klientship.online/social-bubble/assets/images/logo.png"
                    width={150}
                    height={150}
                    alt="Logo"
                    className="w-24 h-auto"
                />
            </Link>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/">What we do?</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/about">Portfolio</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/contact">Testinomials</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/contact">Plans</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuIndicator />
                <NavigationMenuViewport />
            </NavigationMenu>
            <Button className="text-black font-bold rounded" variant="outline">
                <Link href="/contact">Contact Us</Link>
            </Button>
        </header>
    );
}
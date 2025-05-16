import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col text-sm space-y-12 w-full border-t p-16 bg-black text-white transition-colors duration-300">
            <div className="flex gap-12 space-x-8 justify-between flex-wrap">
                <div className="flex gap-32 flex-wrap">
                    <div className="flex flex-col space-x-2 space-y-2 hover:scale-105 transition-transform duration-300">
                        <h3 className="font-bold text-sm mb-4 text-gray-200">Our Services</h3>
                        <ul className="text-sm flex flex-col space-x-4 space-y-2">
                            <li><Link href="/services/web-development" className="hover:text-gray-300 transition-colors hover:underline hover:translate-x-2 inline-block transform duration-300">Shopify Designing</Link></li>
                            <li><Link href="/services/mobile-development" className="hover:text-gray-300 transition-colors hover:underline hover:translate-x-2 inline-block transform duration-300">3D Animation</Link></li>
                            <li><Link href="/services/ui-design" className="hover:text-gray-300 transition-colors hover:underline hover:translate-x-2 inline-block transform duration-300">Automation Solutions</Link></li>
                            <li><Link href="/services/ui-design" className="hover:text-gray-300 transition-colors hover:underline hover:translate-x-2 inline-block transform duration-300">Business Websites</Link></li>
                            <li><Link href="/services/ui-design" className="hover:text-gray-300 transition-colors hover:underline hover:translate-x-2 inline-block transform duration-300">Shopify White Labelling</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-x-2 space-y-2 hover:scale-105 transition-transform duration-300">
                        <h3 className="font-bold text-sm mb-4 text-gray-200">Our Products</h3>
                        <ul className="flex flex-col space-x-4 space-y-2">
                            <li><Link href="/services/web-development" className="hover:text-gray-300 transition-colors hover:underline hover:translate-x-2 inline-block transform duration-300">Shopify Themes</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-x-2 space-y-2 hover:scale-105 transition-transform duration-300">
                        <h3 className="font-bold text-sm mb-4 text-gray-200">Portfolio</h3>
                        <ul className="flex flex-col space-x-4 space-y-2">
                            <li><Link href="/services/web-development" className="hover:text-gray-300 transition-colors hover:underline hover:translate-x-2 inline-block transform duration-300">Shopify Stores</Link></li>
                            <li><Link href="/services/mobile-development" className="hover:text-gray-300 transition-colors hover:underline hover:translate-x-2 inline-block transform duration-300">3D Product</Link></li>
                            <li><Link href="/services/ui-design" className="hover:text-gray-300 transition-colors hover:underline hover:translate-x-2 inline-block transform duration-300">Business Websites</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex space-y-2 gap-32 flex-wrap">
                    <div className="flex flex-col space-x-16 space-y-2 hover:scale-105 transition-transform duration-300">
                        <h3 className="font-bold text-sm mb-4 text-gray-200">Policies</h3>
                        <ul className="flex flex-col space-x-4 space-y-2">
                            <li><Link href="/services/web-development" className="hover:text-gray-300 transition-colors hover:underline hover:translate-x-2 inline-block transform duration-300">Privacy Policy</Link></li>
                            <li><Link href="/services/mobile-development" className="hover:text-gray-300 transition-colors hover:underline hover:translate-x-2 inline-block transform duration-300">Terms of Service</Link></li>
                            <li><Link href="/services/ui-design" className="hover:text-gray-300 transition-colors hover:underline hover:translate-x-2 inline-block transform duration-300">Refund Policy</Link></li>
                            <li><Link href="/services/ui-design" className="hover:text-gray-300 transition-colors hover:underline hover:translate-x-2 inline-block transform duration-300">About Us</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-x-2 space-y-2">
                        <Image
                            src={"https://klientship.online/social-bubble/assets/images/logo-white.png"}
                            width={150}
                            height={50}
                            alt="Logo"
                            className="hover:opacity-80 transition-all duration-300 w-56 h-23 hover:scale-105"
                        />
                        <p className="text-xs text-gray-300">Designing Exceptional Web Experiences that</p>
                        <p className="text-xs text-gray-300">Bring More Happiness to the Digital World.</p>
                    </div>
                </div>
            </div>
            <Separator className="opacity-50" />
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col md:flex-row items-center space-x-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <Input 
                            type="text" 
                            placeholder="mailbox@mail.com" 
                            className="h-10 w-70 bg-black text-white border-white px-4 rounded-md focus:border-gray-500 transition-all duration-300" 
                        />
                        <Button className="h-10 text-black px-4 rounded-md ml-2 hover:bg-gray-200 transition-all duration-300" variant={"outline"}>Subscribe</Button>
                    </div>
                    <p className="text-gray-400">No spam, notifications only about new products, updates and freebies. You can always unsubscribe.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <Link href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" target="_blank" className="hover:text-gray-300 transition-transform duration-300 hover:scale-110">
                        <Image
                            src={"https://klientship.online/social-bubble/assets/images/socials/facebook.png"}
                            width={30}
                            height={30}
                            alt="Facebook"
                            className="w-8 h-8"
                        />
                    </Link>
                    <Link href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" target="_blank" className="hover:text-gray-300 transition-transform duration-300 hover:scale-110">
                        <Image
                            src={"https://klientship.online/social-bubble/assets/images/socials/instagram.png"}
                            width={30}
                            height={30}
                            alt="Instagram"
                            className="w-8 h-8"
                        />
                    </Link>
                    <Link href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" target="_blank" className="hover:text-gray-300 transition-transform duration-300 hover:scale-110">
                        <Image
                            src={"https://klientship.online/social-bubble/assets/images/socials/linkedin.png"}
                            width={30}
                            height={30}
                            alt="LinkedIn"
                            className="w-8 h-8"
                        />
                    </Link>
                    <Link href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" target="_blank" className="hover:text-gray-300 transition-transform duration-300 hover:scale-110">
                        <Image
                            src={"https://klientship.online/social-bubble/assets/images/socials/twitter.png"}
                            width={30}
                            height={30}
                            alt="Twitter"
                            className="w-8 h-8"
                        />
                    </Link>
                </div>
            </div>
            <Separator className="opacity-50" />
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 hover:text-white transition-colors duration-300">© Copyright {currentYear} Klientship Technologies</p>
                <p className="text-gray-400 hover:text-white transition-colors duration-300">CIN: U72900KA2022PTC162006</p>
            </div>
        </footer>
    );
}

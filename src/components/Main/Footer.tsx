import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col text-sm space-y-12 w-full border-t p-16 bg-gradient-to-b from-black to-gray-900 text-white transition-all duration-500">
            <div className="flex gap-12 space-x-8 justify-between flex-wrap">
                <div className="flex gap-32 flex-wrap">
                    <div className="flex flex-col space-x-2 space-y-2 hover:scale-105 transition-transform duration-300 group">
                        <h1 className="font-bold text-sm mb-4 text-gray-200 group-hover:text-white">Our Services</h1>
                        <ul className="text-sm flex flex-col space-x-4 space-y-4">
                            <li><Link href="/services/web-development" className="hover:text-white transition-all hover:underline hover:translate-x-2 inline-block transform duration-300 py-2 px-3">Shopify Designing</Link></li>
                            <li><Link href="/services/mobile-development" className="hover:text-white transition-all hover:underline hover:translate-x-2 inline-block transform duration-300 py-2 px-3">3D Animation</Link></li>
                            <li><Link href="/services/ui-design" className="hover:text-white transition-all hover:underline hover:translate-x-2 inline-block transform duration-300 py-2 px-3">Automation Solutions</Link></li>
                            <li><Link href="/services/ui-design" className="hover:text-white transition-all hover:underline hover:translate-x-2 inline-block transform duration-300 py-2 px-3">Business Websites</Link></li>
                            <li><Link href="/services/ui-design" className="hover:text-white transition-all hover:underline hover:translate-x-2 inline-block transform duration-300 py-2 px-3">Shopify White Labelling</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-x-2 space-y-2 hover:scale-105 transition-transform duration-300 group">
                        <h2 className="font-bold text-sm mb-4 text-gray-200 group-hover:text-white">Our Products</h2>
                        <ul className="flex flex-col space-x-4 space-y-4">
                            <li><Link href="/services/web-development" className="hover:text-white transition-all hover:underline hover:translate-x-2 inline-block transform duration-300 py-2 px-3">Shopify Themes</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-x-2 space-y-2 hover:scale-105 transition-transform duration-300 group">
                        <h3 className="font-bold text-sm mb-4 text-gray-200 group-hover:text-white">Portfolio</h3>
                        <ul className="flex flex-col space-x-4 space-y-4">
                            <li><Link href="/services/web-development" className="hover:text-white transition-all hover:underline hover:translate-x-2 inline-block transform duration-300 py-2 px-3">Shopify Stores</Link></li>
                            <li><Link href="/services/mobile-development" className="hover:text-white transition-all hover:underline hover:translate-x-2 inline-block transform duration-300 py-2 px-3">3D Product</Link></li>
                            <li><Link href="/services/ui-design" className="hover:text-white transition-all hover:underline hover:translate-x-2 inline-block transform duration-300 py-2 px-3">Business Websites</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex space-y-2 gap-32 flex-wrap">
                    <div className="flex flex-col space-x-16 space-y-2 hover:scale-105 transition-transform duration-300 group">
                        <h4 className="font-bold text-sm mb-4 text-gray-200 group-hover:text-white">Policies</h4>
                        <ul className="flex flex-col space-x-4 space-y-4">
                            <li><Link href="/services/web-development" className="hover:text-white transition-all hover:underline hover:translate-x-2 inline-block transform duration-300 py-2 px-3">Privacy Policy</Link></li>
                            <li><Link href="/services/mobile-development" className="hover:text-white transition-all hover:underline hover:translate-x-2 inline-block transform duration-300 py-2 px-3">Terms of Service</Link></li>
                            <li><Link href="/services/ui-design" className="hover:text-white transition-all hover:underline hover:translate-x-2 inline-block transform duration-300 py-2 px-3">Refund Policy</Link></li>
                            <li><Link href="/services/ui-design" className="hover:text-white transition-all hover:underline hover:translate-x-2 inline-block transform duration-300 py-2 px-3">About Us</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-x-2 space-y-4">
                        <Image
                            src={"/logo-white.webp"}
                            width={150}
                            height={50}
                            alt="Logo"
                            loading="lazy"
                            quality={100}
                            className="hover:opacity-90 transition-all duration-500 w-56 h-23 hover:scale-105 filter hover:brightness-110"
                        />
                        <p className="text-xs text-gray-300 hover:text-white transition-colors duration-300 py-1">Designing Exceptional Web Experiences that<br />Bring More Happiness to the Digital World.</p>

                    </div>
                </div>
            </div>
            <Separator className="opacity-50 hover:opacity-75 transition-opacity duration-300" />
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col md:flex-row items-center space-x-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            required
                            autoComplete="email"
                            placeholder="mailbox@mail.com"
                            className="h-12 w-70 bg-transparent backdrop-blur-sm text-white border-white/50 px-4 rounded-md focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300"
                            aria-label="Email subscription"
                        />
                        <Button className="h-12 text-black px-6 rounded-md ml-2 bg-white hover:bg-gray-200 transition-all duration-300 font-semibold min-w-[120px]" variant={"outline"}>Subscribe</Button>
                    </div>
                    <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300 py-2">No spam, notifications only about new products, updates and freebies. You can always unsubscribe.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <Link href="#" aria-label="Facebook" target="_blank" className="bg-white/90 hover:bg-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20 p-3">
                        <Facebook className="w-6 h-6 text-black transition-colors duration-300" />
                    </Link>
                    <Link href="#" aria-label="Instagram" target="_blank" className="bg-white/90 hover:bg-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20 p-3">
                        <Instagram className="w-6 h-6 text-black" />
                    </Link>
                    <Link href="#" aria-label="LinkedIn" target="_blank" className="bg-white/90 hover:bg-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20 p-3">
                        <Linkedin className="w-6 h-6 text-black" />
                    </Link>
                    <Link href="#" aria-label="Twitter" target="_blank" className="bg-white/90 hover:bg-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20 p-3">
                        <Twitter className="w-6 h-6 text-black" />
                    </Link>
                </div>
            </div>
            <Separator className="opacity-50 hover:opacity-75 transition-opacity duration-300" />
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 hover:text-white transition-colors duration-300 cursor-default py-2">© Copyright {currentYear} Klientship Technologies</p>
                <p className="text-gray-400 hover:text-white transition-colors duration-300 cursor-default py-2">CIN: U72900KA2022PTC162006</p>
            </div>
        </footer>
    );
}

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col text-sm space-y-12 w-full border-t p-16 bg-black text-white">
            <div className="flex gap-12 space-x-8 justify-between flex-wrap">
                <div className="flex gap-12 space-x-16 flex-wrap">
                    <div className="flex flex-col space-x-2 space-y-2">
                        <h3 className="font-bold text-sm mb-4">Our Services</h3>
                        <ul className="text-sm flex flex-col space-x-4 space-y-2">
                            <li><Link href="/services/web-development" className="hover:text-gray-300 transition-colors">Shopify Designing</Link></li>
                            <li><Link href="/services/mobile-development" className="hover:text-gray-300 transition-colors">3D Animation</Link></li>
                            <li><Link href="/services/ui-design" className="hover:text-gray-300 transition-colors">Automation Solutions</Link></li>
                            <li><Link href="/services/ui-design" className="hover:text-gray-300 transition-colors">Business Websites</Link></li>
                            <li><Link href="/services/ui-design" className="hover:text-gray-300 transition-colors">Shopify White Labelling</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-x-2 space-y-2">
                        <h3 className="font-bold text-sm mb-4">Our Products</h3>
                        <ul className="flex flex-col space-x-4 space-y-2">
                            <li><Link href="/services/web-development" className="hover:text-gray-300 transition-colors">Shopify Themes</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-x-2 space-y-2">
                        <h3 className="font-bold text-sm mb-4">Portfolio</h3>
                        <ul className="flex flex-col space-x-4 space-y-2">
                            <li><Link href="/services/web-development" className="hover:text-gray-300 transition-colors">Shopify Stores</Link></li>
                            <li><Link href="/services/mobile-development" className="hover:text-gray-300 transition-colors">3D Product</Link></li>
                            <li><Link href="/services/ui-design" className="hover:text-gray-300 transition-colors">Business Websites</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex space-x-2 space-y-2 mr-36 gap-12">
                    <div className="flex flex-col space-x-16 space-y-2">
                        <h3 className="font-bold text-sm mb-4">Policies</h3>
                        <ul className="flex flex-col space-x-4 space-y-2">
                            <li><Link href="/services/web-development" className="hover:text-gray-300 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/services/mobile-development" className="hover:text-gray-300 transition-colors">Terms of Service</Link></li>
                            <li><Link href="/services/ui-design" className="hover:text-gray-300 transition-colors">Refund Policy</Link></li>
                            <li><Link href="/services/ui-design" className="hover:text-gray-300 transition-colors">About Us</Link></li>
                        </ul>
                    </div>
                    <Image
                        src={"https://klientship.online/social-bubble/assets/images/logo-white.png"}
                        width={150}
                        height={50}
                        alt="Logo"
                        className="hover:opacity-80 transition-opacity w-auto h-30"
                    />
                </div>
            </div>
            <div className="w-full h-0.5 bg-white"></div>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col md:flex-row items-center space-x-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <Input type="text" placeholder="mailbox@mail.com" className="h-10 w-70 bg-gray-800 text-white px-4 rounded-md" />
                        <Button className="h-10 text-black px-4 rounded-md ml-2" variant={"outline"}>Subscribe</Button>
                    </div>
                    <p>No spam, notifications only about new products, updates and freebies. You can always unsubscribe.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center">
                    <Link href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" target="_blank" className="hover:text-gray-300 transition-colors">
                        <Image
                            src={"https://klientship.online/social-bubble/assets/images/socials/facebook.png"}
                            width={30}
                            height={30}
                            alt="Facebook"
                            className="w-8 h-8 mr-4"
                        />
                    </Link >
                    <Link href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" target="_blank" className="hover:text-gray-300 transition-colors">
                        <Image
                            src={"https://klientship.online/social-bubble/assets/images/socials/instagram.png"}
                            width={30}
                            height={30}
                            alt="Instagram"
                            className="w-8 h-8 mr-4"
                        />
                    </Link>
                    <Link href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" target="_blank" className="hover:text-gray-300 transition-colors">
                        <Image
                            src={"https://klientship.online/social-bubble/assets/images/socials/linkedin.png"}
                            width={30}
                            height={30}
                            alt="LinkedIn"
                            className="w-8 h-8 mr-4"
                        />
                    </Link>
                    <Link href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" target="_blank" className="hover:text-gray-300 transition-colors">
                        <Image
                            src={"https://klientship.online/social-bubble/assets/images/socials/twitter.png"}
                            width={30}
                            height={30}
                            alt="Twitter"
                            className="w-8 h-8 mr-4"
                        />
                    </Link>
                </div>
            </div>
            <div className="w-full h-0.5 bg-white"></div>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-white">© Copyright {currentYear} Klientship Technologies</p>
                <p className="text-white">CIN: U72900KA2022PTC162006</p>
            </div>
        </footer>
    );
}

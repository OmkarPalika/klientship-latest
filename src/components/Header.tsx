import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

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
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="hover:text-gray-400">What we do?</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-gray-400">Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-gray-400">Testinomials</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-gray-400">Plans</Link>
                    </li>
                </ul>
            </nav>
            <Button className="text-black font-bold rounded" variant="outline">
                <Link href="/contact">Contact Us</Link>
            </Button>
        </header>
    );
}
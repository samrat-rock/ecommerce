import Image from "next/image";
import Link from "next/link";
import { poppins } from "../app/layout"; // Ensure correct import

const Footer = () => {
  return (
    <div className={`py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24  font-bold`}>
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl font-bold tracking-wide">LAMA</div>
          </Link>
          <p className="font-bold">
            3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United States
          </p>
          <span className="font-bold">hello@lama.dev</span>
          <span className="font-bold">+1 234 567 890</span>
          <div className="flex gap-6">
            <Link href="https://facebook.com">
              <Image src="/facebook.png" alt="Facebook" width={16} height={16} />
            </Link>
            <Link href="https://instagram.com">
              <Image src="/instagram.png" alt="Instagram" width={16} height={16} />
            </Link>
            <Link href="https://youtube.com">
              <Image src="/youtube.png" alt="YouTube" width={16} height={16} />
            </Link>
            <Link href="https://pinterest.com">
              <Image src="/pinterest.png" alt="Pinterest" width={16} height={16} />
            </Link>
            <Link href="https://twitter.com">
              <Image src="/x.png" alt="X" width={16} height={16} />
            </Link>
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-bold text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6 font-bold">
              <Link href="/about">About Us</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/affiliates">Affiliates</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-bold text-lg">SHOP</h1>
            <div className="flex flex-col gap-6 font-bold">
              <Link href="/new-arrivals">New Arrivals</Link>
              <Link href="/accessories">Accessories</Link>
              <Link href="/men">Men</Link>
              <Link href="/women">Women</Link>
              <Link href="/products">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-bold text-lg">HELP</h1>
            <div className="flex flex-col gap-6 font-bold">
              <Link href="/customer-service">Customer Service</Link>
              <Link href="/account">My Account</Link>
              <Link href="/store-locator">Find a Store</Link>
              <Link href="/legal">Legal & Privacy</Link>
              <Link href="/gift-cards">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-bold text-lg">SUBSCRIBE</h1>
          <p className="font-bold">
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4 font-bold"
            />
            <button className="w-1/4 bg-lama text-white ">JOIN</button>
          </div>
          <span className="text-2xl">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="Discover" width={40} height={20} />
            <Image src="/skrill.png" alt="Skrill" width={40} height={20} />
            <Image src="/paypal.png" alt="PayPal" width={40} height={20} />
            <Image src="/mastercard.png" alt="Mastercard" width={40} height={20} />
            <Image src="/visa.png" alt="Visa" width={40} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

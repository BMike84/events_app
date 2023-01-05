import Link from "next/link";
import Image from "next/image";

export const Header = () => (
  <header>
    <div className="topNav">
      <Image src={"/images/bd_logo.png"} width={120} height={30} alt="logo" />
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
        </ul>
      </nav>
    </div>
    <h1>Ut enim ad minima veniam</h1>
  </header>
);

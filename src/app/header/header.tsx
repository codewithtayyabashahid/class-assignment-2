import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-red-800 text-white font-serif">
      <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-200">
            Tayyaba Shahid
          </Link>
        </div>


        <ul className="flex space-x-6">
          <li>
            <Link href="/about" className="hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-200">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

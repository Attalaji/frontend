import Link from 'next/link';
import Image from 'next/image';
import Logo from '../Asset/Assetnavbar/LogoMySteak.svg';
import { useRouter } from 'next/navigation';
import { IoIosMenu } from "react-icons/io";
import { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black bg-opacity-70 py-2 shadow-md z-10 mb-10">
      <nav className="mx-auto flex items-center justify-between lg:gap-0 md:justify-around px-4">
        {/* Logo */}
        <div className="w-16 h-16 relative">
          <Image src={Logo} alt="My Steak Logo" fill className="object-contain" />
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6 lg:space-x-10">
          <Link href="/#beranda" className="text-white text-sm lg:text-base hover:text-gray-300">Beranda</Link>
          <Link href="/#tentang-kami" className="text-white text-sm lg:text-base hover:text-gray-300">Tentang Kami</Link>
          <Link href="/#menu" className="text-white text-sm lg:text-base hover:text-gray-300">Menu</Link>
          <Link href="/#events" className="text-white text-sm lg:text-base hover:text-gray-300">Events</Link>
          <Link href="/#gallery" className="text-white text-sm lg:text-base hover:text-gray-300">Gallery</Link>
          <Link href="/#reservasi" className="text-white text-sm lg:text-base hover:text-gray-300">Reservasi</Link>
          <Link href="/#kontak" className="text-white text-sm lg:text-base hover:text-gray-300">Kontak</Link>
        </div>

        <div className='flex items-center gap-4'>
          {/* Menu Icon (Mobile Only) */}
          <div className="md:hidden text-white text-3xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <IoIosMenu />
          </div>

          {/* Login Button (Selalu Tampil) */}
          <button
            onClick={() => router.push('/Login')}
            className="bg-transparent text-white border-2 border-[#F2AA36] px-6 py-1.5 rounded-full hover:bg-[#F2AA36] hover:text-black transition"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-6 py-4 space-y-4 text-white flex flex-col items-start">
          <Link href="/#beranda" onClick={() => setIsMenuOpen(false)}>Beranda</Link>
          <Link href="/#tentang-kami" onClick={() => setIsMenuOpen(false)}>Tentang Kami</Link>
          <Link href="/#menu" onClick={() => setIsMenuOpen(false)}>Menu</Link>
          <Link href="/#events" onClick={() => setIsMenuOpen(false)}>Events</Link>
          <Link href="/#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
          <Link href="/#reservasi" onClick={() => setIsMenuOpen(false)}>Reservasi</Link>
          <Link href="/#kontak" onClick={() => setIsMenuOpen(false)}>Kontak</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

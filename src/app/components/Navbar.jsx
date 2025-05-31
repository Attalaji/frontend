import Link from 'next/link';
import Image from 'next/image';
import Logo from '../Asset/Assetnavbar/LogoMySteak.svg';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter()

  return (
    <header className="w-full bg-black bg-opacity-70 py-2 shadow-md z-10 mb-10 ">
      <nav className="container mx-auto flex items-center justify-evenly ">
        {/* Logo */}
        <div className="w-16 h-16 relative ">
          <Image src={Logo} alt="My Steak Logo" fill className="object-contain" />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-10 active">
          <Link href="/#beranda" className="text-white text-base hover:text-gray-300">Beranda</Link>
          <Link href="/#tentang-kami" className="text-white text-base hover:text-gray-300">Tentang Kami</Link>
          <Link href="/#menu" className="text-white text-base hover:text-gray-300">Menu</Link>
          <Link href="/#events" className="text-white text-base hover:text-gray-300">Events</Link>
          <Link href="/#gallery" className="text-white text-base hover:text-gray-300">Gallery</Link>
          <Link href="/#reservasi" className="text-white text-base hover:text-gray-300">Reservasi</Link>
          <Link href="/#kontak" className="text-white text-base hover:text-gray-300">Kontak</Link>
        </div>

        {/* Login Button */}
        <button onClick={() => router.push('/Login')} className="bg-transparent text-white border-2 border-[#F2AA36] px-8 py-1.5 rounded-full hover:bg-[#F2AA36] hover:text-black transition">
          Login
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
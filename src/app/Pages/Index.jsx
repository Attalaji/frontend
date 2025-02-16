import Image from 'next/image';
import Navbar from '../components/Navbar';

import { Play, Section } from 'lucide-react';
import { Check } from "lucide-react";

import Bg_Tentangkami from '../Asset/Assethome/Tentangkami.jpg';
import Background from '../Asset/Assethome/Background.jpg';
import Res from '../Asset/Assethome/Fotores.png';

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Navbar */}
        <div className="relative z-10">
          <Navbar />
        </div>

        {/* Background */}
        <div className="absolute inset-0 w-full h-screen z-0">
          <Image
            src={Background}
            alt="Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Main */}
        <div className="relative z-10 px-90 pt-80 flex items-center justify-start gap-8 ml-80">
          <div className="mr-80">
            <h1 className="text-white text-7xl font-bold mb-4">MySteak</h1>
            <p className="text-white text-xl mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias.<br />Lorem, ipsum dolor.</p>
            <div className="flex gap-4">
              <button className="px-8 py-2 rounded-full border border-orange-400 text-white">Menu</button>
              <button className="px-8 py-2 rounded-full border border-orange-400 text-white">Reservasi</button>
            </div>
          </div>
          <div className="w-20 h-20 rounded-full bg-orange-400 flex items-center justify-center">
            <Play className="w-10 h-10 text-black" />
          </div>
        </div>
      </div>

      <div className="relative min-h-screen">
        {/* Tentang Kami */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={Bg_Tentangkami}
            alt="Tentang Kami Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#C59E5F] mb-8">TENTANG KAMI</h2>
            <p className="text-black-500 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, aspernatur. Dolores, a iste. Veritatis, inventore!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative w-[421px] h-[327px] rounded-lg overflow-hidden z-10">
                <Image src={Res} alt="Restaurant Interior" fill className="object-cover" />
              </div>
              <div className="bg-[#F2AA36] p-8 rounded-lg z-10">
                <p className="text-white-700 mb-6">Kami adalah restoran steak premium yang menghadirkan pengalaman kuliner terbaik dengan bahan-bahan berkualitas tinggi dan teknik memasak yang sempurna.</p>
                <div className="space-y-4">
                  <div className="flex items-center"><Check className="text-[#836A41] w-6 h-6 mr-2" /><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam saepe perferendis et!</span></div>
                  <div className="flex items-center"><Check className="text-[#836A41] w-6 h-6 mr-2" /><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum a illum cum nemo duci?</span></div>
                  <div className="flex items-center"><Check className="text-[#836A41] w-6 h-6 mr-2" /><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, veniam aperiam!</span></div>
                </div>
                <p className="mt-6 text-white-700">Nikmati pengalaman bersantap yang tak terlupakan dengan layanan terbaik kami.</p>
              </div>
            </div>
          </div>
          {/* Section */}
        <div>
         <h2 className="text-4xl font-bold text-[#C59E5F] mb-8">JUDULJUDUL</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-[#836A41] p-6">
         <p className="text-white-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error amet iusto, incidunt praesentium atque possimus voluptate?
        </p>
        </div>

         <div className="bg-[#836A41] p-6">
         <p className="text-white-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum provident enim rerum, hic eos consequatur pariatur.
         </p>
         </div>

         <div className="bg-[#836A41] p-6">
          <p className="text-white-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit corporis aspernatur dicta veritatis quam consequuntur non.
        </p>
        </div>
       </div>
      </div>
    </div>
  </div>
  
    </>
  );
}
import Image from 'next/image';
import Navbar from '../components/Navbar';

import { Play, Section } from 'lucide-react';
import { Check } from "lucide-react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Event from '../Asset/Assethome/Event.png';
import Bg_Tentangkami from '../Asset/Assethome/Tentangkami.jpg';
import Background from '../Asset/Assethome/Background.jpg';
import Res from '../Asset/Assethome/Fotores.png';
import Makanan from '../Asset/Assethome/Makanan.png';
import glr1 from '../Asset/Assethome/Gallery1.png';
import glr2 from '../Asset/Assethome/Gallery2.png';
import glr3 from '../Asset/Assethome/Gallery3.png';

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
        <div className="relative z-10 px-20 pt-32 flex items-center justify-start gap-8 ml-20">
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




  {/* Menu Section */}

  <div className="relative min-h-screen bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#C59E5F] mb-8">MENU</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {/* Left Column */}
            <div className="space-y-4">
              {/* Menu Item 1 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                      src={Makanan}  
                      alt="Menu 1"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#C59E5F] text-lg font-medium">Menu1</h3>
                    <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <span className="text-[#C59E5F] font-medium">50k</span>
              </div>

              {/* Menu Item 2 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                      src={Makanan}  
                      alt="Menu 1"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#C59E5F] text-lg font-medium">Menu2</h3>
                    <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <span className="text-[#C59E5F] font-medium">50k</span>
              </div>

              {/* Menu Item 3 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                      src={Makanan}  
                      alt="Menu 1"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#C59E5F] text-lg font-medium">Menu3</h3>
                    <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <span className="text-[#C59E5F] font-medium">50k</span>
              </div>

              {/* Menu Item 4 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                      src={Makanan}  
                      alt="Menu 1"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#C59E5F] text-lg font-medium">Menu4</h3>
                    <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <span className="text-[#C59E5F] font-medium">50k</span>
              </div>

              {/* Menu Item 5 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                      src={Makanan}  
                      alt="Menu 1"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#C59E5F] text-lg font-medium">Menu5</h3>
                    <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <span className="text-[#C59E5F] font-medium">50k</span>
              </div>

              {/* Menu Item 6 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                      src={Makanan}  
                      alt="Menu 1"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#C59E5F] text-lg font-medium">Menu6</h3>
                    <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <span className="text-[#C59E5F] font-medium">50k</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {/* Menu Item 7 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                      src={Makanan}  
                      alt="Menu 1"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#C59E5F] text-lg font-medium">Menu7</h3>
                    <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <span className="text-[#C59E5F] font-medium">50k</span>
              </div>

              {/* Menu Item 8 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                      src={Makanan}  
                      alt="Menu 1"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#C59E5F] text-lg font-medium">Menu8</h3>
                    <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <span className="text-[#C59E5F] font-medium">50k</span>
              </div>

              {/* Menu Item 9 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                      src={Makanan}  
                      alt="Menu 1"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#C59E5F] text-lg font-medium">Menu9</h3>
                    <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <span className="text-[#C59E5F] font-medium">50k</span>
              </div>

              {/* Menu Item 10 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                      src={Makanan}  
                      alt="Menu 1"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#C59E5F] text-lg font-medium">Menu10</h3>
                    <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <span className="text-[#C59E5F] font-medium">50k</span>
              </div>

              {/* Menu Item 11 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                      src={Makanan}  
                      alt="Menu 1"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#C59E5F] text-lg font-medium">Menu11</h3>
                    <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <span className="text-[#C59E5F] font-medium">50k</span>
              </div>

              {/* Menu Item 12 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                      src={Makanan}  
                      alt="Menu 1"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#C59E5F] text-lg font-medium">Menu12</h3>
                    <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur</p>
                  </div>
                </div>
                <span className="text-[#C59E5F] font-medium">50k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      


      {/* Events Section */}
     <div className="relative bg-black py-20">
        {/* Background with overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={Background}
            alt="Background"
            fill
            className="object-cover brightness-[0.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h2 className="text-4xl font-bold text-[#C59E5F] mb-12">EVENTS</h2>

          {/* Event 1 */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
            <div className="md:w-[45%]">
              <h3 className="text-[#C59E5F] text-2xl font-medium mb-4">Events1</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                laoreet Lorem sodales, amet, vehicula Praesent 
                eget.Nunc odio Lorem eu id Sed nisi fringilla Cras 
                tincidunt vehicula, cursus non, nec risus non vitae 
                ex vel emi eu id Sed nisi fringilla Cras tincidunt 
                vehicula, cursus non, nec risus non vitae ex vel
              </p>
            </div>
            <div className="md:w-[45%]">
              <div className="w-full h-64 rounded-lg overflow-hidden">
              <Image
                  src={Event}
                  alt="Event 1"
                  width={512}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="flex flex-col md:flex-row-reverse justify-between items-start gap-8 mb-16">
            <div className="md:w-[45%]">
              <h3 className="text-[#C59E5F] text-2xl font-medium mb-4">Events1</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                laoreet Lorem sodales, amet, vehicula Praesent 
                eget.Nunc odio Lorem eu id Sed nisi fringilla Cras 
                tincidunt vehicula, cursus non, nec risus non vitae 
                ex vel emi eu id Sed nisi fringilla Cras tincidunt 
                vehicula, cursus non, nec risus non vitae ex vel
              </p>
            </div>
            <div className="md:w-[45%]">
              <div className="w-full h-64 rounded-lg overflow-hidden">
              <Image
                  src={Event}  
                  alt="Event 2"
                  width={512}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="md:w-[45%]">
              <h3 className="text-[#C59E5F] text-2xl font-medium mb-4">Events1</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                laoreet Lorem sodales, amet, vehicula Praesent 
                eget.Nunc odio Lorem eu id Sed nisi fringilla Cras 
                tincidunt vehicula, cursus non, nec risus non vitae 
                ex vel emi eu id Sed nisi fringilla Cras tincidunt 
                vehicula, cursus non, nec risus non vitae ex vel
              </p>
            </div>
            <div className="md:w-[45%]">
              <div className="w-full h-64 rounded-lg overflow-hidden">
              <Image
                  src={Event}
                  alt="Event 3"
                  width={512}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

  
    {/* Testimonials Section */}
    <div className="relative min-h-[50vh] bg-black py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#C59E5F] mb-8">TESTIMONIALS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial Card 1 */}
            <div className="bg-[#836A41] p-6 rounded-lg relative">
              <div className="absolute top-4 left-4 text-5xl text-[#C59E5F] opacity-50">"</div>
              <p className="text-white text-sm leading-relaxed relative z-10 mb-4 px-4">
                Nam Donec non, laoreet ut at, turpis fringilla efficitur, adipiscing eget amet, ex tincidunt risus lacus, urna amet, lacus clidunt risus, urn
              </p>
              <div className="flex items-center justify-end pr-4">
                <p className="text-white text-sm">- name</p>
              </div>
              <div className="absolute bottom-4 right-4 text-5xl text-[#C59E5F] opacity-50 rotate-180">"</div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-[#836A41] p-6 rounded-lg relative">
              <div className="absolute top-4 left-4 text-5xl text-[#C59E5F] opacity-50">"</div>
              <p className="text-white text-sm leading-relaxed relative z-10 mb-4 px-4">
                Nam Donec non, laoreet ut at, turpis fringilla efficitur, adipiscing eget amet, ex tincidunt risus lacus, urna amet, lacus clidunt risus, urn
              </p>
              <div className="flex items-center justify-end pr-4">
                <p className="text-white text-sm">- name</p>
              </div>
              <div className="absolute bottom-4 right-4 text-5xl text-[#C59E5F] opacity-50 rotate-180">"</div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-[#836A41] p-6 rounded-lg relative">
              <div className="absolute top-4 left-4 text-5xl text-[#C59E5F] opacity-50">"</div>
              <p className="text-white text-sm leading-relaxed relative z-10 mb-4 px-4">
                Nam Donec non, laoreet ut at, turpis fringilla efficitur, adipiscing eget amet, ex tincidunt risus lacus, urna amet, lacus clidunt risus, urn
              </p>
              <div className="flex items-center justify-end pr-4">
                <p className="text-white text-sm">- name</p>
              </div>
              <div className="absolute bottom-4 right-4 text-5xl text-[#C59E5F] opacity-50 rotate-180">"</div>
            </div>
          </div>
        </div>
      </div>




                                                                {/* Gallery Section */}

        <div className="relative bg-black py-20">
        {/* Background with overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={glr1}
            alt="Background"
            fill
            className="object-cover brightness-[0.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-[#C59E5F] mb-8">GALLERY</h2>
          
          {/* Gallery Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Images Container with Navigation */}
            <div className="flex items-center">
              {/* Left Arrow */}
              <div className="text-[#C59E5F]">
                <ChevronLeft size={24} />
              </div>
              
              {/* Images Grid */}
              <div className="flex-1 grid grid-cols-3 gap-4 px-2">
                {/* Gallery Image 1 */}
                <div className="aspect-[4/3] rounded overflow-hidden">
                <Image
                    src={glr1}
                    alt="Gallery 1"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Gallery Image 2 */}
                <div className="aspect-[4/3] rounded overflow-hidden">
                <Image
                    src={glr2}
                    alt="Gallery 2"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Gallery Image 3 */}
                <div className="aspect-[4/3] rounded overflow-hidden">
                <Image
                    src={glr3}
                    alt="Gallery 3"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Right Arrow */}
              <div className="text-[#C59E5F]">
                <ChevronRight size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
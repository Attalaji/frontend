import Image from "next/image";
import Navbar from "../components/Navbar";

import { Play, Section } from "lucide-react";
import { Check } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Instagram, MessageCircle, Youtube } from "lucide-react";

import Event from "../Asset/Assethome/Event.png";
import Bg_Tentangkami from "../Asset/Assethome/Tentangkami.jpg";
import Background from "../Asset/Assethome/Background.jpg";
import Res from "../Asset/Assethome/fotores.jpg";
import Makanan from "../Asset/Assethome/Makanan.png";
import glr1 from "../Asset/Assethome/Gallery1.png";
import glr2 from "../Asset/Assethome/Gallery2.png";
import glr3 from "../Asset/Assethome/Gallery3.png";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Home() {
  return (
    <>
      <div className="fixed z-10 w-full">
        {/* Navbar */}
        <Navbar />
      </div>

      <div className="min-h-screen flex items-center justify-center text-white">
        {/* Background */}
        <div className="absolute inset-0 w-full h-screen z-0">
          <Image
            src={Background}
            alt="Background"
            fill
            className="object-cover brightness-[0.45]"
            priority
          />
        </div>

        {/* Main */}
        <div className="relative flex items-center gap-96">
          <div>
            <h1 className="text-7xl font-bold mb-4">MySteak</h1>
            <p className="text-xl mb-8 max-w-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias.
              Lorem, ipsum dolor.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-1.5 rounded-full border-2 border-[#F2AA36] hover:bg-[#F2AA36] hover:text-black transition">
                Menu
              </button>
              <button className="px-8 py-1.5 rounded-full border-2 border-[#F2AA36] hover:bg-[#F2AA36] hover:text-black transition">
                Reservasi
              </button>
            </div>
          </div>
          <div className="w-20 h-20 rounded-full bg-[#F2AA36] flex items-center justify-center cursor-pointer hover:bg-[#c0872c] transition">
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
            className="object-cover brightness-[0.20]"
            priority
          />
        </div>
        <div className="container w-[90%] mx-auto py-24 relative">
          <div className="">
            <h2 className="text-4xl font-bold text-[#C59E5F] mb-3">
              TENTANG KAMI
            </h2>
            <p className="text-white mb-12 text-wrap max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              aspernatur. Dolores, a iste. Veritatis, inventore! Lorem ipsum dolor 
              sit amet consectetur adipisicing elit. Natus nostrum dolorem 
              quisquam sint! Corrupti, in quisquam possimus et harum magnam ad quas.
            </p>
            <div className="flex gap-40 mb-16">
              <div className="w-2/3 h-auto border-[#6B6B6B] border-4">
                <Image
                  src={Res}
                  alt="Restaurant Interior"
                  className="object-fill"
                />
              </div>
              <div className="bg-[#B5812F] p-8 text-[#FBDAA5]">
                <p className="w mb-6">
                  Kami adalah restoran steak premium yang menghadirkan
                  pengalaman kuliner terbaik dengan bahan-bahan berkualitas
                  tinggi dan teknik memasak yang sempurna.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <IoMdCheckmarkCircleOutline size={28} className="text-[#5D431A]" />
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam saepe perferendis et!
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <IoMdCheckmarkCircleOutline size={28} className="text-[#5D431A]" />
                    <span>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Earum a illum cum nemo duci?
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <IoMdCheckmarkCircleOutline size={28} className="text-[#5D431A]" />
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repellat, veniam aperiam!
                    </span>
                  </div>
                </div>
                <p className="mt-6">
                  Nikmati pengalaman bersantap yang tak terlupakan dengan
                  layanan terbaik kami.
                </p>
              </div>
            </div>
          </div>
          {/* Section */}
          <div>
            <h2 className="text-4xl font-bold text-[#C59E5F] mb-8">
              JUDULJUDUL
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="bg-[#836a41ce] p-8">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error amet iusto, incidunt praesentium atque possimus
                  voluptate? Lorem ipsum dolor sit, amet consectetur adipisicing 
                  elit. Eos recusandae molestias in.
                </p>
              </div>

              <div className="bg-[#836a41ce] p-8">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  provident enim rerum, hic eos consequatur pariatur. Lorem ipsum 
                  dolor sit amet, consectetur adipisicing elit. In deserunt eum velit!
                </p>
              </div>

              <div className="bg-[#836a41ce] p-8">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit corporis aspernatur dicta veritatis quam consequuntur
                  non. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Magni suscipit sequi voluptatum?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}

      <div className="container mx-auto max-w-screen-lg px-4">
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
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Menu1
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
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
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Menu2
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
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
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Menu3
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
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
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Menu4
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
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
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Menu5
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
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
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Menu6
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
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
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Menu7
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
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
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Menu8
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
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
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Menu9
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
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
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Menu10
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
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
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Menu11
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
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
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Menu12
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
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
              <h3 className="text-[#C59E5F] text-2xl font-medium mb-4">
                Events1
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                laoreet Lorem sodales, amet, vehicula Praesent eget.Nunc odio
                Lorem eu id Sed nisi fringilla Cras tincidunt vehicula, cursus
                non, nec risus non vitae ex vel emi eu id Sed nisi fringilla
                Cras tincidunt vehicula, cursus non, nec risus non vitae ex vel
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
              <h3 className="text-[#C59E5F] text-2xl font-medium mb-4">
                Events1
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                laoreet Lorem sodales, amet, vehicula Praesent eget.Nunc odio
                Lorem eu id Sed nisi fringilla Cras tincidunt vehicula, cursus
                non, nec risus non vitae ex vel emi eu id Sed nisi fringilla
                Cras tincidunt vehicula, cursus non, nec risus non vitae ex vel
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
              <h3 className="text-[#C59E5F] text-2xl font-medium mb-4">
                Events1
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                laoreet Lorem sodales, amet, vehicula Praesent eget.Nunc odio
                Lorem eu id Sed nisi fringilla Cras tincidunt vehicula, cursus
                non, nec risus non vitae ex vel emi eu id Sed nisi fringilla
                Cras tincidunt vehicula, cursus non, nec risus non vitae ex vel
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
          <h2 className="text-4xl font-bold text-[#C59E5F] mb-8">
            TESTIMONIALS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial Card 1 */}
            <div className="bg-[#836A41] p-6 rounded-lg relative">
              <div className="absolute top-4 left-4 text-5xl text-[#C59E5F] opacity-50">
                "
              </div>
              <p className=" text-sm leading-relaxed relative z-10 mb-4 px-4">
                Nam Donec non, laoreet ut at, turpis fringilla efficitur,
                adipiscing eget amet, ex tincidunt risus lacus, urna amet, lacus
                clidunt risus, urn
              </p>
              <div className="flex items-center justify-end pr-4">
                <p className=" text-sm">- name</p>
              </div>
              <div className="absolute bottom-4 right-4 text-5xl text-[#C59E5F] opacity-50 rotate-180">
                "
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-[#836A41] p-6 rounded-lg relative">
              <div className="absolute top-4 left-4 text-5xl text-[#C59E5F] opacity-50">
                "
              </div>
              <p className=" text-sm leading-relaxed relative z-10 mb-4 px-4">
                Nam Donec non, laoreet ut at, turpis fringilla efficitur,
                adipiscing eget amet, ex tincidunt risus lacus, urna amet, lacus
                clidunt risus, urn
              </p>
              <div className="flex items-center justify-end pr-4">
                <p className=" text-sm">- name</p>
              </div>
              <div className="absolute bottom-4 right-4 text-5xl text-[#C59E5F] opacity-50 rotate-180">
                "
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-[#836A41] p-6 rounded-lg relative">
              <div className="absolute top-4 left-4 text-5xl text-[#C59E5F] opacity-50">
                "
              </div>
              <p className=" text-sm leading-relaxed relative z-10 mb-4 px-4">
                Nam Donec non, laoreet ut at, turpis fringilla efficitur,
                adipiscing eget amet, ex tincidunt risus lacus, urna amet, lacus
                clidunt risus, urn
              </p>
              <div className="flex items-center justify-end pr-4">
                <p className=" text-sm">- name</p>
              </div>
              <div className="absolute bottom-4 right-4 text-5xl text-[#C59E5F] opacity-50 rotate-180">
                "
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}

      <div className="relative bg-black py-0">
        {/* Background with overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={glr1}
            alt="Background"
            fill
            className="object-cover brightness-[0.9]"
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

      {/* Reservation Section */}
      <div className="relative bg-black py-00">
        {/* Background with overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={Background}
            alt="Background"
            fill
            className="object-cover brightness-[0.9]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-[#C59E5F] mb-8">RESERVASI</h2>

          {/* Form Container */}
          <div className="max-w-3xl mx-auto">
            <form className="space-y-6">
              {/* Grid for 2-column inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nama */}
                <div>
                  <input
                    type="text"
                    placeholder="Nama"
                    className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2  placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80"
                  />
                </div>

                {/* Jumlah orang */}
                <div>
                  <input
                    type="number"
                    placeholder="Jumlah orang"
                    className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2  placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2  placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80"
                  />
                </div>

                {/* Nomor */}
                <div>
                  <input
                    type="tel"
                    placeholder="Nomor"
                    className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2  placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80"
                  />
                </div>

                {/* Tanggal */}
                <div>
                  <input
                    type="date"
                    placeholder="Tanggal"
                    className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2  placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                  />
                </div>

                {/* Waktu */}
                <div>
                  <input
                    type="time"
                    placeholder="Waktu"
                    className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2  placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                  />
                </div>
              </div>

              {/* Pesan */}
              <div>
                <textarea
                  placeholder="Pesan"
                  rows={4}
                  className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2  placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#836A41]  px-8 py-2 rounded hover:bg-[#C59E5F] transition-colors"
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Section */}
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

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-[#C59E5F] mb-8">KONTAK</h2>

          {/* Contact Container */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Map Container */}
              <div className="w-full aspect-square rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15934.902323504515!2d119.41246617143035!3d-5.147665903893327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefd269d80b2f9%3A0x3030bfbcaf770b0!2sMakassar%2C%20South%20Sulawesi!5e0!3m2!1sen!2sid!4v1708157645640!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale"
                ></iframe>
              </div>

              {/* Contact Form */}
              <div className="space-y-4">
                {/* Nama */}
                <div>
                  <input
                    type="text"
                    placeholder="Nama"
                    className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2  placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2  placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80"
                  />
                </div>

                {/* Nomor */}
                <div>
                  <input
                    type="tel"
                    placeholder="Nomor"
                    className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2  placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80"
                  />
                </div>

                {/* Subjek */}
                <div>
                  <input
                    type="text"
                    placeholder="Subjek"
                    className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2  placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80"
                  />
                </div>

                {/* Pesan */}
                <div>
                  <textarea
                    placeholder="Pesan"
                    rows={5}
                    className="w-full bg-transparent border border-[#C59E5F] rounded px-4 py-2  placeholder-[#C59E5F]/70 focus:outline-none focus:border-[#C59E5F]/80 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="bg-[#836A41]  px-8 py-2 rounded hover:bg-[#C59E5F] transition-colors"
                  >
                    Kirim
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* My Steak Info */}
            <div>
              <h3 className="text-[#C59E5F] text-xl font-medium mb-4">
                My Steak
              </h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Hertasning Baru Aroepala No. 99</p>
                <p>+62 812 3777 5451</p>
                <p className="mt-4">Tivoi Studio Unit 11 No. 77</p>
                <p>+62 812 4651 171</p>
                <p className="mt-4">mysteakindrapola@gmail.com</p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-gray-400 hover:text-[#C59E5F]">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#C59E5F]">
                    <Youtube size={20} />
                  </a>
                  <a
                    href="https://wa.me/6285255242210"
                    className="text-gray-400 hover:text-[#C59E5F]"
                  >
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Link */}
            <div>
              <h3 className="text-[#C59E5F] text-xl font-medium mb-4">Link</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#beranda" className="hover:text-[#C59E5F]">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#tentang-kami" className="hover:text-[#C59E5F]">
                    Tentang kami
                  </a>
                </li>
                <li>
                  <a href="#menu" className="hover:text-[#C59E5F]">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#events" className="hover:text-[#C59E5F]">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-[#C59E5F]">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#reservasi" className="hover:text-[#C59E5F]">
                    Reservasi
                  </a>
                </li>
                <li>
                  <a href="#kontak" className="hover:text-[#C59E5F]">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            {/* Jam Operasional */}
            <div>
              <h3 className="text-[#C59E5F] text-xl font-medium mb-4">
                Jam Operasional
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Senin</span>
                  <span className="text-gray-400">10:00 - 21:30 WITA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Selasa</span>
                  <span className="text-gray-400">10:30 - 21:30 WITA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Rabu</span>
                  <span className="text-gray-400">10:00 - 21:30 WITA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Kamis</span>
                  <span className="text-gray-400">10:00 - 21:30 WITA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Jumat</span>
                  <span className="text-gray-400">10:30 - 21:30 WITA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sabtu</span>
                  <span className="text-gray-400">10:00 - 21:30 WITA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Minggu</span>
                  <span className="text-gray-400">10:00 - 21:30 WITA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

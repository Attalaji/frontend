"use client"
import Image from "next/image";
import Navbar from "../components/Navbar";
import GallerySlider from "../components/GallerySlider";
import ReservationForm from "../components/ReservationForm";

import { Play, Section } from "lucide-react";
import { Check } from "lucide-react";
import { Instagram, MessageCircle, Youtube } from "lucide-react";

import Event from "../Asset/Assethome/Event.png";
import Events from "../Asset/Assethome/Events.jpg";
import Bg_Tentangkami from "../Asset/Assethome/Tentangkami.jpg";
import Background from "../Asset/Assethome/Background.jpg";
import Res from "../Asset/Assethome/fotores.jpg";
import Makanan from "../Asset/Assethome/Makanan.png";
import glr1 from "../Asset/Assethome/Gallery1.png";
import glr2 from "../Asset/Assethome/Gallery2.png";
import glr3 from "../Asset/Assethome/Gallery3.png";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

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
        <div className="relative md:flex-row flex flex-col items-center md:justify-around justify-center md:text-start text-center w-screen md:gap-0 gap-4">
          <div>
            <h1 className="md:text-7xl text-5xl font-bold mb-4">MySteak</h1>
            <p className="md:text-xl sm:text-lg md:mb-8 mb-4 md:max-w-xl sm:max-w-lg text-md max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias.
              Lorem, ipsum dolor. Lorem ipsum dolor sit.
            </p>
            <div className="flex md:justify-normal justify-center gap-4">
              <button className="px-8 py-1.5 rounded-full border-2 border-[#F2AA36] hover:bg-[#F2AA36] hover:text-black transition">
                Menu
              </button>
              <button className="px-8 py-1.5 rounded-full border-2 border-[#F2AA36] hover:bg-[#F2AA36] hover:text-black transition">
                Reservasi
              </button>
            </div>
          </div>
          <div className="md:w-20 md:h-20 w-14 h-14 rounded-full bg-[#F2AA36] flex items-center justify-center cursor-pointer hover:bg-[#c0872c] transition">
            <Play className="md:w-10 md:h-10 w-6 h-6 text-black" />
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
          <div>
            <h2 className="text-4xl font-bold text-[#C59E5F] mb-3">
              TENTANG KAMI
            </h2>
            <p className="text-white mb-12 text-wrap max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              aspernatur. Dolores, a iste. Veritatis, inventore! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Natus nostrum dolorem
              quisquam sint! Corrupti, in quisquam possimus et harum magnam ad
              quas.
            </p>
            <div className="flex-row lg:flex justify-between xl:gap-12 lg:gap-8 mb-16">
              <div className="xl:w-[70rem] lg:w-[70rem] md:w-[50%] md:mb-8 w-[0] h-full md:border-[#6B6B6B] md:border-4">
                <Image
                  src={Res}
                  alt="Restaurant Interior"
                  className="object-fit"
                />
              </div>
              <div className="bg-[#B5812F] p-8 text-[#FBDAA5]">
                <p className="mb-6">
                  Kami adalah restoran steak premium yang menghadirkan
                  pengalaman kuliner terbaik dengan bahan-bahan berkualitas
                  tinggi dan teknik memasak yang sempurna.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-6">
                    <IoMdCheckmarkCircleOutline className="text-[#5D431A] size-7" />
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam saepe perferendis et!
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <IoMdCheckmarkCircleOutline className="text-[#5D431A] size-7" />
                    <span>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Earum a illum cum nemo duci?
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <IoMdCheckmarkCircleOutline className="text-[#5D431A] size-7" />
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
                  provident enim rerum, hic eos consequatur pariatur. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. In
                  deserunt eum velit!
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

      <div className="relative bg-black">
        <div className="container w-[90%] mx-auto py-24">
          <h2 className="text-4xl font-bold text-[#C59E5F] mb-12">MENU</h2>
          <div className="md:flex justify-between xl:justify-around xl:w-[95%] w-[98%] flex-row">
            {/* Left Column */}
            <div className="space-y-4">
              {/* Menu Item 1 */}
              <div className="flex items-center">
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
                    <h3 className="text-[#C59E5F] text-lg font-medium flex items-center gap-2">
                      Menu1
                      <hr className="xl:min-w-[90%] lg:w-[14rem] md:w-[50%] sm:w-[20rem] w-[100%] border-[#C59E5F] rounded-sm border-[1.5px]" />
                      <span className="text-[#C59E5F] font-medium">50k</span>
                    </h3>
                    <p className="text-[#836A41] text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu Item 2 */}
              <div className="flex items-center">
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
                    <h3 className="text-[#C59E5F] text-lg font-medium flex items-center gap-2">
                      Menu2
                      <hr className="xl:min-w-[90%] lg:w-[14rem] md:w-[50%] sm:w-[20rem] w-[100%] border-[#C59E5F] rounded-sm border-[1.5px]" />
                      <span className="text-[#C59E5F] font-medium">50k</span>
                    </h3>
                    <p className="text-[#836A41] text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu Item 3 */}
              <div className="flex items-center">
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
                    <h3 className="text-[#C59E5F] text-lg font-medium flex items-center gap-2">
                      Menu3
                      <hr className="xl:min-w-[90%] lg:w-[14rem] md:w-[50%] sm:w-[20rem] w-[100%] border-[#C59E5F] rounded-sm border-[1.5px]" />
                      <span className="text-[#C59E5F] font-medium">50k</span>
                    </h3>
                    <p className="text-[#836A41] text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu Item 4 */}
              <div className="flex items-center">
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
                    <h3 className="text-[#C59E5F] text-lg font-medium flex items-center gap-2">
                      Menu4
                      <hr className="xl:min-w-[90%] lg:w-[14rem] md:w-[50%] sm:w-[20rem] w-[100%] border-[#C59E5F] rounded-sm border-[1.5px]" />
                      <span className="text-[#C59E5F] font-medium">50k</span>
                    </h3>
                    <p className="text-[#836A41] text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu Item 5 */}
              <div className="flex items-center">
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
                    <h3 className="text-[#C59E5F] text-lg font-medium flex items-center gap-2">
                      Menu5
                      <hr className="xl:min-w-[90%] lg:w-[14rem] md:w-[50%] sm:w-[20rem] w-[100%] border-[#C59E5F] rounded-sm border-[1.5px]" />
                      <span className="text-[#C59E5F] font-medium">50k</span>
                    </h3>
                    <p className="text-[#836A41] text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu Item 6 */}
              <div className="flex items-center">
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
                    <h3 className="text-[#C59E5F] text-lg font-medium flex items-center gap-2">
                      Menu6
                      <hr className="xl:min-w-[90%] lg:w-[14rem] md:w-[50%] sm:w-[20rem] w-[100%] border-[#C59E5F] rounded-sm border-[1.5px]" />
                      <span className="text-[#C59E5F] font-medium">50k</span>
                    </h3>
                    <p className="text-[#836A41] text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 mt-4 md:mt-0">
              {/* Menu Item 7 */}
              <div className="flex items-center">
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
                    <h3 className="text-[#C59E5F] text-lg font-medium flex items-center gap-2">
                      Menu7
                      <hr className="xl:min-w-[90%] lg:w-[14rem] md:w-[50%] sm:w-[20rem] w-[100%] border-[#C59E5F] rounded-sm border-[1.5px]" />
                      <span className="text-[#C59E5F] font-medium">50k</span>
                    </h3>
                    <p className="text-[#836A41] text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu Item 8 */}
              <div className="flex items-center">
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
                    <h3 className="text-[#C59E5F] text-lg font-medium flex items-center gap-2">
                      Menu8
                      <hr className="xl:min-w-[90%] lg:w-[14rem] md:w-[50%] sm:w-[20rem] w-[100%] border-[#C59E5F] rounded-sm border-[1.5px]" />
                      <span className="text-[#C59E5F] font-medium">50k</span>
                    </h3>
                    <p className="text-[#836A41] text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu Item 9 */}
              <div className="flex items-center">
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
                    <h3 className="text-[#C59E5F] text-lg font-medium flex items-center gap-2">
                      Menu9
                      <hr className="xl:min-w-[90%] lg:w-[14rem] md:w-[50%] sm:w-[20rem] w-[100%] border-[#C59E5F] rounded-sm border-[1.5px]" />
                      <span className="text-[#C59E5F] font-medium">50k</span>
                    </h3>
                    <p className="text-[#836A41] text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu Item 10 */}
              <div className="flex items-center">
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
                    <h3 className="text-[#C59E5F] text-lg font-medium flex items-center gap-2">
                      Menu10
                      <hr className="xl:min-w-[90%] lg:w-[14rem] md:w-[50%] sm:w-[20rem] w-[100%] gap-8 border-[#C59E5F] rounded-sm border-[1.5px]" />
                      <span className="text-[#C59E5F] font-medium">50k</span>
                    </h3>
                    <p className="text-[#836A41] text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu Item 11 */}
              <div className="flex items-center">
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
                    <h3 className="text-[#C59E5F] text-lg font-medium flex items-center gap-2">
                      Menu11
                      <hr className="xl:min-w-[90%] lg:w-[14rem] md:w-[50%] sm:w-[20rem] w-[100%] border-[#C59E5F] rounded-sm border-[1.5px]" />
                      <span className="text-[#C59E5F] font-medium">50k</span>
                    </h3>
                    <p className="text-[#836A41] text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu Item 12 */}
              <div className="flex items-center">
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
                    <h3 className="text-[#C59E5F] text-lg font-medium flex items-center gap-2">
                      Menu12
                      <hr className="xl:min-w-[90%] lg:w-[14rem] md:w-[50%] sm:w-[20rem] w-[100%] border-[#C59E5F] rounded-sm border-[1.5px]" />
                      <span className="text-[#C59E5F] font-medium">50k</span>
                    </h3>
                    <p className="text-[#836A41] text-sm">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="relative bg-black">
        {/* Background with overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={Events}
            alt="Events"
            fill
            className="object-cover brightness-[0.2]"
            priority
          />
        </div>

        <div className="container w-[90%] mx-auto py-24 relative text-white">
          <h2 className="text-4xl font-bold text-[#C59E5F] mb-12">EVENTS</h2>

          {/* Event 1 */}
          <div className="flex flex-col md:flex-row justify-between md:items-center items-start gap-8 mb-16">
            <div className="md:w-[45%] md:order-none order-1">
              <h3 className="text-[#C59E5F] text-2xl font-medium mb-4">
                Events1
              </h3>
              <p className="text-sm lg:text-lg md:text-md leading-relaxed">
                laoreet Lorem sodales, amet, vehicula Praesent eget.Nunc odio
                Lorem eu id Sed nisi fringilla Cras tincidunt vehicula, cursus
                non, nec risus non vitae ex vel emi eu id Sed nisi fringilla
                Cras tincidunt vehicula, cursus non, nec risus non vitae ex vel
              </p>
            </div>
            <div className="md:w-[45%] w-[70%]">
              <div className="w-full lg:h-[25rem] md:h-[18rem] h-[13rem] order-2 md:order-none border-[#6B6B6B] border-4">
                <Image
                  src={Event}
                  alt="Event 1"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="flex flex-col md:flex-row-reverse justify-between md:items-center items-start gap-8 mb-16">
            <div className="md:w-[45%] md:order-none order-1">
              <h3 className="text-[#C59E5F] text-2xl font-medium mb-4">
                Events2
              </h3>
              <p className="text-sm lg:text-lg md:text-md leading-relaxed">
                laoreet Lorem sodales, amet, vehicula Praesent eget.Nunc odio
                Lorem eu id Sed nisi fringilla Cras tincidunt vehicula, cursus
                non, nec risus non vitae ex vel emi eu id Sed nisi fringilla
                Cras tincidunt vehicula, cursus non, nec risus non vitae ex vel
              </p>
            </div>
            <div className="md:w-[45%] w-[70%]">
              <div className="w-full lg:h-[25rem] md:h-[18rem] h-[13rem] order-2 md:order-none border-[#6B6B6B] border-4">
                <Image
                  src={Event}
                  alt="Event 2"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="flex flex-col md:flex-row justify-between md:items-center items-start gap-8">
            <div className="md:w-[45%] md:order-none order-1">
              <h3 className="text-[#C59E5F] text-2xl font-medium mb-4">
                Events3
              </h3>
              <p className="text-sm lg:text-lg md:text-md leading-relaxed">
                laoreet Lorem sodales, amet, vehicula Praesent eget.Nunc odio
                Lorem eu id Sed nisi fringilla Cras tincidunt vehicula, cursus
                non, nec risus non vitae ex vel emi eu id Sed nisi fringilla
                Cras tincidunt vehicula, cursus non, nec risus non vitae ex vel
              </p>
            </div>
            <div className="md:w-[45%] w-[70%]">
              <div className="w-full lg:h-[25rem] md:h-[18rem] h-[13rem] order-2 md:order-none border-[#6B6B6B] border-4">
                <Image
                  src={Event}
                  alt="Event 3"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative min-h-[50vh] bg-black py-12">
        <div className="container w-[90%] mx-auto relative text-white">
          <h2 className="text-4xl font-bold text-[#C59E5F] mb-8">
            TESTIMONIALS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial Card 1 */}
            <div className="bg-[#836A41] p-6 rounded-lg relative">
              <div className="absolute top-4 left-4 text-2xl text-[#4D3815] opacity-80">
                <RiDoubleQuotesL />
              </div>
              <p className=" text-sm leading-relaxed relative mb-4 px-4">
                Nam Donec non, laoreet ut at, turpis fringilla efficitur,
                adipiscing eget amet, ex tincidunt risus lacus, urna amet, lacus
                clidunt risus, urn
              </p>
              <div className="absolute bottom-12 right-4 text-2xl text-[#4D3815] opacity-80">
                <RiDoubleQuotesR />
              </div>
              <div className="flex items-end justify-end">
                <p className=" text-sm">- name</p>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-[#836A41] p-6 rounded-lg relative">
              <div className="absolute top-4 left-4 text-2xl text-[#4D3815] opacity-80">
                <RiDoubleQuotesL />
              </div>
              <p className=" text-sm leading-relaxed relative mb-4 px-4">
                Nam Donec non, laoreet ut at, turpis fringilla efficitur,
                adipiscing eget amet, ex tincidunt risus lacus, urna amet, lacus
                clidunt risus, urn
              </p>
              <div className="absolute bottom-12 right-4 text-2xl text-[#4D3815] opacity-80">
                <RiDoubleQuotesR />
              </div>
              <div className="flex items-end justify-end">
                <p className=" text-sm">- name</p>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-[#836A41] p-6 rounded-lg relative">
              <div className="absolute top-4 left-4 text-2xl text-[#4D3815] opacity-80">
                <RiDoubleQuotesL />
              </div>
              <p className=" text-sm leading-relaxed relative mb-4 px-4">
                Nam Donec non, laoreet ut at, turpis fringilla efficitur,
                adipiscing eget amet, ex tincidunt risus lacus, urna amet, lacus
                clidunt risus, urn
              </p>
              <div className="absolute bottom-12 right-4 text-2xl text-[#4D3815] opacity-80">
                <RiDoubleQuotesR />
              </div>
              <div className="flex items-end justify-end">
                <p className=" text-sm">- name</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="relative bg-black h-screen">
        {/* Background with overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={glr1}
            alt="Background"
            fill
            className="object-cover brightness-[0.2]"
            priority
          />
        </div>

        <div className="container w-[90%] mx-auto relative text-white pt-24 ">
          <h2 className="text-4xl font-bold text-[#C59E5F] mb-20">GALLERY</h2>

          {/* Gallery Container */}
          <div className="relative">
            <GallerySlider />
          </div>
        </div>
      </div>


      {/* Reservation Section */}
      <div className="relative bg-black min-h-screen">

        <div className="container w-[90%] mx-auto relative text-white pt-24">
          <h2 className="text-4xl font-bold text-[#C59E5F] lg:mb-14 mb-8">RESERVASI</h2>

          {/* Form Container */}
          <div className="max-w-7xl mx-auto">
            <ReservationForm />
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

        <div className="container mx-auto px-4 relative ">
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

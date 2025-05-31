"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import GallerySlider from "../components/GallerySlider";
import ReservationForm from "../components/ReservationForm";
import ContactForm from "../components/ContactForm";
import VideoModal from "../components/VideoModal";

import Event from "../Asset/Assethome/Event.png";
import Events from "../Asset/Assethome/Events.jpg";
import Bg_Tentangkami from "../Asset/Assethome/Tentangkami.jpg";
import Background from "../Asset/Assethome/Background.jpg";
import Res from "../Asset/Assethome/fotores.jpg";
import Makanan from "../Asset/Assethome/Makanan.png";
import glr1 from "../Asset/Assethome/Gallery1.png";
import events1 from "../Asset/Assethome/events1.jpg";
import events2 from "../Asset/Assethome/events2.jpg";
import events3 from "../Asset/Assethome/events3.jpg";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="fixed z-10 w-full">
        {/* Navbar */}
        <Navbar />
      </div>

      <div
        id="beranda"
        className="min-h-screen flex items-center justify-center text-white"
      >
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
            Daging pilihan, rasa luar biasa.
            MySteak menghadirkan kelezatan yang menggoda di setiap gigitan.
            </p>
            <div className="flex md:justify-normal justify-center gap-4">
              <Link
                href="/#menu"
                className="px-8 py-1.5 rounded-full border-2 border-[#F2AA36] hover:bg-[#F2AA36] hover:text-black transition"
              >
                Menu
              </Link>
              <Link
                href="/#reservasi"
                className="px-8 py-1.5 rounded-full border-2 border-[#F2AA36] hover:bg-[#F2AA36] hover:text-black transition"
              >
                Reservasi
              </Link>
            </div>
          </div>
          <div className="md:w-20 md:h-20 w-14 h-14 rounded-full bg-[#F2AA36] flex items-center justify-center cursor-pointer hover:bg-[#c0872c] transition">
            <VideoModal />
          </div>
        </div>
      </div>

      <div id="tentang-kami" className="relative min-h-screen">
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
            MySteak adalah destinasi sempurna bagi para pecinta steak premium.
Kami menghidangkan daging pilihan terbaik, dimasak dengan teknik sempurna untuk menghadirkan cita rasa tak terlupakan.
Dengan suasana nyaman dan pelayanan istimewa, MySteak siap menjadi tempat favorit Anda untuk merayakan momen spesial.
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
                    Daging pilihan terbaik, dimasak dengan standar internasional untuk rasa yang sempurna.
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <IoMdCheckmarkCircleOutline className="text-[#5D431A] size-7" />
                    <span>
                    Suasana restoran yang nyaman dan elegan, cocok untuk keluarga, pasangan, maupun acara bisnis.
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <IoMdCheckmarkCircleOutline className="text-[#5D431A] size-7" />
                    <span>
                    Pelayanan ramah dan profesional untuk memastikan pengalaman bersantap Anda lebih berkesan. 
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
              OUR SPECIALTY
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="bg-[#836a41ce] p-8">
                <p>
                
Kami hanya menggunakan daging segar dan bahan-bahan premium untuk setiap hidangan yang kami sajikan.
                </p>
              </div>

              <div className="bg-[#836a41ce] p-8">
                <p>
                Nikmati pengalaman bersantap di tempat yang elegan, tenang, dan ramah untuk keluarga ataupun acara bisnis.


                </p>
              </div>

              <div className="bg-[#836a41ce] p-8">
                <p>
                Tim kami siap memberikan pelayanan terbaik, dari saat Anda tiba hingga hidangan terakhir.


                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}

      <div id="menu" className="relative bg-black">
        <div className="container w-[90%] mx-auto py-24">
          <h2 className="text-4xl font-bold text-[#C59E5F] mb-12">MENU</h2>
          <div className="md:flex justify-between xl:justify-around xl:w-[95%] w-[98%] flex-row gap-4">
            {/* Left Column */}
            <div className="space-y-4">
              {/* Menu Item 1 */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={Makanan}
                    alt="Prime Tenderloin Steak (Regular)"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Prime Tenderloin Steak (Regular) | <span className="text-[#C59E5F] font-semibold text-base">99.5k</span>
                    </h3>
                  </div>
                  <p className="text-[#836A41] text-sm mt-1">
                    Steak tenderloin tanpa lemak dengan tekstur lembut dan rasa gurih.
                  </p>
                </div>
              </div>

              {/* Menu Item 2 */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={Makanan}
                    alt="Prime Tenderloin Steak (Large)"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Prime Tenderloin Steak (Large) | <span className="text-[#C59E5F] font-semibold text-base">120.5k</span>
                    </h3>
                  </div>
                  <p className="text-[#836A41] text-sm mt-1">
                    Porsi besar tenderloin steak yang empuk dan juicy.
                  </p>
                </div>
              </div>

              {/* Menu Item 3 */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={Makanan}
                    alt="Supreme Sirloin Steak"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Supreme Sirloin Steak | <span className="text-[#C59E5F] font-semibold text-base">126k</span>
                    </h3>
                  </div>
                  <p className="text-[#836A41] text-sm mt-1">
                    Sirloin steak premium dengan ukuran besar dan rasa yang menggugah selera.
                  </p>
                </div>
              </div>

              {/* Menu Item 4 */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={Makanan}
                    alt="Chicken Steak"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Chicken Steak | <span className="text-[#C59E5F] font-semibold text-base">68k</span>
                    </h3>
                  </div>
                  <p className="text-[#836A41] text-sm mt-1">
                    Daging ayam panggang dengan bumbu spesial dan saus lezat.
                  </p>
                </div>
              </div>

              {/* Menu Item 5 */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={Makanan}
                    alt="Beef Steak with Mushroom Sauce"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Chop Steak | <span className="text-[#C59E5F] font-semibold text-base">78k</span>
                    </h3>
                  </div>
                  <p className="text-[#836A41] text-sm mt-1">
                    Daging olahan MySteak yang dimasak dengan bumbu khusus.
                  </p>
                </div>
              </div>

              {/* Menu Item 6 */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={Makanan}
                    alt="Pork Steak"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Chicken Special | <span className="text-[#C59E5F] font-semibold text-base">70k</span>
                    </h3>
                  </div>
                  <p className="text-[#836A41] text-sm mt-1">
                    Daging ayam yang dimasak dua kali dengan saus special MySteak.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 mt-4 md:mt-0">
              {/* Menu Item 7 */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={Makanan}
                    alt="Grilled Salmon Steak"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Grilled Salmon Steak | <span className="text-[#C59E5F] font-semibold text-base">138k</span>
                    </h3>
                  </div>
                  <p className="text-[#836A41] text-sm mt-1">
                    Ikan salmon panggang dengan bumbu khas dan saus lemon.
                  </p>
                </div>
              </div>

              {/* Menu Item 8 */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={Makanan}
                    alt="Lamb Steak"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Combi Steak | <span className="text-[#C59E5F] font-semibold text-base">78.5k</span>
                    </h3>
                  </div>
                  <p className="text-[#836A41] text-sm mt-1">
                    Perpaduan 2 daging serta ditambah kentang dan sayuran.
                  </p>
                </div>
              </div>

              {/* Menu Item 9 */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={Makanan}
                    alt="Blackpepper Steak"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Prime Lamb Chop | <span className="text-[#C59E5F] font-semibold text-base">136k</span>
                    </h3>
                  </div>
                  <p className="text-[#836A41] text-sm mt-1">
                    Potongan yang berasal dari tulang rusuk domba yang empuk dan kaya rasa.
                  </p>
                </div>
              </div>

              {/* Menu Item 10 */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={Makanan}
                    alt="Tenderloin Steak with Cheese"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Supreme Ribeye | <span className="text-[#C59E5F] font-semibold text-base">158k</span>
                    </h3>
                  </div>
                  <p className="text-[#836A41] text-sm mt-1">
                    Potongan tulang rusuk sapi yang memiliki lemak marbel yang kaya.
                  </p>
                </div>
              </div>

              {/* Menu Item 11 */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={Makanan}
                    alt="Cheeseburger Steak"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Wagyu Ribeye | <span className="text-[#C59E5F] font-semibold text-base">268k</span>
                    </h3>
                  </div>
                  <p className="text-[#836A41] text-sm mt-1">
                    Potongan daging sapi wagyu yang mengandung marbling dalam jumlah tinggi.
                  </p>
                </div>
              </div>

              {/* Menu Item 12 */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={Makanan}
                    alt="Grilled Chicken Steak"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#C59E5F] text-lg font-medium">
                      Prime Rib Eye | <span className="text-[#C59E5F] font-semibold text-base">125k</span>
                    </h3>
                  </div>
                  <p className="text-[#836A41] text-sm mt-1">
                    Potongan daging sapi yang memiliki lemak marbel yang kaya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div id="events" className="relative bg-black">
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
                Grand Opening My Steak Indonesia di Trans Studio Mall (TSM) Makassar
              </h3>
              <p className="text-sm lg:text-lg md:text-md leading-relaxed">
                My Steak Indonesia resmi membuka cabang barunya di TSM Makassar, 
                menawarkan berbagai pilihan steak premium dengan cita rasa khas Indonesia. 
                Acara pembukaan ini menarik banyak pengunjung dan pecinta kuliner di Makassar.
              </p>
            </div>
            <div className="md:w-[45%] w-[70%]">
              <div className="w-full order-2 md:order-none border-[#6B6B6B] border-4">
                <Image
                  src={events1}
                  alt="Event 1"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="flex flex-col md:flex-row-reverse justify-between md:items-center items-start gap-8 mb-16">
            <div className="md:w-[45%] md:order-none order-1">
              <h3 className="text-[#C59E5F] text-2xl font-medium mb-4">
                Promo Diskon 30% di My Steak TSM Makassar
              </h3>
              <p className="text-sm lg:text-lg md:text-md leading-relaxed">
                Dalam rangka menyambut pembukaan cabang baru, My Steak Indonesia 
                memberikan diskon spesial sebesar 30% untuk semua menu. Promo ini berlaku 
                untuk dine-in dan menarik banyak pelanggan baru.
              </p>
            </div>
            <div className="md:w-[45%] w-[70%]">
              <div className="w-full order-2 md:order-none border-[#6B6B6B] border-4">
                <Image
                  src={events2}
                  alt="Event 2"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="flex flex-col md:flex-row justify-between md:items-center items-start gap-8">
            <div className="md:w-[45%] md:order-none order-1">
              <h3 className="text-[#C59E5F] text-2xl font-medium mb-4">
                Peluncuran Menu Korean BBQ Steak
              </h3>
              <p className="text-sm lg:text-lg md:text-md leading-relaxed">
                My Steak Indonesia memperkenalkan menu baru "Korean BBQ Steak" dengan 
                saus barbeque spesial ala My Steak. Menu ini mendapat sambutan hangat dari 
                pelanggan yang ingin mencoba sensasi baru dalam menikmati steak.
              </p>
            </div>
            <div className="md:w-[45%] w-[70%]">
              <div className="w-full order-2 md:order-none border-[#6B6B6B] border-4">
                <Image
                  src={events3}
                  alt="Event 3"
                  className="w-full h-auto"
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
                Steak favorit karena dagingnya betul betul premium. Sensasi makannya terasa mahalnya. Worth the price pokoknya
              </p>
              <div className="absolute bottom-12 right-4 text-2xl text-[#4D3815] opacity-80">
                <RiDoubleQuotesR />
              </div>
              <div className="flex items-end justify-end">
                <p className=" text-sm">- Nur Aisyah Zera</p>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-[#836A41] p-6 rounded-lg relative">
              <div className="absolute top-4 left-4 text-2xl text-[#4D3815] opacity-80">
                <RiDoubleQuotesL />
              </div>
              <p className=" text-sm leading-relaxed relative mb-4 px-4">
                Steak ter enak dengan harga yg afordable... Porsi ya juga cukup pas ya.. Over all good dining experience terimakasih
              </p>
              <div className="absolute bottom-12 right-4 text-2xl text-[#4D3815] opacity-80">
                <RiDoubleQuotesR />
              </div>
              <div className="flex items-end justify-end">
                <p className=" text-sm">- Akbar Natsir</p>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-[#836A41] p-6 rounded-lg relative">
              <div className="absolute top-4 left-4 text-2xl text-[#4D3815] opacity-80">
                <RiDoubleQuotesL />
              </div>
              <p className=" text-sm leading-relaxed relative mb-4 px-4">
                Resto Steak favorit keluarga. Paling enak memang disini. Tetap dijaga ya kualitas dan rasanya.
              </p>
              <div className="absolute bottom-12 right-4 text-2xl text-[#4D3815] opacity-80">
                <RiDoubleQuotesR />
              </div>
              <div className="flex items-end justify-end">
                <p className=" text-sm">- Ichwan Alamsyah</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div id="gallery" className="relative bg-black h-screen">
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
      <div id="reservasi" className="relative bg-black min-h-screen">
        <div className="container w-[90%] mx-auto relative text-white pt-24">
          <h2 className="text-4xl font-bold text-[#C59E5F] lg:mb-14 mb-8">
            RESERVASI
          </h2>

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

        <div
          id="kontak"
          className="container w-[90%] mx-auto relative text-white pt-24"
        >
          <h2 className="text-4xl font-bold text-[#C59E5F] mb-8">KONTAK</h2>

          {/* Contact Container */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Map Container */}
              <div className="w-full aspect-square rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5402435342166!2d119.45437137762401!3d-5.177384081392387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee3c2943a2f81%3A0x7f63e3f58c0b4f31!2sMy%20Steak!5e0!3m2!1sen!2sid!4v1740032527330!5m2!1sen!2sid"
                  width="100%"
                  height="90%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Contact Form */}
              <div className="space-y-4">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-[#C59E5F]" />

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
              <div className="text-gray-400 text-sm">
                <p>Hertasning Baru Aroepala No. 36</p>
                <p>+62 821 3777 5451</p>
                <p className="mt-4">Trans Studio Mall F1 No. 77</p>
                <p>+62 821 8821 1171</p>
                <p className="mt-4">mysteakindonesia01@gmail.com</p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://wa.me/6285396018654"
                    className="text-gray-400 hover:text-[#C59E5F]"
                  >
                    <FaWhatsapp size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/mysteakindonesia_official"
                    className="text-gray-400 hover:text-[#C59E5F]"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@mysteakindonesia_officia"
                    className="text-gray-400 hover:text-[#C59E5F]"
                  >
                    <FaTiktok size={20} />
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

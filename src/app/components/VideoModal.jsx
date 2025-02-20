import { useState } from "react";
import { Play } from "lucide-react";

const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Tombol Play (Tengah Layar) */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:w-20 md:h-20 w-14 h-14 rounded-full bg-[#F2AA36] flex items-center justify-center cursor-pointer hover:bg-[#c0872c] transition"
      >
        <Play className="md:w-10 md:h-10 w-6 h-6 text-black" />
      </button>

      {/* Modal Video */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-auto max-w-xs">
            {/* Video */}
            <video
              className="w-full h-auto rounded-lg shadow-lg"
              controls
              autoPlay
            >
              <source src="/videos/reels.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoModal;

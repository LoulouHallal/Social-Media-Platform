import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="More options" width={16} height={16} />
      </div>
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/31446183/pexels-photo-31446183/free-photo-of-cozy-modern-cafe-interior-with-wall-bookshelf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Cozy coffee shop"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/31446183/pexels-photo-31446183/free-photo-of-cozy-modern-cafe-interior-with-wall-bookshelf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Coffee shop logo"
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-brown-600 font-medium text-blue-500">Cozy Brews Café</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "A cozy spot for coffee lovers to relax and enjoy fresh brews."
            : size === "md"
            ? "Come unwind with the aroma of freshly brewed coffee in a warm and inviting space."
            : "Discover the perfect place to sip, relax, and read a book. Cozy Brews Café offers artisanal coffee and a welcoming atmosphere."}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg cursor-pointer">
          Visit Us
        </button>
      </div>
    </div>
  );
};

export default Ad;

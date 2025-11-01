import Image from "next/image";
import DinoImage from "@/assets/img/dino.png";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center nowrap gap-2">
      <Image
        src={DinoImage.src}
        alt="Logo"
        width={72}
        height={72}
        className="scale-120"
      />
      <div className="leading-none">
        <span className="font-extrabold text-2xl md:text-3xl text-primary">
          DraVie
        </span>
        <p className="text-xs md:text-sm font-medium text-secondary-foreground">
          Học một ngôn ngữ - Mở một tầm nhìn
        </p>
      </div>
    </Link>
  );
}

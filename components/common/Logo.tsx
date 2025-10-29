import Image from "next/image";
import DinoImage from "@/assets/img/dino.png";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center nowrap gap-2">
      <Image src={DinoImage.src} alt="Logo" width={64} height={64} />
      <div className="leading-none -ml-2">
        <span className="font-extrabold text-xl text-primary">DraVie</span>
        <p className="text-xs font-medium text-secondary-foreground">
          Học một ngôn ngữ - Mở một tầm nhìn
        </p>
      </div>
    </Link>
  );
}

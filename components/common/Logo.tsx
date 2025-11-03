import Image from "next/image";
import DinoImage from "@/assets/img/dino.png";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center nowrap gap-2">
      <Image
        src={DinoImage.src}
        alt="Logo"
        width={0}
        height={0}
        sizes="100vw"
        priority
        quality={100}
        className="scale-120 size-full max-w-[72px] md:max-w-[76px]"
        style={{ filter: "contrast(1.03) saturate(1.06)" }}
      />
      <div className="leading-none">
        <span className="font-extrabold text-2xl md:text-4xl text-primary">
          DraVie
        </span>
        <p className="text-xs font-medium text-secondary-foreground">
          Học một ngôn ngữ - Mở một tầm nhìn
        </p>
      </div>
    </Link>
  );
}

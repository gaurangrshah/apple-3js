import Image from "next/image";

export function NavBar() {
  return (
    <header>
      <nav>
        <video src="/assets/videos/hero.mp4" />
        <Image
          src="/assets/images/apple.svg"
          alt="Apple logo"
          width={14}
          height={18}
        />
      </nav>
    </header>
  );
}

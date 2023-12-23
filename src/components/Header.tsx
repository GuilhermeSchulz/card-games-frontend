import Link from "next/link";
import { GiDuel, GiLevelFour } from "react-icons/gi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbCards } from "react-icons/tb";
import "./styles.css";
export function Header() {
  return (
    <header className="w-full flex justify-between gap-12">
      <section className="relative overflow-hidden">
        <Link href={"/"}>Home</Link>
        <Link href={"/login"}>Login</Link>
        <div className="bg-[--color-gray-800] w-12 skew-x-[30deg] absolute h-full right-[-36px]"></div>
      </section>
      <section className="w-10/12 px-0 gap-0 border-t-2 border-spacing-1 border-gray-600">
        <div className="bg-[--color-gray-800] w-12 skew-x-[30deg] absolute h-full left-[-32px]"></div>

        <Link className="nav_main" href={"/"}>
          <GiDuel className="h-8 w-8" />
          <p>Main</p>
        </Link>
        <Link className="nav_main" href={"/collection"}>
          <TbCards className="h-8 w-8" />
          <p>Collection</p>
        </Link>
        <Link className="nav_main" href={"/levels"}>
          <GiLevelFour className="h-8 w-8" /> <p>Levels</p>
        </Link>
        <Link className="nav_main" href={"/shop"}>
          <RiMoneyDollarCircleLine className="h-8 w-8" />
          <p>Shop</p>
        </Link>

        <div className="bg-[--color-gray-800] w-12 skew-x-[-30deg] absolute h-full right-[-32px]"></div>
      </section>
      <section className="relative overflow-hidden">
        <Link href={"/discovery"}>Discovery</Link>
        <Link href={"/news"}>News</Link>
        <div className="bg-[--color-gray-800] w-12 skew-x-[-30deg] absolute h-full left-[-36px]"></div>
      </section>
    </header>
  );
}

import Link from "next/link";
import { GiBigGear, GiDuel, GiLevelFour } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbCards, TbInfoSquareRounded } from "react-icons/tb";
import "./styles.css";
export function Header() {
  return (
    <header className="w-full flex justify-between gap-12 absolute top-0">
      <section className="first">
        <Link className="p-6" href={"/"}>
          <GiBigGear className="h-8 w-8" />
        </Link>
        <Link className="p-6" href={"/login"}>
          <TbInfoSquareRounded className="h-8 w-8" />
        </Link>
      </section>
      <section className="w-10/12 px-0 gap-0 border-t-4 border-spacing-1 border-gray-600 middle">
        <Link className="nav_main left" href={"/"}>
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
        <Link className="nav_main rigth" href={"/shop"}>
          <RiMoneyDollarCircleLine className="h-8 w-8" />
          <p>Shop</p>
        </Link>
      </section>
      <section className="last">
        <Link className="p-6" href={"/discovery"}>
          {" "}
          <GrMoney className="h-8 w-8" />
        </Link>
        <Link className="p-6" href={"/news"}>
          <IoLogOutOutline className="h-8 w-8" />
        </Link>
      </section>
    </header>
  );
}

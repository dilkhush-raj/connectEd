import Image from "next/image";
import logo from "@/assets/logo.png";

/**
 * Navbar component that displays user information including name, standard/class,
 * and subjects.
 *
 * @param {Object} props - The props object.
 * @param {string} props.name - The name of the user.
 * @param {number} props.standard - The standard/class of the user (e.g., 7).
 * @param {string} props.subjects - The subjects the user is enrolled in, as a string.
 *
 * @returns {JSX.Element} The rendered Navbar component.
 */
export default function Navbar({
  name,
  standard,
  subjects,
}: {
  name: string;
  standard: number;
  subjects: string;
}) {
  return (
    <nav className="bg-primary flex h-[98px] items-center justify-between px-[20px] text-white md:px-[50px]">
      <div>
        <Image src={logo} width={96.67} height={49.03} alt={"ConnectEd"} />
      </div>
      <h1 className="text-center text-xl font-bold leading-tight md:text-[32px]">
        Student Portal
      </h1>
      <div className="hidden md:block">
        <p className="text-right text-[23.333px] font-semibold">
          Hello, {name}!
        </p>
        <p className="text-right text-xs leading-none">
          Class {standard}, {subjects}
        </p>
      </div>
    </nav>
  );
}

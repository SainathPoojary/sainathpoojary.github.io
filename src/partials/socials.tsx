import icons from "@/assets/icons";
import Link from "next/link";
export default function Socials() {
  return (
    <section className="flex  justify-center items-center gap-5">
      <Link href={"https://github.com/sainathpoojary"} target="_blank">
        <icons.github />
      </Link>

      <Link href={"https://www.linkedin.com/in/sainathpoojary"} target="_blank">
        <icons.linkedin />
      </Link>
      <Link href={"https://twitter.com/sainathpoojaryy"} target="_blank">
        <icons.twitter />
      </Link>
      <Link href={"mailto:sainathrpoojary@gmail.com"} target="_blank">
        <icons.email />
      </Link>
    </section>
  );
}

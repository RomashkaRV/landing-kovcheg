import Link from "next/link";
import Image from "next/image";

import Arrow from "./img/arrow.svg";

import style from "./index.module.scss";

interface IProps {
  url: string,
  link: string,
  title: string,
  subtitle: string,
}

export default function SectionHead(props: IProps) {
  return (
    <div className={style.sectionHead}>
      <div className={style.sectionHead__info}>
        <p className={style.title}>
          {props.title}
        </p>
        <p className={style.subtitle}>
          {props.subtitle}
        </p>
      </div>
      <Link
        className={style.sectionHead__link}
        href={props.url}
      >
        {props.link}
        <Image src={Arrow} alt="arrow" />
      </Link>
    </div>
  );
}

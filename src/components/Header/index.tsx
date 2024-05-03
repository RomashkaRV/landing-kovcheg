import Link from "next/link";
import Image from "next/image";

import logoI from "/public/icons/logo.svg";
import phoneI from "/public/icons/phone.svg";
import whatsappI from "/public/icons/whatsapp.svg";
import telegramI from "/public/icons/telegram.svg";

import style from "./index.module.scss";

export default function Header() {

  const Links = [
    {
      title: "Услуги",
      url: "/"
    },
    {
      title: "Готовые проекты",
      url: "/"
    },
    {
      title: "Наш опыт",
      url: "/"
    }
  ];

  return (
    <header className={style.header}>
      <Link
        className={style.logo}
        href="/"
      >
        <div className={style.logo__img}>
          <Image src={logoI} alt="logo" />
        </div>
        <p className={style.logo__title}>КОВЧЕГСТРОЙ</p>
      </Link>
      <div className={style.nav}>
        {Links.map((item, index) => (
          <Link
            className={style.nav__item}
            key={index}
            href={item.url}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className={style.actions}>
        <Link className={style.actions__block} href="/">
          <Image src={telegramI} alt="telegram" />
        </Link>
        <Link className={style.actions__block} href="/">
          <Image src={whatsappI} alt="whatsapp" />
        </Link>
        <Link className={style.actions__block} href="/">
          <Image src={phoneI} alt="phone" />
          <p>+7 (968) 551-62-86</p>
        </Link>
      </div>
    </header>
  );
}

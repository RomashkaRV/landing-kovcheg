import React from "react";
import Link from "next/link";
import Image from "next/image";

import Feedback from "../Feedback";

import data from "src/app/const/data";

import logoI from "/public/icons/logo.svg";
import phoneI from "/public/icons/phone.svg";
import whatsappI from "/public/icons/whatsapp.svg";
import telegramI from "/public/icons/telegram.svg";

import style from "./index.module.scss";


export default function Footer() {

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
    <div className="container">
      <Feedback />
      <footer className={style.footer}>
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
          <Link
            className={style.actions__block}
            href={`https://t.me/${data.telegram}`}
            target="_blank"
          >
            <Image src={telegramI} alt="telegram" />
            <p>Наш Telegram</p>
          </Link>
          <Link
            className={style.actions__block}
            href={`https://wa.me/${data.whatsApp}`}
            target="_blank"
          >
            <Image src={whatsappI} alt="whatsapp" />
            <p>Наш WhatsApp</p>
          </Link>
          <Link
            className={style.actions__block}
            href={`tel:${data.phone}`}
          >
            <Image src={phoneI} alt="phone" />
            <p>+7 (968) 551-62-86</p>
          </Link>
        </div>
      </footer>
    </div>
  );
}

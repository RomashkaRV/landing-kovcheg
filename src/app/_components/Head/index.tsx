import React from "react";
import Image from "next/image";

import classNames from "src/functions/classNames";

import headI from "./img/bgi-main.jpeg";
import arrowI from "./img/arrow.svg";

import style from "./index.module.scss";
import Link from "next/link";


export default function Head() {
  const TagLinks = [
    "#МодульныеДома",
    "#ОзеленениеУчастка",
    "#СезонныеУслуги",
    "#Качество",
    "#УслугиСадовника",
    "#Надежность"
  ];

  return (
    <section className={style.head}>
      <div className={style.head__shadow} />
      <Image
        className={style.head__background}
        src={headI}
        alt="background img"
      />
      <div className={classNames(
        style.head__content,
        "container"
      )}>
        <div className={style.information}>
          <div className={style.information__title}>
            <p>Строй ковчег вместе с нами</p>
            <div className={style.arrow}>
              <Image src={arrowI} alt="arrow" />
            </div>
          </div>
          <p className={style.information__subTitle}>
            Строим дома по индивидуальным и авторским проектам в Москве и МО
          </p>
          <Link href="/" passHref>
            Рассчитать стоимость
          </Link>
        </div>
        <div className={style.tags}>
          <div className={style.tags__list}>
            {TagLinks.map((item, index) => (
              <div
                className={style.tag}
                key={index}
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

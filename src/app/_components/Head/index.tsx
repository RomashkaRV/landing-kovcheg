import React from "react";
import Image from "next/image";

import classNames from "src/functions/classNames";

import headI from "./img/bgi-main.jpeg";
import arrowI from "./img/arrow.svg";

import style from "./index.module.scss";


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
        <div className={style.title}>
          <p>Строй ковчег вместе с нами</p>
          <div className={style.arrow}>
            <Image src={arrowI} alt="arrow" />
          </div>
        </div>
        <div className={style.tagList}>
          {TagLinks.map((item, index) => (
            <div
              className={style.tagList__tag}
              key={index}
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";

import headI from "./img/bgi-main.jpeg";

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
      <Image src={headI} alt="background img" />
      <div className={style.head__content}>
        <p className={style.title}>
          Строй ковчег вместе с нами
        </p>
        <div className={style.tagList}>
          {TagLinks.map((item, index) => (
            <div
              className={style.tagList__tag}
              key={index}
            >
              <p>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

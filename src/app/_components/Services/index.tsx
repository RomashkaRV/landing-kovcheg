import React from "react";
import Image from "next/image";

import SectionHead from "src/components/SectionHead";

import arrowI from "public/icons/arrow.svg";
import servicesI1 from "public/images/services_1_remove.jpeg";
import servicesI2 from "public/images/services_2_remove.jpeg";

import style from "./index.module.scss";
import Link from "next/link";


export default function Services() {

  const services = [
    {
      link: "/",
      price: "1000",
      ico: "🌿",
      name: "Озеленение",
      background: servicesI1
    },
    {
      link: "/",
      ico: "🏠",
      price: "1000",
      name: "Благоустройство",
      background: servicesI2
    }
  ];

  return (
    <section className={style.services}>
      <SectionHead
        url="/"
        link="Все услуги"
        title="Услуги"
        subtitle="Подберите подходящую услугу и рассчитайте ее стоимость"
      />
      <div className={style.services__list}>
        {services.map((item, index) => (
          <Link
            className={style.item}
            href={item.link}
            key={index}
            passHref
          >
            <Image
              className={style.item__background}
              src={item.background}
              alt="img services"
            />
            <div className={style.item__info}>
              <div className={style.ico}>
                <p>{item.ico}</p>
              </div>
              <div className={style.data}>
                <p className={style.data__title}>
                  {item.name}
                </p>
                <p className={style.data__price}>
                  от {item.price} ₽/ м<sup>2</sup>
                </p>
              </div>
              <div className={style.button}>
                <Image src={arrowI} alt="arrow" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

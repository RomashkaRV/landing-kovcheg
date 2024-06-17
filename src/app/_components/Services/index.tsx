import Image from "next/image";

import SectionHead from "src/components/SectionHead";

import servicesI1 from "./_assets/services_1_remove.jpeg";
import servicesI2 from "./_assets/services_2_remove.jpeg";

import houseI from "./_assets/house.svg";
import landscaping from "./_assets/landscaping.svg";

import style from "./index.module.scss";

export default function Services() {

  const services = [
    {
      link: "/",
      price: "1000",
      ico: landscaping,
      name: "Озеленение",
      background: servicesI1
    },
    {
      link: "/",
      ico: houseI,
      price: "1000",
      name: "Озеленение",
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
          <div className={style.item} key={index}>
            <Image
              className={style.item__background}
              src={item.background}
              alt="img services"
            />
            <div className={style.item__info}>
              <div className={style.info__ico}>
                <Image
                  src={item.ico}
                  alt="ico"
                />
              </div>
              <div className={style.info__text}>
                <p className={style.title}>
                  {item.name}
                </p>
                <p className={style.price}>
                  от {item.price} ₽/ м<sup>2</sup>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

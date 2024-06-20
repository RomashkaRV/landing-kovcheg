import Image from "next/image";

import photoI from "public/icons/photo.png";
import houseI from "public/icons/hosue.png";
import bagMoneyI from "public/icons/moneyBag.png";

import style from "./index.module.scss";


export default function BlockServices() {

  const Items = [
    {
      ico: photoI,
      name: "Фотоотчет",
      description: "Еженедельный фото- и видео- отчет о проделанной работе в telegram-чате"
    },
    {
      ico: bagMoneyI,
      name: "Ипотека",
      description: "Получите решение по ипотеке"
    },
    {
      ico: houseI,
      name: "Приемка",
      description: "Сдача всех этапов работ"
    }
  ];

  return (
    <section className={style.list}>
      {Items.map((item, index) => (
        <div
          className={style.block}
          key={index}
        >
          <div className={style.ico}>
            <Image src={item.ico}  alt="ico" />
          </div>
          <div className={style.data}>
            <p className={style.data__name}>
              {item.name}
            </p>
            <p className={style.data__description}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

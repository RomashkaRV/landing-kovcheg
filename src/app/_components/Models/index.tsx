import Card from "src/components/Card";
import classNames from "src/functions/classNames";
import SectionHead from "src/components/SectionHead";

import style from "./index.module.scss";


export default function Models() {

  const dataCard =
    {
      id: "1",
      img: "https://i.imgur.com/V1JeMn0.png",
      name: "Модульный дом К95",
      size: "160",
      price: "4,9",
      isPopular: true,
      isFinishing: true
    };

  return (
    <section className={classNames(style.models)}>
      <SectionHead
        url="/"
        link="Все модели"
        title="Модели"
        subtitle="Подберите подходящую модель и рассчитайте ее стоимость"
      />
      <div className={style.models__list}>
        {Array.from({ length: 3 }, (_, index) => (
          <Card
            data={dataCard}
            key={index}
          />
        )).map(item => item)}
      </div>
    </section>
  );
}

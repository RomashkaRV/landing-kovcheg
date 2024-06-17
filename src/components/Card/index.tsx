import Link from "next/link";
import Image from "next/image";

import CardImage from "public/card_remove.jpeg";

import style from "./index.module.scss";

interface Card {
  id: string,
  img: string,
  name: string,
  size: string
  price: string,
  isPopular: boolean,
  isFinishing: boolean,
}

interface IProps {
  data: Card
}

export default function Card(props: IProps) {
  const {
    data
  } = props;

  return (
    <Link
      className={style.card}
      href={data.id}
      passHref
    >
      <div className={style.card__status}>
        {data.isPopular ? (
          <div className={style.popular}>
            <p>🔥 Популярное</p>
          </div>
        ) : null}
        {data.isFinishing ? (
          <div className={style.finishing}>
            <p>С отделкой</p>
          </div>
        ) : null}
      </div>
      <div className={style.card__img}>
        <Image src={CardImage} alt="image_card" />
      </div>
      <div className={style.card__info}>
        <div>
          <p className={style.name}>
            {data.name}
          </p>
          <p className={style.size}>
            {data.size} м<sup>2</sup>
          </p>
        </div>
        <div>
          <p className={style.price}>
           от {data.price} млн ₽
          </p>
          <div className={style.link}>
            Подробнее
          </div>
        </div>
      </div>
    </Link>
  );
}

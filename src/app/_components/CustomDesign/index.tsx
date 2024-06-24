import Link from "next/link";
import Image from "next/image";

import arrow from "public/icons/arrowButton.svg";

import centerI from "public/images/customDesign-center.png";
import leftI from "public/images/customDesign-left.png";
import rightI from "public/images/customDesign-right.png";

import style from "./index.module.scss";


export default function CustomDesign() {
  return (
    <section className={style.custom}>
      <div className={style.custom__container}>
        <div className={style.info}>
          <p className={style.info__title}>
            Custom Design
          </p>
          <p className={style.info__description}>
            Мы можем построить дом на дереве для вас
          </p>
          <Link
            className={style.info__button}
            href="/"
            passHref
          >
            Перейти к каталогу
            <Image src={arrow} alt="arrow" />
          </Link>
        </div>
        <div className={style.images}>
          <div className={style.images__blurLeft} />
          <div className={style.images__blurRight} />
          <Image src={centerI} className={style.img__center} alt="house" />
          <Image src={leftI} className={style.img__left} alt="house" />
          <Image src={rightI} className={style.img__right} alt="house" />
        </div>
      </div>
    </section>
  );
}

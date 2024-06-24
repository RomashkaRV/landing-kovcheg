"use client";

import Image from "next/image";
import { enqueueSnackbar } from "notistack";

import photo from "public/images/photo_remove.png";
import arrow from "public/icons/arrowButton.svg";

import style from "./index.module.scss";


export default function Feedback() {

  const sendFeedback = () => {
    enqueueSnackbar("Заявка отправлена", {
      variant: "success",
      anchorOrigin: { horizontal: "right", vertical: "bottom" }
    });
  };

  return (
    <section className={style.feedback}>
      <div className={style.feedback__head}>
        <div className={style.info}>
          <p className={style.info__title}>
              Оставить заявку
          </p>
          <p className={style.info__subtitle}>
              Помощь на каждом этапе покупки
          </p>
        </div>
        <div className={style.manager}>
          <div className={style.man}>
            <Image src={photo} alt="photo" />
            <div className={style.man__info}>
              <p className={style.name}>
                  Мария
              </p>
              <p className={style.post}>
                  Менеджер отдела продаж
              </p>
            </div>
          </div>
          <hr />
          <p className={style.manager__info}>
              Перезвонит <br /> и проконсультирует
          </p>
        </div>
      </div>
      <div className={style.feedback__content}>
        <div className={style.actions}>
          <div className={style.field}>
            <p className={style.field__title}>
                Имя <span>*</span>
            </p>
            <input
              placeholder="Введите имя"
            />
          </div>
          <div className={style.field}>
            <p className={style.field__title}>
                Телефон <span>*</span>
            </p>
            <input
              placeholder="Введите телефон"
            />
          </div>
          <div className={style.field}>
            <p className={style.field__title}>
                Email <span>*</span>
            </p>
            <input
              placeholder="Введите почту"
            />
          </div>
          <button
            className={style.button}
            onClick={sendFeedback}
          >
              Оставить заявку
            <Image src={arrow} alt="arrow" />
          </button>
        </div>
        <p className={style.personal}>
            Cогласен на обработку персональных данных, а также с политикой конфиденциальности
        </p>
      </div>
    </section>
  );
}

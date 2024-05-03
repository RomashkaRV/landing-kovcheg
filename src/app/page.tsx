"use client";

import style from "./page.module.scss";

import React from "react";
import Head from "./_components/Head";


export default function MainPage() {

  return (
    <div className={style.main}>
      <Head />
      <section>
        models
      </section>
      <section>
        catalog
      </section>
      <section>
        services
      </section>
    </div>
  );
}

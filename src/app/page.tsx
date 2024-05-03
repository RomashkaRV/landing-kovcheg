"use client";

import style from "./page.module.scss";

import React from "react";
import Head from "./_components/Head";
import Models from "./_components/Models";


export default function MainPage() {

  return (
    <div className={style.main}>
      <Head />
      <div className="container">
        <Models />
        <section>
          catalog
        </section>
        <section>
          services
        </section>
      </div>
    </div>
  );
}

"use client";

import React from "react";

import Head from "./_components/Head";
import Models from "./_components/Models";
import Services from "./_components/Services";

import style from "./page.module.scss";
import BlockServices from "./_components/BlockServices";


export default function MainPage() {

  return (
    <div className={style.main}>
      <Head />
      <div className="container">
        <Models />
        <Services />
        <BlockServices />
      </div>
    </div>
  );
}

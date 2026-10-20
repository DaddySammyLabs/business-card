import React from "react";
import { useApp } from "@/context/AppContext";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import styles from "./Guarantees.module.css";

function Guarantees({ texts }) {
  const { upButton, scroll, theme, language = "ru" } = useApp();

  const [parent] = useAutoAnimate();

  return (
    <>
      <div ref={parent} className={styles.guarantees}>
        <h1>{texts.guarantee.toUpperCase()}</h1>

        <ol className={styles.info}>
          <li>
            <img
              src={
                theme === "light"
                  ? "/icons/circle-check-dark.svg"
                  : "/icons/circle-check.svg"
              }
              alt="checked"
            />
            <p>
              Оплату принимаю через платёжную систему
              <span className={styles.markedText}> Payment-System-name</span>,
              которая контролирует безопасность денежных передов.
            </p>
          </li>
          <li>
            <img
              src={
                theme === "light"
                  ? "/icons/circle-check-dark.svg"
                  : "/icons/circle-check.svg"
              }
              alt="checked"
            />
            <p>
              Убедится в моей ответственности и профессионализме можно
              <span className={styles.markedText}> написав клиентам</span>,
              оставивших (отзывы клиентов выше).
            </p>
          </li>
          <li>
            <img
              src={
                theme === "light"
                  ? "/icons/circle-check-dark.svg"
                  : "/icons/circle-check.svg"
              }
              alt="checked"
            />
            <p>
              Все<span className={styles.markedText}> авторские права</span> на
              работу преходят заказчику после выполнения заказа.
            </p>
          </li>
          <li>
            <img
              src={
                theme === "light"
                  ? "/icons/circle-check-dark.svg"
                  : "/icons/circle-check.svg"
              }
              alt="checked"
            />
            <p>
              В своих работах использую материалы строго
              <span className={styles.markedText}>
                {" "}
                разрешенные для личного и коммерческого использования
              </span>
              .
            </p>
          </li>
        </ol>
      </div>
      <hr className={styles.line}></hr>
      <div onClick={upButton} className={styles.footer}>
        {texts.author}
      </div>
      <div onClick={upButton} className={scroll < 1960 ? "" : styles.upButton}>
        <img src={"/icons/up.svg"} />
      </div>
    </>
  );
}

export default Guarantees;

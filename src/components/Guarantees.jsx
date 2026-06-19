import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import "../styles/Guarantees.css";

function Guarantees({ upButton, scroll, theme, texts, language = "ru" }) {
  const [parent] = useAutoAnimate();

  return (
    <>
      <div ref={parent} className="guarantees-block">
        <h1>{language === "ru" ? "ГАРАНТИИ" : "GUARANTEES"}</h1>
        {/* <h1>{texts.guarantee.toUpperCase()}</h1> */}

        <ol className="guarantee-info">
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
              <span className="marked-text"> Payment-System-name</span>, которая
              контролирует безопасность денежных передов.
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
              <span className="marked-text"> написав клиентам</span>, оставивших
              (отзывы клиентов выше).
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
              Все<span className="marked-text"> авторские права</span> на работу
              преходят заказчику после выполнения заказа.
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
              <span className="marked-text">
                {" "}
                разрешенные для личного и коммерческого использования
              </span>
              .
            </p>
          </li>
        </ol>
      </div>
      <hr className="line"></hr>
      <div onClick={upButton} className="footer">
        {texts.author}
      </div>
      <div onClick={upButton} className={scroll < 1960 ? "" : "btn-up"}>
        <img src={"/icons/up.svg"} />
      </div>
    </>
  );
}

export default Guarantees;

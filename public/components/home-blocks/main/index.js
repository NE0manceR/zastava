import styles from "./styles.module.scss";


export default function Main() {
  return (
    <div className={styles.mainBcg}>
      {/* <img className={styles.mainBcg__wings} src="/img/main/wing.png" alt="img" /> */}
      <div className={styles.main}>
        <div className={styles.main__content}>
          <div className={styles.main__club}>
            <div className={styles.main__club_name}>
              <span>РЕГбИ</span>
              <span>КЛУБ</span>
              <span>Санкт-петербург</span>
            </div>
            <img src="/img/main/logo.png" alt='img' className={styles.main__emblem}>
            </img>
            <svg className={styles.main__scroll} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 29.5625V10.4375C32 5.78506 28.1085 2 23.3253 2H16.6747C11.8915 2 8 5.78506 8 10.4375V29.5625C8 34.2149 11.8915 38 16.6747 38H23.3253C28.1085 38 32 34.2149 32 29.5625ZM23.3253 4.8125C26.5142 4.8125 29.1084 7.33578 29.1084 10.4375V29.5625C29.1084 32.6642 26.5142 35.1875 23.3253 35.1875H16.6747C13.4858 35.1875 10.8916 32.6642 10.8916 29.5625V10.4375C10.8916 7.33578 13.4858 4.8125 16.6747 4.8125H23.3253ZM20 7.69531C19.2014 7.69531 18.5542 8.32483 18.5542 9.10156C18.5542 9.8783 19.2014 10.5078 20 10.5078C20.7986 10.5078 21.4458 9.8783 21.4458 9.10156C21.4458 8.32483 20.7986 7.69531 20 7.69531ZM20 13.3203C19.2014 13.3203 18.5542 13.9498 18.5542 14.7266C18.5542 15.5033 19.2014 16.1328 20 16.1328C20.7986 16.1328 21.4458 15.5033 21.4458 14.7266C21.4458 13.9498 20.7986 13.3203 20 13.3203ZM20 18.9453C19.2014 18.9453 18.5542 19.5748 18.5542 20.3516C18.5542 21.1283 19.2014 21.7578 20 21.7578C20.7986 21.7578 21.4458 21.1283 21.4458 20.3516C21.4458 19.5748 20.7986 18.9453 20 18.9453Z" fill="white" />
              <path d="M13.5278 25.5719L20.0172 32.2445L26.4747 25.5692L24.3687 23.6419L20.0115 28.146L15.6285 23.6392L13.5278 25.5719Z" fill="#F8C730" />
            </svg>

          </div>
          <div className={styles.main__match}>
            <div className={styles.main__link_to}>
              <div>
                <span>Чемпионаты</span>
                <img src="/icons/arro-down.svg" alt="img" />
              </div>
              <div>
                <span>Новости</span>
                <img src="/icons/arro-down.svg" alt="img" />
              </div>
              <div>
                <span>Команды</span>
                <img src="/icons/arro-down.svg" alt="img" />
              </div>
              <div>
                <span>Видео</span>
                <img src="/icons/arro-down.svg" alt="img" />
              </div>
              <div>
                <span>Игроки</span>
                <img src="/icons/arro-down.svg" alt="img" />
              </div>
            </div>
            <div className={styles.main__teams}>
              <div className={styles.main__time}>
                <span className={styles.main__decor_line}>Август</span>
                <div className={styles.main__shape}>
                  <span>09</span>
                </div>
                <span className={styles.main__decor_line}>в 19:00</span>
              </div>
              <div className={styles.main__cards}>
                <div className={styles.main__card}>
                  <img src="/img/main/teamCard/logo-frame.png" alt="img" />
                  <span>Zastava</span>
                </div>
                <img className={styles.main__sv} src="/img/main/VS.svg" alt="img" />
                <div className={styles.main__card}>
                  <img src="/img/main/teamCard/logo-frame.png" alt="img" />
                  <span>Zastava</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  );
}

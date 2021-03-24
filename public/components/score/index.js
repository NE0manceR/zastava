import styles from "./styles.module.scss";
import { Fragment, useState } from 'react'

export default function Score(props) {


  let [showInfo, setShowInfo] = useState(false)

  function activeInfo(id) {
    setShowInfo(showInfo = !showInfo)
  }

  return (
    <div key={props.id}>
      <div className={styles.score}>
        <div className={styles.score__content}>
          {props.matchStarted ? <div className={styles.score__date}>LIVE</div> : <div className={styles.score__time}>{props.time}</div>}
          <div className={styles.score__yellow_line}></div>
          <span className={styles.score__team}>{props.team1}</span>
          <div className={styles.score__black_line}></div>
          <span className={styles.score__town}>{props.town1}</span>
        </div>

        <div className={styles.score__total}>
          <span>{props.totalScoreTeam1}</span>
          <span className={styles.score__title_line}>-</span>
          <span>{props.totalScoreTeam2}</span>
        </div>

        <div className={styles.score__content}>
          <span className={styles.score__town}>{props.town2}</span>
          <div className={styles.score__black_line}></div>
          <span className={styles.score__team}>{props.team2}</span>
          <img
            onClick={() => { activeInfo(props.id) }}
            className={styles.score__more}
            src="/img/more.svg" alt="img" />
        </div>
      </div>

      <div className={`${styles.wrap} ${showInfo ? '' : styles.wrap__no_active}`}>
        <div className={styles.info}>
          <span className={styles.info__details}>Детали матча</span>
          <div className={styles.info__wrap}>
            <div>
              <p className={styles.info__title}>Дата</p>
              <p className={styles.info__description}>{props.infoDate}</p>
            </div>

            <div>
              <p className={styles.info__title}>Время</p>
              <p className={styles.info__description}>{props.infoTime}</p>
            </div>
            <div>
              <p className={styles.info__title}>Стадион</p>
              <p className={styles.info__description}>{props.stadium}</p>
            </div>
            <div>
              <p className={styles.info__title}>Чемпионат</p>
              <p className={styles.info__description}>{props.tournament}</p>
            </div>
            <div>
              <p className={styles.info__title}>Тур</p>
              <p className={styles.info__description}>{props.tour}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

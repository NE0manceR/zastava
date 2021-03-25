import { Fragment } from "react";
import Score from "../../score";
import styles from "./styles.module.scss";

let dataGame = [
	{
		id: 1,
		matchStarted: true,
		time: "24.04",
		team1: "РК Zastava",
		town1: "Санкт-Петербург",
		totalScoreTeam1: 1,
		totalScoreTeam2: 2,
		team2: "РК Ди намо",
		town2: "Москва",
		infoDate: "24 марта",
		infoTime: "12:00",
		stadium: "Длинное название стадиона , Москва, Россия",
		tournament: "Чемпионат России Премьер-Лига",
		tour: "IV",
	},
	{
		id: 2,
		matchStarted: false,
		time: "24.04",
		team1: "РК Zastava",
		town1: "Санкт-Петербург",
		totalScoreTeam1: 1,
		totalScoreTeam2: 2,
		team2: "РК Ди намо",
		town2: "Москва",
		infoDate: "24 марта",
		infoTime: "12:00",
		stadium: "Длинное название стадиона , Москва, Россия",
		tournament: "Чемпионат России Премьер-Лига",
		tour: "IV",
	},
	{
		id: 3,
		matchStarted: true,
		time: "24.04",
		team1: "РК Zastava",
		town1: "Санкт-Петербург",
		totalScoreTeam1: 1,
		totalScoreTeam2: 2,
		team2: "РК Ди намо",
		town2: "Москва",
		infoDate: "24 марта",
		infoTime: "12:00",
		stadium: "Длинное название стадиона , Москва, Россия",
		tournament: "Чемпионат России Премьер-Лига",
		tour: "IV",
	},
	{
		id: 4,
		matchStarted: false,
		time: "24.04",
		team1: "РК Zastava",
		town1: "Санкт-Петербург",
		totalScoreTeam1: 1,
		totalScoreTeam2: 2,
		team2: "РК Ди намо",
		town2: "Москва",
		infoDate: "24 марта",
		infoTime: "12:00",
		stadium: "Длинное название стадиона , Москва, Россия",
		tournament: "Чемпионат России Премьер-Лига",
		tour: "IV",
	},
	{
		id: 5,
		matchStarted: false,
		time: "24.04",
		team1: "РК Zastava",
		town1: "Санкт-Петербург",
		totalScoreTeam1: 1,
		totalScoreTeam2: 2,
		team2: "РК Ди намо",
		town2: "Москва",
		infoDate: "24 марта",
		infoTime: "12:00",
		stadium: "Длинное название стадиона , Москва, Россия",
		tournament: "Чемпионат России Премьер-Лига",
		tour: "IV",
	},
	{
		id: 6,
		matchStarted: true,
		time: "24.04",
		team1: "РК Zastava",
		town1: "Санкт-Петербург",
		totalScoreTeam1: 1,
		totalScoreTeam2: 2,
		team2: "РК Ди намо",
		town2: "Москва",
		infoDate: "24 марта",
		infoTime: "12:00",
		stadium: "Длинное название стадиона , Москва, Россия",
		tournament: "Чемпионат России Премьер-Лига",
		tour: "IV",
	},
	{
		id: 7,
		matchStarted: true,
		time: "24.04",
		team1: "РК Zastava",
		town1: "Санкт-Петербург",
		totalScoreTeam1: 1,
		totalScoreTeam2: 2,
		team2: "РК Ди намо",
		town2: "Москва",
		infoDate: "24 марта",
		infoTime: "12:00",
		stadium: "Длинное название стадиона , Москва, Россия",
		tournament: "Чемпионат России Премьер-Лига",
		tour: "IV",
	},
];

export default function Tournament() {
	return (
		<div className={styles.tournament}>
			<div className={styles.tournament__list}>
				<div className={styles.tournament__nav_wrap}>
					<span>В начало</span>
					<span>Новости</span>
				</div>
				<div className={styles.tournament__watch}>
					<span>Чемпионаты</span>
					<div></div>
					<span>
						Список<br></br>матчей
					</span>
					<button
						onClick={() => {
							props.change();
						}}>
						Смотреть все
					</button>
				</div>
			</div>
			<div className={styles.tournament__filters}>
				<div className={styles.tournament__filter_wrap}>
					<div>
						<span>РК Zastava</span>
						<img src="/img/arrow-acrod.svg" alt="img" />
					</div>
					<div>
						<span>Все чемпионаты</span>
						<img src="/img/arrow-acrod.svg" alt="img" />
					</div>
					<div>
						<span>Показать</span>
						<img src="/img/arrow-acrod.svg" alt="img" />
					</div>
				</div>
				{dataGame.map(
					({
						id,
						matchStarted,
						time,
						team1,
						town1,
						totalScoreTeam1,
						totalScoreTeam2,
						team2,
            town2,
						infoDate,
						infoTime,
						stadium,
						tournament,
						tour,
					}) => {
						return (
							<Fragment key={id}>
								<Score
									id={id}
									matchStarted={matchStarted}
									time={time}
									team1={team1}
									town1={town1}
									town2={town2}
									totalScoreTeam1={totalScoreTeam1}
									totalScoreTeam2={totalScoreTeam2}
									team2={team2}
									infoDate={infoDate}
									infoTime={infoTime}
									stadium={stadium}
									tournament={tournament}
									tour={tour}
								/>
							</Fragment>
						);
					}
				)}
			</div>
		</div>
	);
}

// id: 5,
// matchStarted: false,
// time: "24.04",
// team1: "РК Zastava",
// town1: "Санкт-Петербург",
// totalScoreTeam1: 1,
// totalScoreTeam2: 2,
// team2: "РК Ди намо",
// town2: "Москва",
// infoDate: "24 марта",
// infoTime: "12:00",
// stadium: "Длинное название стадиона , Москва, Россия",
// tournament: "Чемпионат России Премьер-Лига",
// tour: "IV",
// }

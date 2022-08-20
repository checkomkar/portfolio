import React from "react";
import { Row, Col } from "react-bootstrap";
import Menu from "./Menu";
import styles from "../styles/HomePage.module.scss";
import dp from "../public/dp.png";
function HomePage() {
	console.log(dp);
	return (
		<>
			<Row className="g-0">
				<Col md={12} xs={12}>
					<Menu />
				</Col>
				<Col md={12} xs={12} className={styles.banner}>
					<div className={styles["banner-overlay"]}></div>
					<p className={styles.quote}>
						“What we know is a drop, what we don’t know is an ocean”
						<span className={styles.from}>-Dark</span>
					</p>
					<Row className={styles["banner-text"]}>
						<Col xs={7} md={7}>
							<p className={styles.creative}>Creative</p>
							<p className={styles.niches}>
								WEB3 WRITER <br /> DESIGNER <br /> DEVELOPER{" "}
								<br />
								DIGITAL MARKETER
							</p>
						</Col>
						<Col xs={5} md={5}>
							<p className={styles["about-me"]}>
								I AM A WEB3 WRITER, DEVELOPER AND UI DESIGNER,
								COPY WRITER. I HAVE MANY YEARS OF EXPERIENCE IN
								CONSULTING IN WEB DEVELOPMENT AND DESIGNING. I
								LOVE MUSIC, TRAVELLING AND ART.
							</p>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row className="g-0">
				<Col md={12} xs={12} className={styles["client-list"]}></Col>
				<Col md={12} xs={12} className={styles["profile-banner"]}>
					<div className={`${styles["profile-copy-container"]} `}>
						<Row className="g-0">
							<Col md={6} xs={6} className={styles["dp"]}>
								<img src={dp.src} alt="dp" />
								{/* <div className={styles["dp-image-holder"]}>
									<div
										className={styles["dp-image"]}
										alt="dp"
									/>
								</div> */}
							</Col>
							<Col md={6} xs={6}>
								<p className={styles["dp-text"]}>
									I USE MY PASSION AND SKILLS TO CREATE
									DIGITAL PRODUCTS LIKE WEBSITES, EMAIL
									TEMPLATES, GRAPHICS, COPY WRITING, ETC. AND
									MOST IMPORTANTLY GROWING YOUR BUSINESS BY
									PROVIDING YOUR CUSTOMERS WITH HIGH QUALITY
									CONTENT. NATIONAL AND INTERNATIONAL CLIENTS
									RELY ON ME FOR DESIGN AND IMPLEMENTATION. AS
									AN INDEPENDENT, I WORK ALSO WITH WEB
									AGENCIES, COMPANIES, STARTUPS AND
									INDIVIDUALS TO CREATE A BLUEPRINT FOR THE
									<br />
									DIGITAL BUSINESS.
								</p>
							</Col>
						</Row>
					</div>
				</Col>
			</Row>
		</>
	);
}

export default HomePage;

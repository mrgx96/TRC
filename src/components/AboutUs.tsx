import style from './aboutus.module.css';
import imagePie from '../assets/svg/aboutus-pie.svg';

export default function AboutUs() {
  return (
    <section className={style.aboutus}>
      <h2>👑 Our goal is to make a single RICL token worth a million dollars by the end of 2025 👑</h2>
      <div className={style.imageMask}>
        <div className={style.image}></div>
      </div>
      <div className={style.description}>
        <ul>
          <li>
            There will only be 1000 tokens and 91% of them are gonna be released while the remaining 9% are gonna be
            used for marketing.
          </li>
        </ul>
        <img src={imagePie} className="center-block" alt="About Us" />
      </div>
    </section>
  );
}

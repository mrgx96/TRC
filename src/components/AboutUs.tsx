import style from './aboutus.module.css';

export default function AboutUs() {
  return (
    <section className={style.aboutus}>
      <h2>
        👑 Join the elite league of wealth with our exclusive meme coin designed for the financial aristocracy! 👑
      </h2>
      <div className={style.imageMask}>
        <div className={style.image}></div>
      </div>
      <img className="center-block" alt="About Us" />
    </section>
  );
}

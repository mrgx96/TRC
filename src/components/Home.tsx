import Navigation from './Navigation';
import style from './home.module.css';

export default function Home() {
  return (
    <section className={style.home}>
      <Navigation />
      <div className={style.welcome}>🚀💰 Welcome to the Rich Club Coin! 💰🚀</div>
    </section>
  );
}

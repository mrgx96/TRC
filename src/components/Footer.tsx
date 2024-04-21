import Navigation from './Navigation';
import style from './footer.module.css';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div></div>
      <section>
        <Navigation />
      </section>
    </footer>
  );
}

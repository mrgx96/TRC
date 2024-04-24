import Navigation from './Navigation';
import style from './footer.module.css';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div></div>
      <section>
        <div className={style.disclaimer}>
          $RICL is a meme-based cryptocurrency devoid of intrinsic value and not intended for investment purposes. It
          functions primarily as a community and cultural token, akin to $Pepe, offering no guarantees or utility,
          serving purely for entertainment.
        </div>
        <Navigation />
      </section>
    </footer>
  );
}

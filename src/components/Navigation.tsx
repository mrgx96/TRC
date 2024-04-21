import style from './navigation.module.css';
import telegram from '../assets/svg/telegram.svg';
import twitter from '../assets/svg/twitter.svg';

export default function Navigation() {
  return (
    <nav className={style.navigation}>
      <img className="logo" src="logo.png" alt="Logo" />
      <h1>The Rich Club</h1>
      <ul className={style.navItems}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Tokenomics</a>
        </li>
        <li>
          <a href="">Roadmap</a>
        </li>
      </ul>
      <ul className={style.navButtons}>
        <li>
          <a href="">
            <img src={telegram} alt="Telegram" title="Telegram" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={twitter} alt="Twitter" title="Twitter" />
          </a>
        </li>
        <li>
          <a href="" className={style.textButton}>
            Buy now
          </a>
        </li>
      </ul>
    </nav>
  );
}

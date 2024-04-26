import style from './navigation.module.css';
import telegram from '../assets/svg/telegram.svg';
import twitter from '../assets/svg/twitter.svg';

export default function Navigation() {
  const onMoveWindowScrollTo = (evt: React.MouseEvent, hash: string) => {
    evt.stopPropagation();
    evt.preventDefault();
    const element = document.getElementById(hash);
    if (history.pushState) {
      history.pushState(null, '', `#${hash}`);
    } else {
      window.location.hash = hash;
    }
    window.scrollTo({
      top: element?.offsetTop || 0,
      behavior: 'smooth',
    });
  };
  return (
    <nav className={style.navigation}>
      <img className="logo" src="logo.png" alt="Logo" />
      <strong>The Rich Club</strong>
      <ul className={style.navItems}>
        <li>
          <a href="#about-us" onClick={(evt) => onMoveWindowScrollTo(evt, 'about-us')}>
            Our Mission
          </a>
        </li>
        <li>
          <a href="#tokenomics" onClick={(evt) => onMoveWindowScrollTo(evt, 'tokenomics')}>
            Tokenomics
          </a>
        </li>
        <li>
          <a href="#roadmap" onClick={(evt) => onMoveWindowScrollTo(evt, 'roadmap')}>
            Why $RICL?
          </a>
        </li>
      </ul>
      <ul className={style.navButtons}>
        <li>
          <a href="https://t.me/therichclubcoin" target="_blank">
            <img src={telegram} alt="Telegram" title="Telegram" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/therichclubcoin" target="_blank">
            <img src={twitter} alt="Twitter" title="Twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=6fsy8LbeKmkBmoxjYvgmXrtVkhzUA6iGsR4T86MpzAiE&inputAmount=0&fixed=in"
            target="_blank"
            className={style.textButton}
          >
            Buy now
          </a>
        </li>
      </ul>
    </nav>
  );
}

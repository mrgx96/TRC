import style from './richclubcoin.module.css';

export default function RichClubCoin() {
  return (
    <div style={{ position: 'relative', marginTop: 100 }}>
      <section className={style.background}></section>
      <section className={style.section}>
        <div></div>
        <h2>Why choose Rich Club Coin?</h2>
        <div className={style.description}>
          <ul>
            <li>💎 Ultra-exclusive: Reserved only for those who breathe the rarefied air of affluence</li>
            <li>
              💎 Moonshot potential: Watch your wealth soar to astronomical heights with our revolutionary meme coin.
            </li>
            <li>💎 Decadent rewards: Enjoy lavish rewards and perks that only the rich deserve.</li>
          </ul>
          <ul>
            <li>💎 Luxury backed: Each coin is imbued with the essence of opulence, making it a symbol of prestige.</li>
            <li>
              💎 Elite community: Rub shoulders with the crème de la crème of the financial world in our members-only
              club.
            </li>
            <li>
              💰 Don't miss out on this once-in-a-lifetime opportunity to cement your status as a member of the Rich
              Club! 💰
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

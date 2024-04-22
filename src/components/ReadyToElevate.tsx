import Progress from './Progress';
import style from './readytoelevate.module.css';

export default function ReadyToElevate() {
  return (
    <section id="tokenomics" className={style.section}>
      <div>
        <div className={style.description}>
          <h2>Ready to Elevate Your Portfolio?" 💰🛍️</h2>
          <p>👑 Join the ranks of the financial elite with Rich Club Coin!</p>
          <p>
            🚀 Don't miss your chance to seize the ultimate symbol of wealth and exclusivity. Invest now and ascend to
            new heights of prosperity!
          </p>
          <p>💎 Secure your place among the affluent. Buy Rich Club Coin today!</p>
        </div>
        <div className={style.returnsCalculator}>
          <h3>Returns Calculator</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <strong>IF i Buy</strong>
          <div className={style.amount}>50</div>
          <Progress percent={50} />
          <div className={style.calcResult}>
            <strong>
              Your $The Rich Club<small>would be worth</small>
            </strong>
            <strong>$470</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

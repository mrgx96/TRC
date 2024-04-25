import { useRef, useState } from 'react';
import style from './readytoelevate.module.css';

export default function ReadyToElevate() {
  const [value, setValue] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const textRef = useRef<any>(null);
  return (
    <section className={style.section}>
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
          <p>Calculate how much your RICL tokens will be worth if you hold till the end of 2025</p>
          <strong>IF i Buy</strong>
          <div className={style.amount}>
            <input type="number" ref={textRef} onChange={() => setValue(textRef.current?.value || 0)} value={value} />
          </div>
          <div className={style.calcResult}>
            <strong>
              Your $RICL<small>would be worth</small>
            </strong>
            <strong>${value * 1_000_000}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

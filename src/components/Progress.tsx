import style from './progress.module.css';

interface IProgressProps {
  percent: number;
}

export default function Progress({ percent }: IProgressProps) {
  const safePercent = percent < 0 ? 0 : percent > 100 ? 100 : percent;
  return (
    <div className={style.progress}>
      <div style={{ width: `${safePercent}%` }}></div>
    </div>
  );
}

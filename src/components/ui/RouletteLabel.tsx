import { FC, ReactElement } from 'react';
import styles from './RouletteLabel.module.css';

const RouletteLabel: FC = (): ReactElement => (
  <p className={styles['roulette-label']}>
    <span className="bold">netflix</span>roulette
  </p>
);

export default RouletteLabel;

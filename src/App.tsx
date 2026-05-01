import { Header } from './components/Header/Header';
import { Ticker } from './components/Ticker/Ticker';
import { TICKER_LANE_LEFT, TICKER_LANE_RIGHT } from './data/ticker';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.canvas}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.ticker}>
        <Ticker laneLeft={TICKER_LANE_LEFT} laneRight={TICKER_LANE_RIGHT} />
      </div>
      {/* tabbar / content / chevron 은 후속 커밋에서 채움 */}
    </div>
  );
}

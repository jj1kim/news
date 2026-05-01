import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Ticker } from './components/Ticker/Ticker';
import { TabBar, type TabKey, type ViewerKey } from './components/TabBar/TabBar';
import { TICKER_LANE_LEFT, TICKER_LANE_RIGHT } from './data/ticker';
import styles from './App.module.css';

export function App() {
  const [tab, setTab] = useState<TabKey>('all');
  const [viewer, setViewer] = useState<ViewerKey>('grid');
  // Week 2의 구독 상태가 아직 없으므로 frame 01 화면을 재현하기 위해 임시로 8로 표시.
  const subCount = 8;

  return (
    <div className={styles.canvas}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.ticker}>
        <Ticker laneLeft={TICKER_LANE_LEFT} laneRight={TICKER_LANE_RIGHT} />
      </div>
      <div className={styles.tabbar}>
        <TabBar
          activeTab={tab}
          subCount={subCount}
          viewer={viewer}
          onTabChange={setTab}
          onViewerChange={setViewer}
        />
      </div>
      {/* content / chevron 은 후속 커밋에서 채움 */}
    </div>
  );
}

import { Header } from './components/Header/Header';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.canvas}>
      <div className={styles.header}>
        <Header />
      </div>
      {/* ticker / tabbar / content / chevron 은 후속 커밋에서 채움 */}
    </div>
  );
}

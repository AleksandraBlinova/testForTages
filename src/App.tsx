import React from "react";
import styles from "./App.module.css";
import ProductList from "./components/ProductList";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.app__breadcrumbs}>
        <span className={styles.breadcrumbs__item}>Главная</span>
        <span className={styles.breadcrumbs__separator}>/</span>
        <span className={styles.breadcrumbs__item}>Системы хранения</span>
        <span className={styles.breadcrumbs__separator}>/</span>
        <span className={styles.breadcrumbs__item__bold}>
          Комплекты стеллажных систем
        </span>
      </div>
      <div className={styles.app__title__container}>
        <h1 className={styles.app__title}>Комплекты стеллажных систем</h1>
      </div>

      <ProductList />
    </div>
  );
};

export default App;

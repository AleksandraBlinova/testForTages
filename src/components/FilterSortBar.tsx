import React from "react";
import styles from "../styles/FilterSortBar.module.css";

type FilterSortBarProps = {
  onSortChange: (sort: string) => void;
  onFilterChange: (filter: string) => void;
};

const FilterSortBar: React.FC<FilterSortBarProps> = ({
  onSortChange,
  onFilterChange,
}) => {
  return (
    <div className={styles["filter-sort-bar"]}>
      <div className={styles["filter-sort-bar-item-container"]}>
        <div className={styles["filter-sort-bar-item"]}>
          <label className={styles["filter-sort-bar-item-label"]}>
            Сортировать по:
          </label>
        </div>
        <div className={styles["filter-sort-bar-item"]}>
          {" "}
          <select
            onChange={(e) => onSortChange(e.target.value)}
            className={styles["filter-sort-bar__select__select"]}
          >
            <option
              className={styles["filter-sort-bar__select__option"]}
              value="asc"
            >
              Цена: по возрастанию
            </option>
            <option
              className={styles["filter-sort-bar__select__option"]}
              value="desc"
            >
              Цена: по убыванию
            </option>
          </select>
        </div>
      </div>
      <div className={styles["filter-sort-bar-item-container-2"]}>
        <div className={styles["filter-sort-bar-item"]}>
          {" "}
          <label className={styles["filter-sort-bar-item-label"]}>Металл</label>
        </div>
        <div className={styles["filter-sort-bar-item"]}>
          {" "}
          <select
            onChange={(e) => onFilterChange(e.target.value)}
            className={styles["filter-sort-bar__select__select"]}
          >
            <option
              className={styles["filter-sort-bar__select__option"]}
              value="all"
            >
              Все материалы
            </option>
            <option
              className={styles["filter-sort-bar__select__option"]}
              value="1"
            >
              Дерево
            </option>
            <option
              className={styles["filter-sort-bar__select__option"]}
              value="2"
            >
              Металл
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSortBar;

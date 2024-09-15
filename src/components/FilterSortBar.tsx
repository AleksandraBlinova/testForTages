import React from "react";
import "../styles/FilterSortBar.module.css";

type FilterSortBarProps = {
  onSortChange: (sort: string) => void;
  onFilterChange: (filter: string) => void;
};

const FilterSortBar: React.FC<FilterSortBarProps> = ({
  onSortChange,
  onFilterChange,
}) => {
  return (
    <div className="filter-sort-bar">
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="asc">Цена: по возрастанию</option>
        <option value="desc">Цена: по убыванию</option>
      </select>

      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="all">Все материалы</option>
        <option value="1">Дерево</option>
        <option value="2">Металл</option>
      </select>
    </div>
  );
};

export default FilterSortBar;

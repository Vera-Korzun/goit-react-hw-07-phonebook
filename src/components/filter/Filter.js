import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/actions/formActions";
import FornFilter from "./FilterStyled";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const onChangeFilter = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <FornFilter>
      <form className="filter-form">
        <label className="filter-form__title">
          Find contact by name
          <input
            className="filter-form__imput"
            type="text"
            name="filter"
            value={filter}
            onChange={onChangeFilter}
          />
        </label>
      </form>
    </FornFilter>
  );
};

export default Filter;

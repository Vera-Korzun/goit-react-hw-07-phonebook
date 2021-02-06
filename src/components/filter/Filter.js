import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/actions/formActions";
import { getFilter } from "../../redux/selectors/formSelectors";
import FormFilter from "./FilterStyled";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <FormFilter>
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
    </FormFilter>
  );
};

export default Filter;

import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };
  return (
    <div className={css.filter}>
      <p className={css.filterLabel}>Find Contacts by Name</p>
      <input
        type="text"
        name="filter"
        placeholder="Search by Name"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

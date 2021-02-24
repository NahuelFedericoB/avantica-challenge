import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import styles from './DropDown.module.scss';

const DropDown = ({ onChange, activeValue }) => {
  return (
    <select
      className={styles.dropDown}
      name="searchEngines"
      id="engines"
      onChange={onChange}
      value={activeValue}
    >
      <option value="google">Google</option>
      <option value="bing">Bing</option>
      <option value="both">Both</option>
    </select>
  );
};

DropDown.propTypes = {
  onChange: PropTypes.func,
  activeValue: PropTypes.string,
};

DropDown.defaultProps = {
  onChange: noop,
  activeValue: 'google',
};

export default DropDown;

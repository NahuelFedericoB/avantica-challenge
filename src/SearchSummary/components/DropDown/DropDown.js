import styles from './DropDown.module.scss';

const DropDown = () => {
  return (
    <select className={styles.dropDown} name="searchEngines" id="engines">
      <option value="google">Google</option>
      <option value="bing">Bing</option>
      <option value="both">Both</option>
    </select>
  );
};

export default DropDown;

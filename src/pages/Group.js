import styles from "./Group.module.css";

const Group = () => {
  return (
    <div className={styles.groupParent}>
      <img className={styles.groupChild} alt="" src="/group-2@2x.png" />
    </div>
  );
};

export default Group;

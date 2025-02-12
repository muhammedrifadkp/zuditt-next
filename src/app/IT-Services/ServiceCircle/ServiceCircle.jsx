import styles from './ServiceCircle.module.css';

const ServiceCircle = ({ name, position }) => {
  return (
    <div className={`${styles.circle} ${styles[position]}`}>
      {name}
    </div>
  );
};

export default ServiceCircle;
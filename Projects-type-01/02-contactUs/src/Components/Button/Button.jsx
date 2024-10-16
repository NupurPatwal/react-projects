import styles from "./Button.module.css";

// const Button = (props) => {
//   return (
//     // <button className={styles.primary_btn}>
//     <>
//       <div className={`${styles.primary_btn}`}>
//         {props.icon}
//         {props.text}
//       </div>
//     </>
//   );
// };
const Button = (props) => {
  if (!props.text && !props.icon) return null; // Prevent rendering empty buttons
  return (
    <button className={styles.primary_btn}>
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;

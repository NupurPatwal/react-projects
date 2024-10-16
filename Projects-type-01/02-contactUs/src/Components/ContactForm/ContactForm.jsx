import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <section className={`${styles.container}`}>
      ContactForm
      <div className={`${styles.form_section}`}> This is a form </div> {/* Remove invalid class */}
      <div className={`${styles.form_image}`}> thsi</div>
    </section>
  );
};

export default ContactForm;

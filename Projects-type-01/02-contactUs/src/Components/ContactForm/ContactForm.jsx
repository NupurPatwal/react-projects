import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdOutlineMessage } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { MdMail } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.form_section}`}>
        <div className={`${styles.top_button}`}>
          <Button
            text="VIA CHAT SUPPORT"
            icon={<MdOutlineMessage fontSize="24px" />}></Button>
          <Button
            text="VIA CALL"
            icon={<LuPhoneCall fontSize="24px" />}></Button>
        </div>

        <Button
          isOutline={true}
          text="VIA EMail form"
          icon={<MdMail fontSize="24px" />}></Button>
      </div>
      <div className={`${styles.form_image}`}> </div>
    </section>
  );
};

export default ContactForm;

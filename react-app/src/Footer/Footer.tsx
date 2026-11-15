import { ContactUs } from "./ContactUs";
import { Copyright } from "./Copyright";
import "./Footer.css";
import { LibraryHours } from "./LibraryHours";
import { Supplement } from "./Supplement";

const Footer = () => {
  return (
    <footer>
      <section className="footer-sections">
        <ContactUs />
        <LibraryHours />
      </section>
      <Supplement />
      <Copyright />
    </footer>
  );
};

export default Footer;

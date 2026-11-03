import "./QuickLinks.css";

export const QuickLinks = () => {
  return (
    <nav className="quick-links">
      <div className="quick-links-center">
        <ul className="quick-links">
          <li>
            <a href="/account">My Account</a>
          </li>
          <li>
            <a href="/catalog">Our Catalog</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

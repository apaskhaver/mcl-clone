import mclsLogo from "../assets/mcls-logo.png";
import "./Logo.css";

export const Logo = () => {
  return (
    <div>
      <img src={mclsLogo} aria-hidden="true" />
      <p>Mercer County Library System</p>
    </div>
  );
};

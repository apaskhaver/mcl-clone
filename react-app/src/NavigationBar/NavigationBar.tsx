import { QuickLinks } from "./QuickLinks";
import { Logo } from "./Logo";
import { DropdownMenuBar } from "./DropdownMenuBar";
import "./NavigationBar.css";

export const NavigationBar = () => {
  return (
    <div className="navbar">
      <QuickLinks />
      <Logo />
      <DropdownMenuBar />
    </div>
  );
};

import { useState, type JSX } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./SingleLevelDropdown.css";

interface SingleLevelDropdownMenuProps {
  buttonLabel: string;
  items: {
    title: string;
    url?: string;
    icon?: JSX.Element;
    action?: () => void;
  }[];
}

export const SingleLevelDropdownMenu = ({
  buttonLabel,
  items,
}: SingleLevelDropdownMenuProps) => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const handleToggle = () => {
    setisMenuOpen((prev) => !prev);
  };
  return (
    <div className="dropdown-menu">
      <button onClick={handleToggle}>
        {buttonLabel}
        {isMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isMenuOpen && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <a key={index} href={item.url}>
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

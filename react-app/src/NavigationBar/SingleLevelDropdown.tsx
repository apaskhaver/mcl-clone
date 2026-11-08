import { useState, type JSX } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./SingleLevelDropdown.css";

interface SingleLevelDropdownMenuProps {
  buttonLabel: string;
  openMenuId: string | null;
  setOpenMenuId: (id: string | null) => void;
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
  openMenuId,
  setOpenMenuId,
}: SingleLevelDropdownMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (buttonLabel: string) => {
    if (openMenuId === buttonLabel) {
      setIsMenuOpen((prev) => !prev);
    } else {
      setOpenMenuId(buttonLabel);
      setIsMenuOpen(true);
    }
  };

  return (
    <div className="dropdown-menu">
      <button onClick={() => toggleMenu(buttonLabel)}>
        {buttonLabel}
        {isMenuOpen && openMenuId === buttonLabel ? (
          <FaChevronUp />
        ) : (
          <FaChevronDown />
        )}
      </button>
      {isMenuOpen && openMenuId === buttonLabel && (
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

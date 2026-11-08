import { type JSX } from "react";
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
  const toggleMenu = (buttonLabel: string) => {
    if (openMenuId === buttonLabel) {
      setOpenMenuId(null);
    } else {
      setOpenMenuId(buttonLabel);
    }
  };

  return (
    <div className="dropdown-menu">
      <button onClick={() => toggleMenu(buttonLabel)}>
        {buttonLabel}
        {openMenuId === buttonLabel ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {openMenuId === buttonLabel && (
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

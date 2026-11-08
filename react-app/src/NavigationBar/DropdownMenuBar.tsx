import { useState } from "react";
import { SingleLevelDropdownMenu } from "./SingleLevelDropdown";
import { dropdownMenus } from "../constants";
import "./DropdownMenuBar.css";
import { Search } from "./Search";

export const DropdownMenuBar = () => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  return (
    <nav className="dropdown-menu-bar">
      {dropdownMenus.map((menu) => (
        <SingleLevelDropdownMenu
          openMenuId={openMenuId}
          setOpenMenuId={setOpenMenuId}
          buttonLabel={menu.title}
          items={[
            ...menu.dropdownOptions.map((option) => ({
              title: option.selection,
              url: option.url,
            })),
          ]}
        />
      ))}
      <Search />
    </nav>
  );
};

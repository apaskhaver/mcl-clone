import { SingleLevelDropdownMenu } from "./SingleLevelDropdown";
import { dropdownMenus } from "../constants";
import "./DropdownMenuBar.css";

export const DropdownMenuBar = () => {
  return (
    <div className="dropdown-menu-bar">
      {dropdownMenus.map((menu) => (
        <SingleLevelDropdownMenu
          buttonLabel={menu.title}
          items={[
            ...menu.dropdownOptions.map((option) => ({
              title: option.selection,
              url: option.url,
            })),
          ]}
        />
      ))}
    </div>
  );
};

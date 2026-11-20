import { useState } from "react";
import searchIcon from "../assets/search-icon.png";
import { RightArrow } from "../shared/RightArrow";
import "./SearchSection.css";
import { DownArrow } from "../shared/DownArrow";
import { SingleLevelDropdownMenu } from "../NavigationBar/SingleLevelDropdown";

const SearchSection = () => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [openSubMenuId, setOpenSubMenuId] = useState<string | null>(null);

  const handleMenuClick = (menuId: string) => {
    setOpenMenuId(openMenuId === menuId ? null : menuId);
  };

  return (
    <div>
      <section className="search-section">
        <span className="search-content">
          <img src={searchIcon} className="search-icon" alt="" />
          Search <a href="#">Go to page →</a>
        </span>
      </section>
      <section className="menu">
        <a onClick={() => handleMenuClick("All Content")}>
          {openMenuId === "All Content" ? <DownArrow /> : <RightArrow />} All
          Content
        </a>
        {openMenuId === "All Content" && (
          <div>
            <div className="search-dropdown-content">
              <SingleLevelDropdownMenu
                openMenuId={openSubMenuId}
                setOpenMenuId={setOpenSubMenuId}
                buttonLabel="Keyword"
                items={[
                  { title: "Keyword" },
                  { title: "Title" },
                  { title: "Author" },
                ]}
              />
            </div>
            <input
              value="Search books, articles, media and more..."
              name="search-input"
              id="search-input"
              type="text"
            />
            <button type="submit" className="search-button">
              Search
            </button>
            <input
              type="checkbox"
              id="search-checkbox"
              name="search-checkbox"
            />
            <label htmlFor="search-checkbox">Full Text + Print</label>
          </div>
        )}
        <a onClick={() => handleMenuClick("Search Classic Catalog")}>
          {openMenuId === "Search Classic Catalog" ? (
            <DownArrow />
          ) : (
            <RightArrow />
          )}
          Search Classic Catalog
        </a>

        <a onClick={() => handleMenuClick("Website")}>
          {openMenuId === "Website" ? <DownArrow /> : <RightArrow />} Website
        </a>
      </section>
    </div>
  );
};

export default SearchSection;

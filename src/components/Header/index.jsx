import style from "./header.module.css";
import { useImageFetch } from "../../assets/images/img";
import { useEffect, useState } from "react";


const Header = ({ setFilteredImages }) => {
  const images = useImageFetch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (images.length > 0) {
      const filtered = images.filter((item) =>
        item.user.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredImages(filtered);
    }
  }, [search, images]);

  return (
    <header className={style.headerContainer}>
      <h3>Photo Gallery</h3>
      <div className={style.searchBox}>
        <input
          className={style.searchInput}
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={style.searchBtn}>
          <img src="/icons/icons8-search-50.png" />
        </div>
      </div>
      {images.length > 0 && (
        <img src={images[0].webformatURL} alt="logo" className={style.logo} />
      )}
    </header>
  );
};

export default Header;

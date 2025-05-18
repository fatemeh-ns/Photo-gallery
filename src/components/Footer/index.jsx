import style from "./footer.module.css";
import { useImageFetch } from "../../assets/images/img";
const Footer = () => {
  const images = useImageFetch();
  return (
    <footer>
      <div className={style.footerLogo}>
        {images.length > 0 && (
          <img
            src={images[0].webformatURL}
            alt={images[0].tags}
            className={style.logo}
          />
        )}
      </div>
      <div className={style.footerSupport}>
        <p>Blogs</p>
        <p>Plans</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className={style.footerInfo}>
        <p>phone : 123654789</p>
        <div className={style.footerIcons}>
          <img className={style.footerIcon} src="/icons/icons8-facebook-50.png" alt="facebook" />
          <img className={style.footerIcon} src="/icons/icons8-instagram-48.png" alt="instagram" />
          <img className={style.footerIcon} src="/icons/icons8-x-50.png" alt="x" />
          <img className={style.footerIcon} src="/icons/icons8-youtube-50.png" alt="youtube" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

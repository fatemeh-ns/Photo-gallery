import style from "../Main/main.module.css";
const ImageBox = ({ imageUrl, imageTags, imageName, imageViews }) => {
  return (
    <>
      <img src={imageUrl} alt={imageTags} />
      <div className={style.imageTitle}>
        <p>User</p>
        <p>Views</p>
      </div>
      <div className={style.imgInfo}>
        <p>{imageName}</p>
        <p>{imageViews}</p>
      </div>
    </>
  );
};

export default ImageBox;

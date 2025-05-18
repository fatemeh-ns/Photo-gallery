import { useEffect, useRef } from "react";
import style from "./main.module.css";
import ImageBox from "../ImageBox/imageBox";

const Main = ({ filteredImages }) => {
  const boxRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(style.show);
          }
        });
      },
      { threshold: 0.1 }
    );

    boxRefs.current.forEach((box) => {
      if (box) observer.observe(box);
    });

    return () => {
      boxRefs.current.forEach((box) => {
        if (box) observer.unobserve(box);
      });
    };
  }, [filteredImages]);

  return (
    <main>
      <h2>photos :</h2>
      <div className={style.imgContainer}>
        {filteredImages.length > 0 ? (
          filteredImages.map((item, index) => (
            <div
              key={item.id}
              className={style.imgBox}
              ref={(el) => (boxRefs.current[index] = el)}
              onClick={() => handleClick(item.id)}
            >
              <ImageBox
                imageUrl={item.webformatURL}
                imageTags={item.tags}
                imageName={item.user}
                imageViews={item.views}
              />
            </div>
          ))
        ) : (
          <div className={style.emptyText}>
            <p>This username does not exist.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Main;

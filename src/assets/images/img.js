import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "49714405-98db987c700e962e9ba5590a0";

export const useImageFetch = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("https://pixabay.com/api/", {
          params: {
            key: API_KEY,
            image_type: "photo",
          },
        });
        setImages(response.data.hits);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return images;
};

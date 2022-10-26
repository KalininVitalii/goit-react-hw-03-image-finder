
import style from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, image, tags }) => {
  return (
    <li key={id}>
      <img
        className={style.image}
        src={image}
        alt={tags}
      />
    </li>
  );
};


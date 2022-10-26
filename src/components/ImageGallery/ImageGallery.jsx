import style from './ImageGallery.module.css';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'
export const ImageGallery = ({ gallery, onModalOpen }) => {
  return (
    <ul className={style.imageGallery} onClick={e => onModalOpen(e)}>
      {gallery.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          image={webformatURL}
          largeImage={largeImageURL}
        />
      ))}
    </ul>
  );
};

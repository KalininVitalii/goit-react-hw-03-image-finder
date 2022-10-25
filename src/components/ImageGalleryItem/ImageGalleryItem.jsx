
import style from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ gallery, onModalOpen }) => {
  return (
    <>
      {gallery.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <li onClick={()=>onModalOpen(largeImageURL,tags)} key={id}>
            <img
              className={style.image}
              src={webformatURL}
              alt={tags}
            />
          </li>
        );
      })}
    </>
  );
};
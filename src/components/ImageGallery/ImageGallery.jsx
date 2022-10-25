import style from './ImageGallery.module.css';

export const ImageGallery = ({ children }) => {
  return (
    <>
      <ul className={style.imageGallery}>
      {children}
      </ul>
    </>
  );
};
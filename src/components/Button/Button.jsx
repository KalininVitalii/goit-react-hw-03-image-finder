import style from './Button.module.css';

export const Button = ({ loadMore }) => {
  return(
    <>
    <button className={style.button} onClick={loadMore} type="button">Load more</button>
    </>
  )
}
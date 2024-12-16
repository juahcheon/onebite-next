import { ReviewData } from '../types';
import ReviewItemDeleteButton from './review-item-delete-button';
import style from './review-item.module.css'

export default function ReviewItem({
  id,
  content,
  author,
  createdAt,
  bookId,
}: ReviewData) {
  return (
  <div className={style.container}>
    <div className={style.author}>{author}</div>
    <div className={style.content}>{content}</div>
    <div className={style.bottom_container}>
      <div className={style.date}>{new Date(createdAt).toLocaleDateString()}</div>
      <div className={style.delete_btn}>
        <ReviewItemDeleteButton reviewId={id} bookId={bookId} />
      </div>
    </div>
  </div>
  )
}
import style from './Comment.module.sass';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { RatingStars } from '../RatingStars/RatingStars';
import { Avatar } from '../../User/Avatar/Avatar';
import { Name } from '../../User/Name/Name';
import type { Photo } from '../../../types/Photo.types';

export const Comment = ({ avatar, name, rating, date, comment, gallery }: { avatar: string, name: string, rating: number, date: Date, comment: string, gallery: Photo[] }) => {
  rating = Number(rating.toFixed(1));

  const dateStr = new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit', month: 'long', year: 'numeric',
  });

  return (
    <div className={style.comment}>
      <div className={ style.avatar }>
        <Avatar src={avatar}></Avatar>
      </div>
      <div className={ style.body }>
        <div className={ style.header }>
          <Name name={name}></Name>
          <time className={ style.date } dateTime={ new Date(date).toISOString() }>
            {dateStr}
          </time>
        </div>

        <RatingStars rating={4}></RatingStars>
        <div className={ style.text }>{comment}</div>

        {gallery?.length > 0 && (
          <Gallery withCaption>
            <div className={style.gallery}>
              {gallery.map((p, i) => (
                <Item
                  key={i}
                  original={p.src}
                  thumbnail={p.thumb ?? p.src}
                  width={p.w}
                  height={p.h}
                  caption={p.alt}
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref as any}
                      onClick={open}
                      src={p.thumb ?? p.src}
                      alt={p.alt ?? ''}
                      className={style.thumb}
                      loading="lazy"
                    />
                  )}
                </Item>
              ))}
            </div>
          </Gallery>
        )}
      </div>
    </div>
  );
};
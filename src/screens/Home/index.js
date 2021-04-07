/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
import React, {useEffect} from 'react';
import ReactHtmlParser from 'react-html-parser'; 
import { useDispatch, useSelector } from 'react-redux';
import { getPhotosSaga } from '../../actions';

const Home = () => {
  const dispatch = useDispatch();

  const photos = useSelector(({ photosReducer }) => photosReducer?.photos);

  useEffect(() => {
    dispatch(getPhotosSaga({ tags: '' }));
  }, []);

  return (
    <section className='cards'>
      {photos?.items?.length > 0
        && (
        <>
        {photos.items.map(({
          link,
          media,
          title,
          description,
          author,
          author_id,
          tags
        }, i) => (
          <div  key={`photo-${i}`} className='card'>
            <img  alt='' src={`${media.m})`}/>
            <div className='card-content'>
              <h2><a href={link} target='blank'>{ title.length > 10 ? `${title.slice(0, 10)}...`: title}</a> by <a href={`https://www.flickr.com/photos/${author_id}/`} target='blank'>{author.replace('nobody@flickr.com ("', '').slice(0, -2)}</a></h2>
              <p>{ReactHtmlParser(description.replace(/<img[^>]*>/g,"")) }</p>
              <p>{tags.split(" ").map(tag => `#${tag}`).join(" ")}</p>
            </div>
          </div>
        ))}
      </>
      )}
    </section>
  );
};

export default Home;

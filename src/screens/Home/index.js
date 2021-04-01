import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { getPhotosSaga } from '../../actions';

const Home = () => {
  const dispatch = useDispatch();

  const photos = useSelector(({ photosReducer }) => photosReducer?.photos);

  useEffect(() => {
    dispatch(getPhotosSaga({tags:''}));
  }, []);

  return (
    <div className='container'>
      {photos?.items?.length > 0
        && (
        <>
         {photos.items.map(({
          media,
          title,
          description

        }, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Card className='item' key={`photo-${i}`}>
          <img alt={description} className='image' src={`${media.m}`} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{title?.length ? title : 'Unknown'}</Card.Header>  
          </Card.Content>
        </Card>
        ))}
      </>
      ) 
      }
    </div>
  );
};

export default Home;

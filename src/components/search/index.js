import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPhotosSaga } from '../../actions';

const Search = () => {
    const [tags, setTags] = useState('');
    const dispatch = useDispatch();

    const onChangeInput = ({target}) => {
      setTags(target.value);
    };

    const onSubmit = () => {
     dispatch(getPhotosSaga({ tags }));
    };

 return (
  <div
   className='search'
  >
    <input
     placeholder="Looking for a cute pets ..."
     value={tags}
     type='text'
     onChange={onChangeInput}
    />
   <button className='btn' onClick={onSubmit} type="button"><i aria-hidden="true" className="search icon" /></button>
  </div>
 );
};

export default Search;
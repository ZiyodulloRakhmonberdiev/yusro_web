import React from 'react';
import './postTags.css';
import Loader from './../../ui/Loader';
import BlogArticle from '../../service/blog';
import useFetch from '../../hooks/useFetch';
import { v4 as uuidv4 } from 'uuid';

function PostTags() {
  const { data, loading, error } = useFetch(BlogArticle.fetchArticleTag);
  return (
    <div className='post-tags'>
      <div className="title">Teglar</div>
      <div className="items">
        {loading ? (
          <Loader />
        ) : error ? (
          <span>{error.message}</span>
        ) : data.results ? (
          data.results?.map(item => (
            <span className="item" key={uuidv4()}>
              {item.name}
            </span>
          ))
        ) : (
          <span>Ma'lumot mavjud emas</span>
        )}
      </div>
    </div>
  );
}

export default PostTags;

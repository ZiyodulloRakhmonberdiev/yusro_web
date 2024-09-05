import React, { useEffect } from 'react';
import './postTags.css';
import Loader from './../../ui/Loader';
import { useDispatch } from 'react-redux';
import { fetchArticlesByCategory } from '../../features/alice/articlesSlice';
import BlogArticle from '../../service/blog';
import useFetch from '../../hooks/useFetch';
import useQueryParams from './../../hooks/useQueryParams';
import { v4 as uuidv4 } from 'uuid';

function PostTags() {
  const { data, loading, error } = useFetch(BlogArticle.fetchArticleTag);
  const dispatch = useDispatch();
  const { params, updateQueryParams } = useQueryParams();

  const handleTagClick = (tagId) => {
    updateQueryParams({ tag_id: tagId});
  };

  useEffect(() => {
    if (params.tag_id) {
      dispatch(fetchArticlesByCategory({ tag_id: params.tag_id }));
    }
  }, [dispatch, params.tag_id]);

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
            <button className="item" key={uuidv4()} onClick={() => handleTagClick(item.id)}>
              {item.name}
            </button>
          ))
        ) : (
          <span>Ma'lumot mavjud emas</span>
        )}
      </div>
    </div>
  );
}

export default PostTags;

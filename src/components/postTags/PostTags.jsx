import React, { useEffect } from 'react';
import './postTags.css';
import Loader from './../../ui/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../../features/alice/articlesSlice';
import BlogArticle from '../../service/blog';
import useFetch from '../../hooks/useFetch';
import useQueryParams from './../../hooks/useQueryParams';

function PostTags() {
  const { data: articleTag, loading, error } = useFetch(BlogArticle.fetchArticleTag);
  const dispatch = useDispatch();
  const { params, updateQueryParams } = useQueryParams();

  const handleTagClick = (tagId) => {
    updateQueryParams({ tag_id: tagId});
  };

  useEffect(() => {
    if (params.tag_id) {
      dispatch(fetchArticles({ tag_id: params.tag_id }));
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
        ) : articleTag ? (
          articleTag.map(item => (
            <div className="item" key={item.id} onClick={() => handleTagClick(item.id)}>
              {item.name}
            </div>
          ))
        ) : (
          <span>Ma'lumot mavjud emas</span>
        )}
      </div>
    </div>
  );
}

export default PostTags;

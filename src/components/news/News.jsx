import './news.css';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Title from './../../ui/Title';
import Loader from './../../ui/Loader';
import NotAvailable from './../../helpers/NotAvailable';
import ArticleList from '../articleList/ArticleList';
import { fetchArticlesByCategory } from '../../features/alice/articlesSlice'; // Updated import

// import images
import kabah from "../../icons/kabah_outline.png";

function News() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, status, error } = useSelector(state => state.articles);

  useEffect(() => {
    dispatch(fetchArticlesByCategory({ page: 1, pageSize: 10, categoryId: null })); // Updated dispatch
  }, [dispatch]);

  const latestArticles = data ? data.slice(0, 3) : [];

  return (
    <div className='news'>
      <div className="container">
        <Title
          img={kabah}
          title="So'ngi yangiliklar va kerakli maslahatlar"
          description="Haqiqiy manbalardan olingan eng so'ngi xabar va yangiliklar"
        />
        <div className="news-wrapper">
          {status === 'loading' ? (
            <Loader />
          ) : status === 'failed' ? (
            <NotAvailable name={error} />
          ) : (
            <ArticleList articles={latestArticles} />
          )}
        </div>
        <button onClick={() => navigate('/blog')}>Ko'proq o'qish</button>
      </div>
    </div>
  );
}

export default News;

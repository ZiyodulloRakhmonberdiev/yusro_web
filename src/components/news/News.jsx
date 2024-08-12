import './news.css';
import images from './../../images/index';
import Title from './../../ui/Title';
import Loader from './../../ui/Loader';
import NotAvailable from './../../helpers/NotAvailable';
import ArticleList from '../articleList/ArticleList';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../../features/alice/articlesSlice';
import { useEffect } from 'react';

function News() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, status, error } = useSelector(state => state.articles);

  useEffect(() => {
    dispatch(fetchArticles({ page: 1, pageSize: 10, categoryId: null }));
  }, [dispatch]);

  const latestArticles = data ? data.slice(0, 3) : [];

  return (
    <div className='news'>
      <div className="container">
        <Title
          img={images.kabah}
          title="So'ngi yangiliklar va maslahatlar"
          description="Haqiqiy manbalardan olingan eng yangi postlari va so'ngi yangiliklar"
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

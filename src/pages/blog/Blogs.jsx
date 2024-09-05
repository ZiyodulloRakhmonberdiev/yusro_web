import './blog.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from './../../ui/Loader';
import ArticleList from './../../components/articleList/ArticleList';
import PopularPosts from './../../components/popularPosts/PopularPosts';
import AnswerToQuestions from './../../components/answerToQuestions/AnswerToQuestions';
import PostSection from './../../components/postSection/PostSection';
import PostTags from './../../components/postTags/PostTags';
import ExtraPagesHeader from './../../components/extraPagesHeader/ExtraPagesHeader';
import Pagination from './../../helpers/Pagination';
import { fetchArticlesByCategory } from './../../features/alice/articlesSlice';
import NotAvailable from './../../helpers/NotAvailable';
import useQueryParams from '../../hooks/useQueryParams';

const Blog = () => {
  const dispatch = useDispatch();
  const { data, status, error, pagination } = useSelector(state => state.articles);
  const { params } = useQueryParams();
  const { page } = params;

  // Fetch latest posts on mount or page change
  useEffect(() => {
    dispatch(fetchArticlesByCategory({ page, pageSize: 10, categoryId: null }));
  }, [dispatch, page]);

  const handlePageChange = (newPage) => {
    dispatch(fetchArticlesByCategory({ page: newPage, pageSize: 10, categoryId: null }));
  };

  const pageCount = Math.ceil(pagination?.total / 10) || 1;

  return (
    <div className='blog'>
      <ExtraPagesHeader title="Maqolalar" />
      <div className="container">
        {status === 'loading' ? <Loader /> : status === 'failed' ? <NotAvailable name={error} /> : (
          <div className='posts'>
            {data.length > 0 ? (
              <div className="blog-pagination">
                <ArticleList articles={data} />
                <Pagination
                  currentPage={page}
                  pageCount={pageCount}
                  onPageChange={handlePageChange}
                />
              </div>
            ) : (
              <NotAvailable name="Ma'lumot mavjud emas" />
            )}
          </div>
        )}
        <div className="blog-tags">
          <PopularPosts />
          <AnswerToQuestions />
          <PostSection />
          <PostTags />
        </div>
      </div>
    </div>
  );
};

export default Blog;

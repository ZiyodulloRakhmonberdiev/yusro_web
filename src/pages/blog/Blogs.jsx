import './blog.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useQueryParams from './../../hooks/useQueryParams';
import Loader from './../../ui/Loader';
import ArticleList from './../../components/articleList/ArticleList';
import PopularPosts from './../../components/popularPosts/PopularPosts';
import AnswerToQuestions from './../../components/answerToQuestions/AnswerToQuestions';
import PostSection from './../../components/postSection/PostSection';
import PostTags from './../../components/postTags/PostTags';
import ExtraPagesHeader from './../../components/extraPagesHeader/ExtraPagesHeader';
import Pagination from './../../helpers/Pagination';
import { fetchArticles } from './../../features/alice/articlesSlice';
import NotAvailable from './../../helpers/NotAvailable';

const Blog = () => {
  const { params, updateQueryParams } = useQueryParams();
  const { page, pageSize, categoryId } = params;

  const dispatch = useDispatch();
  const { data, status, error } = useSelector(state => state.articles);

  console.log(data);

  useEffect(() => {
    dispatch(fetchArticles({ page, pageSize, categoryId }));
  }, [dispatch, page, pageSize, categoryId]);

  const handlePageChange = (newPage) => {
    updateQueryParams({ page: newPage, page_size: pageSize, category_id: categoryId });
  };

  const pageCount = data.length > 0 ? Math.ceil((data.length / pageSize) + 1) : 1;


  return (
    <div className='blog'>
      <ExtraPagesHeader title="Maqolalar" />
      <div className="container">
        {status === 'loading' ? <Loader /> : status === 'failed' ? <NotAvailable name={error} /> : (
          <>
            {!data ? <NotAvailable name="Ma'lumot mavjud emas" /> : <div className="blog-pagination">
              <ArticleList articles={data} />
              <Pagination
                currentPage={page}
                pageCount={pageCount}
                onPageChange={handlePageChange}
              />
            </div>}
          </>
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

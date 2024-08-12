import { useDispatch, useSelector } from 'react-redux'
import ExtraPagesHeader from '../../components/extraPagesHeader/ExtraPagesHeader'
import './videoContent.css'
import { useLocation } from 'react-router-dom'

import { fetchArticles } from '../../features/alice/articlesSlice'
import { useEffect } from 'react'
import useQueryParams from '../../hooks/useQueryParams'
import NotAvailable from '../../helpers/NotAvailable'
import Loader from '../../ui/Loader'
import ArticleList from '../../components/articleList/ArticleList'
import PopularPosts from '../../components/popularPosts/PopularPosts'
import AnswerToQuestions from '../../components/answerToQuestions/AnswerToQuestions'
import PostSection from '../../components/postSection/PostSection'
import PostTags from '../../components/postTags/PostTags'
import Pagination from './../../helpers/Pagination';

function VideoContent({ videos }) {
  const dispatch = useDispatch()
  const location = useLocation()

  const { params, updateQueryParams } = useQueryParams();
  const { page, pageSize, categoryId } = params;

  useEffect(() => {
    dispatch(fetchArticles({ page, pageSize, categoryId }))
  }, [dispatch, page, pageSize, categoryId])

  const handlePageChange = (newPage) => {
    updateQueryParams({ page: newPage, page_size: pageSize, category_id: categoryId });
  };

  const { data, status, error } = useSelector(state => state.articles)

  const videoArticles = data.filter(article => article.video_url !== null && article.video_url !== undefined);


  const pageCount = videoArticles.length > 0 ? Math.ceil((videoArticles.length / pageSize)) : 1;



  return (
    <div className='video-content blog'>
      <ExtraPagesHeader title="Video Kontent" />
      <div className="container">
        {status === 'loading' ? <Loader /> : status === 'failed' ? <NotAvailable name={error} /> : (
          <>
            {videoArticles ? <div className="blog-pagination">
              <ArticleList articles={videoArticles} />
              <Pagination
                currentPage={page}
                pageCount={pageCount}
                onPageChange={handlePageChange}
              />
            </div> : !videoArticles && <NotAvailable name="Ma'lumot mavjud emas" />}
          </>
        )}
        <div className="blog-tags">
          <PopularPosts />
          <AnswerToQuestions />
        </div>
      </div>
    </div>
  )
}

export default VideoContent
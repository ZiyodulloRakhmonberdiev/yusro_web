import { useDispatch, useSelector } from 'react-redux'
import ExtraPagesHeader from '../../components/extraPagesHeader/ExtraPagesHeader'
import './videoContent.css'
import { useLocation } from 'react-router-dom'

// import { fetchArticles } from '../../features/alice/articlesSlice'
import { fetchVideos } from '../../features/alice/videosSlice'
import { useEffect } from 'react'
import useQueryParams from '../../hooks/useQueryParams'
import NotAvailable from '../../helpers/NotAvailable'
import Loader from '../../ui/Loader'
// import ArticleList from '../../components/articleList/ArticleList'
// import PopularPosts from '../../components/popularPosts/PopularPosts'
import AnswerToQuestions from '../../components/answerToQuestions/AnswerToQuestions'
import PostSection from '../../components/postSection/PostSection'
// import PostTags from '../../components/postTags/PostTags'
import Pagination from './../../helpers/Pagination';
import VideoList from '../../components/videoList/VideoList'

function VideoContent({ videos }) {
  const dispatch = useDispatch()
  const location = useLocation()

  const { params, updateQueryParams } = useQueryParams();
  const { page, pageSize, categoryId } = params;

  useEffect(() => {
    dispatch(fetchVideos({ page, pageSize, categoryId }))
  }, [dispatch, page, pageSize, categoryId])

  const handlePageChange = (newPage) => {
    updateQueryParams({ page: newPage, page_size: pageSize, category_id: categoryId });
  };

  const { data, status, error } = useSelector(state => state.videos)
  console.log(data);
  

//   const videosList = data.filter(article => article.video !== null && article.video !== undefined);
// console.log(videosList);


  const pageCount = data.length > 0 ? Math.ceil((data.length / pageSize)) : 1;

  return (
    <div className='video-content blog'>
      <ExtraPagesHeader title="Media" />
      <div className="container">
        {status === 'loading' ? <Loader /> : status === 'failed' ? <NotAvailable name={error} /> : (
          <div className='articles'>
            {data ? <div className="blog-pagination">
              <VideoList videos={data} className="article-list" />
              <Pagination
                currentPage={page}
                pageCount={pageCount}
                onPageChange={handlePageChange}
              />
            </div> : <span>mana</span>
            }
          </div>
        )} 
        <div className="blog-tags">
          {/* <PopularPosts /> */}
          <AnswerToQuestions />
        </div>
      </div>
    </div>
  )
}

export default VideoContent
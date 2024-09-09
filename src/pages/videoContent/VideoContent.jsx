import './videoContent.css';
import { useEffect, useState } from 'react';

import axios from 'axios';
import Loader from './../../ui/Loader';
import VideoList from './../../components/videoList/VideoList';
import PopularPosts from './../../components/popularPosts/PopularPosts';
import AnswerToQuestions from './../../components/answerToQuestions/AnswerToQuestions';
// import VideoSection from './../../components/videoSection/VideoSection';
import ExtraPagesHeader from './../../components/extraPagesHeader/ExtraPagesHeader';
import Pagination from './../../helpers/Pagination';
import NotAvailable from './../../helpers/NotAvailable';
import useQueryParams from '../../hooks/useQueryParams';

const VideoContent = () => {
  const { params, updateQueryParams } = useQueryParams();
  const { page = 1, pageSize = 10, categoryId } = params;
  
  const [videos, setVideos] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVideos = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const data = response.data;
      setVideos(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
    } catch (err) {
      setError("Xatolik yuz berdi! Iltimos, keyinroq tashrif buyuring");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const url = categoryId
      ? `https://api.yusro-tour.uz/main/video/by-category/${categoryId}/?page=${page}&page_size=${pageSize}`
      : `https://api.yusro-tour.uz/main/video/?page=${page}&page_size=${pageSize}`;
    fetchVideos(url);
  }, [page, pageSize, categoryId]);

  const handleNextPage = () => {
    if (nextPage) {
      const nextPageNumber = new URL(nextPage).searchParams.get('page');
      updateQueryParams({ page: nextPageNumber });
    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      const prevPageNumber = new URL(prevPage).searchParams.get('page');
      updateQueryParams({ page: prevPageNumber });
    }
  };

  const handleCategorySelect = (selectedCategoryId) => {
    updateQueryParams({ page: 1, page_size: pageSize, categoryId: selectedCategoryId });
  };
  return (
    <div className='video-content blog'>
      <ExtraPagesHeader title="Media" />
      <div className="container">
        {loading ? (
          <Loader />
        ) : error ? (
          <NotAvailable name={error} />
        ) : (
          <div className='videos'>
            {videos.length > 0 ? (
              <div className="blog-pagination">
                <VideoList videos={videos} className="video-list" />
                <Pagination
                  previous={prevPage}
                  next={nextPage}
                  onPrevious={handlePrevPage}
                  onNext={handleNextPage}
                />
              </div>
            ) : (
              <NotAvailable name="Videolar topilmadi!" />
            )}
          </div>
        )}
        <div className="blog-tags">
          <PopularPosts />
          <AnswerToQuestions />
          {/* <VideoSection onCategorySelect={handleCategorySelect} /> */}
        </div>
      </div>
    </div>
  );
};

export default VideoContent;

import './postSection.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticlesByCategory } from '../../features/alice/articlesSlice';
import useFetch from './../../hooks/useFetch';
import BlogArticle from '../../service/blog';
import Loader from '../../ui/Loader';
import NotAvailable from './../../helpers/NotAvailable';

function PostSection() {
    const { data: sections, loading, error } = useFetch(BlogArticle.fetchArticleSection);
    const dispatch = useDispatch();

    const handleCategorySelect = (categoryId) => {
        dispatch(fetchArticlesByCategory({ page: 1, pageSize: 10, categoryId }));
    };

    return (
        <div className='post-section'>
            <div className="title">Bo'limlar</div>
            <div className="items">
                {loading ? (
                    <Loader />
                ) : error ? (
                    <span>{error.message}</span>
                ) : sections ? (
                    sections?.results?.map(item => (
                        <div key={item.id} className="item" onClick={() => handleCategorySelect(item.id)}>
                            <div className="name">
                                <i className="fa-solid fa-arrow-right"></i>
                                <span>{item.name}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Ma'lumot mavjud emas</p>
                )}
            </div>
        </div>
    );
}

export default PostSection;

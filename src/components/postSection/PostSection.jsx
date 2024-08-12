import './postSection.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../../features/alice/articlesSlice';
import useFetch from './../../hooks/useFetch';
import BlogArticle from '../../service/blog';
import Loader from '../../ui/Loader';
import useQueryParams from './../../hooks/useQueryParams';

function PostSection() {
    const { data: sections, loading, error } = useFetch(BlogArticle.fetchArticleSection);
    const dispatch = useDispatch();

    const { params, updateQueryParams } = useQueryParams();

    const handleCategorySelect = (categoryId) => {
        updateQueryParams({ category_id: categoryId, page: 1 });
    };

    useEffect(() => {
        dispatch(fetchArticles({ page: params.page, pageSize: params.pageSize, categoryId: params.categoryId }));
    }, [dispatch, params]);

    return (
        <div className='post-section'>
            <div className="title">Bo'limlar</div>
            <div className="items">
                {loading ? (
                    <Loader />
                ) : error ? (
                    <span>{error.message}</span>
                ) : sections ? (
                    sections.map(item => (
                        <div key={item.id} className="item" onClick={() => handleCategorySelect(item.id)}>
                            <div className="name">
                                <i className="fa-solid fa-arrow-right"></i>
                                <span>{item.title}</span>
                            </div>
                            <span className="count">{item.articles_amount}</span>
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

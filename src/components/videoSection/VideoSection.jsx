import './videoSection.css';
import useFetch from '../../hooks/useFetch';
import VideoArticle from '../../service/blog';
import Loader from '../../ui/Loader';

function VideoSection({ onCategorySelect }) {
    const { data: sections, loading, error } = useFetch(VideoArticle.fetchVideoSection);
    const handleCategorySelect = (categoryId) => {
        if (onCategorySelect) {
            onCategorySelect(categoryId);
        }
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
                    sections.results.map(item => (
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

export default VideoSection;

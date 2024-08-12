// src/components/ArticleList.js

import './articleList.css';
import { Link } from 'react-router-dom';
import { formatDate } from './../../utils/formatDate';
import NotAvailable from '../../helpers/NotAvailable';

const truncateDescription = (description, limit) => {
  const words = description.split(' ');
  if (words.length > limit) {
    return words.slice(0, limit).join(' ') + '...';
  }
  return description;
};

const ArticleList = ({ articles }) => {
  return (
    <div className='article-lists'>
      <div className="items">
        {articles.length > 0 ? articles.map(article => {
          return (
            <div className="item" key={article.id}>
              <div className="header-image">
                {article.video_url ? (
                  <iframe src={article.video_url} title="Umra ziyorati: ko‘zga ko‘rinmaydigan jihatlar haqida 10 ta maslahat" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                ) : (
                  <img src={article.image_path} alt="" />
                )}
              </div>
              <div className="header-title">
                <div className="tags">
                  <i className="fa-solid fa-tag"></i>
                  {article.tags && article.tags.map(tag => <span key={tag.id}>{tag.name}</span>)}
                </div>
                <div className="author"><i className="fa-solid fa-user"></i><span>{article.author}</span></div>
                <div className="comments"><i className="fa-regular fa-comment"></i><span>{article.comments.length}</span></div>
                <div className="views"><i className="fa-solid fa-eye"></i><span>{article.views}</span></div>
              </div>
              <div className="info">
                <div className="title">{article.title}</div>
                <div className="description">{truncateDescription(article.description, 50)}</div>
                <Link to={`/article/${article.id}`}>To'liq maqolani o'qish <i className="fa-solid fa-arrow-right"></i></Link>
                <span className="created-date">{formatDate(article.created_at)}</span>
              </div>
            </div>
          );
        }) : <NotAvailable name="Ma'lumot mavjud emas" />}
      </div>
    </div>
  );
};

export default ArticleList;

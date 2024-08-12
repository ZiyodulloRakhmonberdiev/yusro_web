import './readArticle.css'
import { Link, useParams } from 'react-router-dom'
import AnswerToQuestions from './../answerToQuestions/AnswerToQuestions';
import BlogArticle from './../../service/blog';
import ExtraPagesHeader from './../extraPagesHeader/ExtraPagesHeader';
import useFetch from './../../hooks/useFetch';
import { formatDate } from '../../utils/formatDate';
import PopularPosts from '../popularPosts/PopularPosts';
import { useState } from 'react';
import Comments from '../comments/Comments';
import CommentPost from '../commentPost/CommentPost';


function ReadArticle() {
    const { id } = useParams()
    const { data: article, loading, error } = useFetch(() => BlogArticle.readArticle(id));
    console.log(article);

    const [copied, setCopied] = useState(false);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => console.error('Failed to copy the URL: ', err));
    };

    return (
        <div className='read-article blog'>
            <ExtraPagesHeader title={article.title} />
            <div className="container">
                <div className="article-info">
                    <div className="item" key={article.id}>
                        <div className="header-image">
                            {article.video_url ? (
                                <iframe
                                    src={article.video_url}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <img src={article.image_path} alt="" />
                            )}
                            <span className="created-date">{formatDate(article.created_at)}</span>
                        </div>
                        <div className="header-title">
                            <div className="tags">
                                <i className="fa-solid fa-tag"></i>
                                {article.tags && article.tags.map(tag => <span key={tag.id}>{tag.name}</span>)}
                            </div>
                            <div className="author"><i className="fa-solid fa-user"></i><span>{article.author}</span></div>
                            <div className="comments"><i className="fa-regular fa-comment"></i><span>{article.comments && article.comments.length}</span></div>
                            <div className="views"><i className="fa-solid fa-eye"></i><span>{article.views}</span></div>
                        </div>
                        <div className="info">
                            <div className="title">{article.title}</div>
                            <div className="intro-text">
                                <i className="fa-solid fa-quote-right"></i>
                                <p>{article.intro_text}</p>
                                <span>Yusro Tour</span>
                            </div>
                            <div className="description">{article.description}</div>
                        </div>
                        <div className="extra-info">
                            <div>
                                <span>Teglar:</span> {article.tags && article.tags.map(tag => <span key={tag.id}>{tag.name}</span>)}
                            </div>
                            <p onClick={handleCopyLink}>
                                <span>Bu postni ulashish</span>
                                <i className="fa-solid fa-link"></i>
                                {copied && <p className='copied'>Nusxalandi</p>}
                            </p>
                        </div>
                        <Comments articleComments={article.comments && article.comments} loading={loading} error={error} />
                        <CommentPost id={id}/>
                    </div>
                </div>
                <div className="blog-tags">
                    <PopularPosts />
                    <AnswerToQuestions />
                </div>
            </div>
        </div>
    )
}

export default ReadArticle
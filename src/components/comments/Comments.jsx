import './Comment.css'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import BlogArticle from '../../service/blog'
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../ui/Loader'
import NotAvailable from '../../helpers/NotAvailable'
import { formatDate } from '../../utils/formatDate'
import axios from 'axios'

function Comments({postId}) {
  const main_url = "http://95.46.96.78:7777/api/v1"
  // const { id } = useParams()
  // const dispatch = useDispatch();

  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`${main_url}/main/comments/by-post/${postId}/`)
      .then((response) => {
        setComments(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(comments);
  
  
  return (
    <div className='article-comments'>
      <div className="title">Izohlar ({comments && comments.results?.length})</div>
      <div className="items">
        {/* {loading ? <Loader /> : error ? <NotAvailable name={error.message} /> : comments.map(comment => { */}
        { comments.results?.map(comment => {
          return (
            <div className="item" key={comment.id}> 
              <div className="name">
                {comment.full_name}
                <div className="created-at">
                  <span>{formatDate(comment.created_at)}</span>
                </div>
              </div>
              <div className="description">
                {comment.text}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Comments
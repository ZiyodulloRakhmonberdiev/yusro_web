import { useParams } from 'react-router-dom'
import './Comment.css'
import useFetch from '../../hooks/useFetch'
import BlogArticle from '../../service/blog'
import Loader from '../../ui/Loader'
import NotAvailable from '../../helpers/NotAvailable'
import { formatDate } from '../../utils/formatDate'

function Comments({ articleComments, loading, error }) {

  const { id } = useParams()

  return (
    <div className='article-comments'>
      <div className="title">Izohlar ({articleComments && articleComments.length})</div>
      <div className="items">
        {loading ? <Loader /> : error ? <NotAvailable name={error.message} /> : articleComments.map(comment => {
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
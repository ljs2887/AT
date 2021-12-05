import React, { useState, useEffect, useCallback } from 'react';
import { suggestionsCommentOnePost } from '../api'
import SuggestionsCommentEdit from './SuggestionsCommentEdit.jsx';

function SuggestionsCommentContents(props) {
  const [comment, setComment] = useState([])
  const [update, setUpdate] = useState(false)

  const commentPost = useCallback(
    async () => {
      try {
        const { data } = await suggestionsCommentOnePost(props.underId)
        setComment([...data])
      } catch (error) {
        console.error(error);
      }
    }, [props.underId],
  )

  const commentUpdate = useCallback(() => {
    setUpdate(prev => !prev)
  }, [])

  useEffect(() => {
    commentPost()
  }, [commentPost, update])

  return (
    <>
        {
          comment.map((a) => (
            <div key={a._id}>
              <div className="suggestionscontent_reply">
                <div className="suggestionscontent_reply_arrow"></div>
                <div className="suggestionscontent_reply_info">
                  <div className="suggestionscontent_reply_ate">
                    { a.user }님 
                  </div>
                  <div className="suggestionscontent_reply_content">
                  { a.content }
                  </div>
                  날짜 { a.date }
                </div>
              </div>
              
              <SuggestionsCommentEdit suggestionsId={a._id} commentUpdate={commentUpdate}/>
            </div>
          ))
        }
    </>
  )
}

export default SuggestionsCommentContents

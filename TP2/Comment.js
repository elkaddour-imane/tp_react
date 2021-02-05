
  import like from './icons/hand-thumbs-up.svg';
  import dislike from './icons/hand-thumbs-down.svg';
  import {COMMENT_TYPE,LIKE_TYPE,DISLIKE_TYPE} from './reactions_consts';
  function Comment({id,user,likes,dislikes,content,handleReaction,poster_id,handleDelete})
  {    const handleReaction_=(e,callback,TYPE)=>{
     e.preventDefault();
    let id=e.currentTarget.getAttribute('id');
      callback(id,COMMENT_TYPE,TYPE)
     }
     const deleteComment=()=>{handleDelete(poster_id+'_'+id,COMMENT_TYPE)}
      return (<div className="comments_body">
        <div className='comment_'>         
        <div className='content'>
        <h4> {user}  <span onClick={deleteComment} className='delete'> delete comment </span></h4>
       <div  className='text' dangerouslySetInnerHTML={{__html:content}}/>
        </div>
        <div className='actions'> 
                      <a href='' onClick={(e)=>{handleReaction_(e,handleReaction,LIKE_TYPE)}} id={poster_id+'_'+id}><img src={like}/> {likes}</a>
                      <a id={poster_id+'_'+id} href='' onClick={(e)=>{handleReaction_(e,handleReaction,DISLIKE_TYPE)}}><img src={dislike}/>  {dislikes}</a>
         </div>
        </div>
        
        </div>
      )
  }
  export default Comment;
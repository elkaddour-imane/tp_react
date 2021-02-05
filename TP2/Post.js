
  import like from './icons/hand-thumbs-up.svg';
import dislike from './icons/hand-thumbs-down.svg';
import Comment from './Comment';
import {POST_TYPE,LIKE_TYPE,DISLIKE_TYPE,COMMENT_FORM_TYPE} from './reactions_consts'
import {useState} from'react';

function Post({id,user,likes,dislikes,content,comments,handleReaction,handleSubmit,handleDelete})
{   const [username,setUsername]=useState('');
    const [text,setText]=useState('');
    const changeText = e=> setText(e.target.value)
    const changeUsername = e=> setUsername(e.target.value)
    const submitForm=(e,callback) =>{
                                  e.preventDefault();
                                  setText('');
                                  setUsername('');
                                  callback(username,text,COMMENT_FORM_TYPE,id);
                                  }
    const handleReaction_=(e,callback,TYPE)=>{
                                e.preventDefault();
                               
                                let id=e.currentTarget.getAttribute('id');
                                  callback(id,POST_TYPE,TYPE)
                                           }
   const show_comments=()=>{
                        if(!comments?.length) return <div  className='text' dangerouslySetInnerHTML={{__html:'<div class="no_comment"><p>no comments yet!</p></div>'}}/>
                        return comments.map(comment=>{
                                  let {id:_id,user,likes,dislikes,content}=comment;
                                    return  <Comment user={user} likes={likes} dislikes={dislikes} content={content} id={_id} poster_id={id}
                                                                       handleReaction={handleReaction}
                                                                       handleDelete={handleDelete}
                                                                       />
                                           })
                                }
    const deletePost=()=>{
          handleDelete(id,POST_TYPE)
          
    }                            
    return (
        <div className="post" Key={id}>
      
          
        <div className='content'>
          <h4> {user}   <span onClick={deletePost} className='delete'> delete post </span></h4>
          <div  className='text' dangerouslySetInnerHTML={{__html:content}}/>
                        <div className='actions'> 
                        <a href='' onClick={(e)=>{handleReaction_(e,handleReaction,LIKE_TYPE)}} id={id} ><img src={like}/> {likes}</a>
                        <a href='' onClick={(e)=>{handleReaction_(e,handleReaction,DISLIKE_TYPE)}} id={id} ><img src={dislike}/>  {dislikes}</a> 
                        </div>
            </div>    
        
        <div className='comments_container'>
                  
                  {show_comments()}
                  </div>
                  <div className="form">
                                <form onSubmit={e=>{submitForm(e,handleSubmit)}}>
                                <div><input type="text" placeholder="utilisateur" className="inputs" onChange={changeUsername} value={username}/> </div>
                                <div><textarea className="inputs" onChange={changeText} value={text}/> </div>
                                <div><input type="submit" className="submit_btn" value="+ ajouter ce commentaire"/> </div>
                              </form>
                            </div>         
          
      </div>
    )
}
export default Post;
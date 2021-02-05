/*const temp_posts=[{id:1,user:'some One',likes:1,dislikes:0,
content:'Lorem ipsum dolor sit amet, <b>consecteturadipiscing elit</b>.Integer eget fringilla justo,\
 at posueremauris. Donec egestas pharetra aliquam. Nullam vehicula metusnisl, vel ullamcorper libero varius vel. Integer bibendumplacerat congue.'},
 {id:2,user:'john doe',likes:5,dislikes:2,
content:'Lorem ipsum dolor sit amet, <b>consecteturadipiscing elit</b>.Integer eget fringilla justo,\
 at posueremauris. Donec egestas pharetra aliquam. Nullam vehicula metusnisl, vel ullamcorper libero varius vel. Integer bibendumplacerat congue.'
,comments:[{id: 1,
  user: 'John Doe',
  content: 'lorem ipsum',
  likes: 0,
  dislikes: 0}]
},
 {id:3,user:'Marie One',likes:1,dislikes:1,
content:'Lorem ipsum dolor sit amet, <b>consecteturadipiscing elit</b>.Integer eget fringilla justo,\
 at posueremauris. Donec egestas pharetra aliquam. Nullam vehicula metusnisl, vel ullamcorper libero varius vel. Integer bibendumplacerat congue.',
 comments:[{id: 1,
  user: 'John Doe',
  content: 'lorem ipsum',
  likes: 0,
  dislikes: 0},
  {id: 1,
    user: 'John Doe',
    content: 'lorem ipsum22',
    likes: 1,
    dislikes: 0}
]
 }
]
localStorage.setItem("posts_",temp_posts)*/
import './App.css';
import Post from './Post';
import {useState,useEffect} from 'react';
import data_ from './posts.json';
import {COMMENT_TYPE,POST_TYPE,POST_FORM_TYPE,COMMENT_FORM_TYPE} from './reactions_consts';
function App() {
  const save =(posts_)=>localStorage.setItem('posts_',JSON.stringify(posts_))
  const [posts,setPosts]=useState([]);
  const [postreactionHistory,setPostreactionHistory]=useState();
  const [username,setUsername]=useState('');
    const [text,setText]=useState('');
    const changeText = e=> setText(e.target.value)
    const changeUsername = e=> setUsername(e.target.value)
  const handleReaction = (id,TYPE,REACTION)=>{                    
                        //let id=e.currentTarget.getAttribute('id')
                        let posts_=posts.slice();
                            if(TYPE===COMMENT_TYPE)
                                                    { let [poster_id,_id]=id.split('_')
                                                    let index=posts_.findIndex(post=>post.id==poster_id);
                                                    let comments=posts_[index].comments;
                                                    let comment_index=comments.findIndex(comm=>comm.id==_id)
                                                    posts_[index].comments[comment_index][REACTION]++;
                                                    }
                        else if ( TYPE===POST_TYPE) {let index=posts_.findIndex(post=>post.id==id);
                                                     posts_[index][REACTION]++;   
                                                     }
                        //save();
                        setPosts(posts_);
                        //save(posts_);
                       }
  const handleDelete=(_id,TYPE)=>{
    const posts_=posts.slice();
    if(TYPE===POST_TYPE) setPosts(posts_.filter(post=>post.id!==_id))
    if(TYPE===COMMENT_TYPE){
      let [poster_id,__id]=_id.split('_')
      let index=posts_.findIndex(post=>post.id==poster_id);
      //let comments=posts_[index].comments.filter(comment=>comment.id!==__id);
      posts_[index].comments=posts_[index].comments.filter(comment=>comment.id!==+__id);
      //console.log(posts_[index].comments.filter(comment=>comment.id!==+__id),__id)
      setPosts(posts_)
      //let comment_index=comments.findIndex(comm=>comm.id==_id)  
    }
    //save();
  }                    
  const handleSubmit=(username,content,FORM_TYPE,id)=>{
                           if(username==='' || content==='') return
                         let posts_=posts.slice();
                         let new_post={id:Date.now(),
                                      user:username,likes:0,
                                      content:content,
                                      dislikes:0,comments:[]}
                        if(FORM_TYPE===POST_FORM_TYPE) posts_=[new_post,...posts_]
                        else if (FORM_TYPE === COMMENT_FORM_TYPE)   {
                                                                  let index=posts_.findIndex(post=>post.id==id);
                                                                  posts_[index]={...posts_[index],comments:[new_post,...(posts_[index].comments || '')] }
                                                                  posts_.push(new_post)
                                                                   }         
                         //save();
                        setPosts(posts_)

                      }                     
  useEffect(()=>{let data=localStorage.getItem('posts_')
          setPosts(data!==undefined && JSON.parse(data) || data_)
         //localStorage.setItem('posts_',JSON.stringify(JSON.parse(data).slice(0,1))) //delete posts       
            }
  ,[])

  const show_posts=()=>posts.map(post=>{
                      let {id,user,likes,dislikes,content,comments}=post;
                      return <Post id={id} user={user} 
                      handleReaction={handleReaction}
                      handleDelete={handleDelete}
                      likes={likes} dislikes={dislikes} content={content} comments={comments} handleSubmit={handleSubmit}/>
                                 })
                       return (
                              <div className='body'>  
                              <div className="form">
                                <form onSubmit={e=>{e.preventDefault();handleSubmit(username,text,POST_FORM_TYPE);setUsername('');setText('')}}>
                                <div><input type="text" placeholder="utilisateur" className="inputs" onChange={changeUsername} value={username}/> </div>
                                <div><textarea className="inputs" onChange={changeText} value={text}/> </div>
                                <div><input type="submit" className="submit_btn" value="+ ajouter ce post"/> </div>
                              </form>
                            </div>                     
                                {show_posts()}      
                              </div>
                              );
}

export default App;

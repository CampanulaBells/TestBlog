import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
function Article() {
  const params = useParams();
  let [content, setContent] = useState("Loading content...")
  let path_text = `https://raw.githubusercontent.com/CampanulaBells/TestBlog/main/public/blogs/articles/${params.article_name}.md`
  fetch(path_text,{
    headers : { 
      'Content-Type': 'application/text',
      'Accept': 'application/text'
     }
  })
  .then(res=>res.text())
  .then(text=>setContent(text))
  .catch(error=>console.log(error))

  return (
    <div>
      <h1>{params.article_name}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Article;
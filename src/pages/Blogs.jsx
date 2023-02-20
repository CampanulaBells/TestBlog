import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Blogs() {
  let navigate = useNavigate()
  let [articles, setArticles] = useState([])
  let index_json = "https://raw.githubusercontent.com/CampanulaBells/TestBlog/main/public/blogs/index.json"
  fetch(index_json,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
  }).then((res)=>{
    return res.json()
  }).then(js=>setArticles(js["articles"])
  )

  let article_list = articles.map(obj=>(
    <div>
      <div onClick={()=>navigate(`/blogs/${obj.reference}`)}>{obj.title}</div>
      <div>
        <span>{obj.date}</span> | <span>{obj.tags.map(tag=><span> {tag}</span>)}</span>
      </div>
    </div>
  ))

  return (
    <div>
      {article_list}
    </div>
  );
}

export default Blogs;
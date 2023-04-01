import { React, useState, useEffect, useParams } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { nanoid } from "nanoid";



function MainPage() {
  const [data, setData] = useState('')
  let url = 'http://localhost:7070/posts'
  const fetchApi = () => fetch(url);
  useEffect(() => {
    fetchApi().then((result) => result.json()).then((result) => {
      setData(result)
  })

  }, [])

  const dataArr = Object.entries(data);
  // console.log(dataArr)
  return (
    <>
    <div className="fieldCreateTitle">
      <Link to="/posts/new"><div className="btnCreateTitle"><span>Создать пост</span></div></Link>
    </div>
    <ul className="list-post">
      {dataArr.map((item) => (
        <li className="post" key={nanoid()}>
          <div className="name-user">Пользователь</div>
          <div className="content">{item[1].content}</div>
          <hr />
            <div className="like-comment">
              <div className="like">Нравится</div>
              <div className="comment">Комментировать</div>
            </div>
          <hr />
          <div className="input">
          <input type="text" className="input-field" placeholder="Напишите комментарий" disabled></input>
          </div>
        </li>
      ))}
    </ul>
    </>
  );
}

export default MainPage;
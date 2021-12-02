import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { actGetListPostsASync } from './store/action';

function App() {

  const dispatch = useDispatch();

  const posts = useSelector(state => state.listBlogs)

  console.log(posts);
  useEffect(() => {
    dispatch(actGetListPostsASync({
      pagesize: 6,
      currPage: 1
      
    }));
  }, [])

  return (
    <div className="App">
      <div className="container pt-5">
        {/* <button onClick={handleClick}>Gọi API để lấy dữ liệu về</button> */}
        <div className="row">
          {
            posts.map(dataItem => {
              return (
                <div className="col-4" key={dataItem.PID}>
                  <div className="card" style={{ width: '18rem' }}>
                    <img src={ dataItem.url_image } className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{ dataItem.fullname }</h5>
                      <p className="card-text">{ dataItem.post_content }</p>
                      <a href={`/post/` + dataItem.PID} className="btn btn-primary">Read more</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;

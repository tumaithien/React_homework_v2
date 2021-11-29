import { useDispatch } from 'react-redux'
import { actGetListPostsASync } from './store/action';

function App() {

  const dispatch = useDispatch();

  function handleClick(){
    dispatch(actGetListPostsASync())
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Gọi API để lấy dữ liệu về</button>
    </div>
  );
}

export default App;

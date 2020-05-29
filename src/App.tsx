import React from 'react';
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <span>ㅇㅇ</span>
      <div>
        <Link to="/about">about 페이지로 (redux hook)</Link>
      </div>
      <div>
        <Link to="/about/redux-saga-exam">redux-saga-exam</Link>
      </div>
    </>
  );
}

export default App;
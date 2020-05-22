import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { increment, decrement, changeCounter } from '../store/counter/action';

function About() {
  const count = useSelector((state: RootState) => state.counter.counter);
  const dispatch = useDispatch();

  const [isShow, setShow] = useState(false);
  const [counter, setCounter] = useState(count);

  const onIncrement = () => {
    dispatch(increment());
  }

  const onDecrement = () => {
    dispatch(decrement());
  }

  const setCount = () => {
    dispatch(changeCounter(counter));
  }

  return (
    <div>
      About 페이지 입니다.
      <button onClick={() => setShow(!isShow)}>보여라</button>
      <br/>
      {count}
      {isShow &&
        <span>보인다</span>
      }
      <input
        type="button"
        onClick={onIncrement}
        value="카운터 +"
      />
      <input
        type="button"
        onClick={onDecrement}
        value="카운터 -"
      />
      <input
        type="number"
        value={counter}
        onChange={e => setCounter(parseInt(e.currentTarget.value))}
      />
      <input 
        type="button"
        onClick={setCount}
      />
    </div>
  )
}

export default About;
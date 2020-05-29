import React, { useState } from 'react';
import { AccountSiginType } from '../store/account/types';
import { useDispatch } from 'react-redux';
import { signIn } from '../store/account/action'

function ReduxSagaExam() {
  // const count = useSelector((state: RootState) => state.counter.counter);
  const dispatch = useDispatch();
  const [siginInAccount] = useState<AccountSiginType>({
    id: 'id1',
    pwd: 'pwd1'
  });

  const onSiginIn = () => {
    dispatch(signIn(siginInAccount));
  };

  return (
    <div>
      리덕스사가11
      <div>
        <input type="text" readOnly value={siginInAccount.id} />아이디
        <input type="text" readOnly value={siginInAccount.pwd} />비밀번호
        <button onClick={onSiginIn}>로그인</button>
      </div>
    </div>
  )
}

export default ReduxSagaExam;
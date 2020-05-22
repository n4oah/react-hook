import React from 'react';
import Child from './Child'

function Parent() {
  return (
    <div>
      <span>부모 컴포넌트</span>
      <span>부모 컴포넌트</span>
      <span>부모 컴포넌트</span>
      <Child></Child>
    </div>
  );
}

export default Parent;
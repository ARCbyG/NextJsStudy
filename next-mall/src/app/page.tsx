'use client'
import { Button } from '@/common/button';
import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  // 초기값 설정
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);


  // count 변경
  function handleTest() {
    setY(y + 1)
  }

  
    // count 변경
    function handleCountChange(addCount: number) {
      setX(x + addCount)
  }

  // // x 변경
  // useEffect(() => {
  //   if (x > 10 || x < -10) {
  //     setX(0)
  //   }
  //   else {
  //     // console.log(x)
  //     console.log(x, 'x');
  //   }
  // }, [x])

  return (
    <main className={styles.main}>
      <div>
        Count: {x}
      </div>
      <div>
        Count: {y}
      </div>
      <div>
        <button onClick={(e) => handleTest()}>테스트</button>
      </div>
      <div>
        {/* <Button target={1} name="증가"></Button> */}
        <Button onClick={() => handleCountChange(1)} label="증가" />
        <Button onClick={() => handleCountChange(-1)} label="감소" />
        <button style={{margin: '5px'}} onClick={() => handleCountChange(1)}>증가</button>
        <button style={{margin: '5px'}} onClick={() => handleCountChange(-1)}>감소</button>
      </div>
    </main>
  )
}

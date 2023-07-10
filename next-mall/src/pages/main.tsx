import Image from 'next/image'
import styles from '../app/page.module.css'
import { Button } from '@/common/button';
import { useState } from 'react';

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
        {/* <button style={{margin: '5px'}} onClick={() => handleCountChange(1)}>증가</button> */}
        {/* <button style={{margin: '5px'}} onClick={() => handleCountChange(-1)}>감소</button> */}
      </div>


      <div className={styles.description}>
        <p>
          ARCbyG
        </p>
        <p>한글 지원
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}

'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  // 초기값 설정
  const [x, setX] = useState(0);


  // count 변경
  function handleCountChange(addCount: number) {
    setX(x + addCount)
  }

  // x 변경
  useEffect(() => {
    if (x > 10 || x < -10) {
      setX(0)
    }
    else {
      console.log(x)
    }
  })


  // const [person, setPerson] = useState({
  //   firstName: 'Barbara',
  //   lastName: 'Hepworth',
  //   email: 'bhepworth@sculpture.com'
  // });

  // function handleFirstNameChange(e: any) {
  //   setPerson({
  //     ...person,
  //     firstName: e.target.value
  //   });
  // }

  // function handleLastNameChange(e: any) {
  //   setPerson({
  //     ...person,
  //     lastName: e.target.value
  //   });
  // }

  // function handleEmailChange(e: any) {
  //   setPerson({
  //     ...person,
  //     email: e.target.value
  //   });
  // }

  return (
    <main className={styles.main}>
      <div>
        Count: {x}
      </div>
      <div>
        <button onClick={(e) => handleCountChange(1)}>증가</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={(e) => handleCountChange(-1)}>감소</button>
      </div>


      {/*       
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>

      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p> */}
    </main>
  )
}

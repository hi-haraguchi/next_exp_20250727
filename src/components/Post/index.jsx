import React from 'react'
import styles from "@/components/Post/style.module.scss"
import { Button } from '@mui/material'
// import styles from ".style.module.scss"


const Post = ({ content, createdAt, author }) => {
  return (
    <div className={styles.post}>
      {/*  */}
      <p>{new Date(createdAt).toLocaleString()}</p>
      <p>{content}</p>
      <p>{author.username}</p>

    {/* scssはサスと呼ぶ、使い方の練習 */}
    {/* <p className={styles.link}>{link}</p> */}

    </div>
  )
}

export default Post
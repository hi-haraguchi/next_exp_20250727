import React from 'react'
import styles from "@/components/Post/style.module.scss"
import { Button } from '@mui/material'
// import styles from ".style.module.scss"


const Post = ({name,date,content,link }) => {
  return (
    <div className={styles.post}>

    <p>{name}</p>
    <p>{date}</p>
    <p>{content}</p>

    {/* scssはサスと呼ぶ、使い方の練習 */}
    <p className={styles.link}>{link}</p>

    </div>
  )
}

export default Post
import React from 'react'
import styles from "@/components/Login/style.module.scss"
// import styles from ".style.module.scss"
import LoginIcon from '@mui/icons-material/Login';


const Login = () => {
  return (
    <div className={styles.form}>

      <h3 className={styles.form__title}>ログイン</h3>

      <div className={styles.form__item}>
        <label htmlFor="">メールアドレス</label>
        <input type="text" placeholder="メールアドレスを入力してください" />
      </div>

      <div className={styles.form__item}>
        <label htmlFor="">パスワード</label>
        <input type="text" placeholder="パスワードを入力してください" />
      </div>

        <button className={styles.form__btn}>
        <LoginIcon sx={{ color: "#90EE90" }}/>
        ログイン</button>


    </div>
  )
}

export default Login
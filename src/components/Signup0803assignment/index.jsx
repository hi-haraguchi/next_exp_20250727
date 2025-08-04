import React from 'react'
import styles from "@/components/Signup0803assignment/style.module.scss"
// import styles from ".style.module.scss"
import LoginIcon from '@mui/icons-material/Login';
import { useForm } from "react-hook-form";


const Signup0803assignment = () => {

  const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm({mode: "onBlur"});
  
    const onSubmit = (data) => {
      console.log(data);
    };


  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

      <h3 className={styles.form__title}>アカウントを作成</h3>

      <div className={styles.form__item}>
        <label htmlFor="">お名前</label>
        <input type="text" id='name' placeholder="お名前を入力してください" 
        {...register("name", 
          {required: "お名前は必須です",
            minLength: {value: 4, message: "お名前は4文字以上で入力してください。" }
          })}
        />
      </div>

      <div className={styles.form__item}>
        <label htmlFor="">メールアドレス</label>
        <input type="email" id='email' placeholder="メールアドレスを入力してください" 
        {...register("email", {required: "メールアドレスは必須です"})}
        />
      </div>      

      <div className={styles.form__item}>
        <label htmlFor="">パスワード</label>
        <input type="text" id='password' placeholder="パスワードを入力してください" 
        {...register("password", 
          {required: "パスワードは必須です",
            minLength: {value: 8, message: "パスワードは８文字以上で入力してください。" }
          })}
        />
      </div>

        <button className={styles.form__btn}>
        <LoginIcon sx={{ color: "#90EE90" }}/>
        登録</button>

      {errors.name?.message && <p>{errors.name.message}</p>}
      {errors.email?.message && <p>{errors.email.message}</p>}
      {errors.password?.message && <p>{errors.password.message}</p>}


    </form>
  )
}

export default Signup0803assignment
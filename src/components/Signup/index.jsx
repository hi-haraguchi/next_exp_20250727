import React, { useState } from "react";
import styles from "@/components/Signup/style.module.scss";
// import styles from ".style.module.scss"
import LoginIcon from "@mui/icons-material/Login";
import apiClient from "@/lib/apiClient";
import { useRouter } from "next/navigation";

const Signup = () => {
  // 画面遷移をさせるためuseRouterを使えるように
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 登録処理🤗
  const handleSignUp = async () => {
    try {
      await apiClient.post("/api/auth/register", {
        username,
        email, //useStateで保持しているか、react-hook-formで保持しているかどちらかになります🤗
        password,
      });

      // 登録成功後画面をログイン画面に飛ばす
      setTimeout(() => {
        // router.push("/");
        router.push("/login");
      }, 2000);
      // 2秒後に画面遷移をして、ログインページへ飛ばす
    } catch (error) {
      console.log("新規登録エラー:", error); //デベロッパーツールのコンソールにエラーを表示しています🤗
    }
    // この下は消さない
  };

  return (
    <div className={styles.form}>
      <h3 className={styles.form__title}>アカウントを作成</h3>

      <div className={styles.form__item}>
        <label htmlFor="">お名前</label>
        <input
          type="text"
          placeholder="お名前を入力してください"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className={styles.form__item}>
        <label htmlFor="">メールアドレス</label>
        <input
          type="text"
          placeholder="メールアドレスを入力してください"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={styles.form__item}>
        <label htmlFor="">パスワード</label>
        <input
          type="text"
          placeholder="パスワードを入力してください"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={handleSignUp} className={styles.form__btn}>
        <LoginIcon sx={{ color: "#90EE90" }} />
        登録
      </button>
    </div>
  );
};

export default Signup;

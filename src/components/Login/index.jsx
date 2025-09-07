import React, { useState } from "react";
import styles from "@/components/Login/style.module.scss";
// import styles from ".style.module.scss"
import LoginIcon from "@mui/icons-material/Login";
import apiClient from "@/lib/apiClient";
import { useRouter } from "next/navigation";

const Login = () => {
  // 画面遷移をさせるためuseRouterを使えるように
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 送信処理
  const handleLogin = async () => {
    try {
      // api/auth/loginは、エンドポイント
      const response = await apiClient.post("/api/auth/login", {
        email,
        // useStateで保持しているか、react-hook-formで保持しているかどちらか
        password,
      });

      // jwt トークンを localStrageに保存(トークンというのは乗車チケットだと思ってください🤗)
      localStorage.setItem("token", response.data.token);
      // ログイン成功後（つまり乗車券が発行されたらページを移動させる🤗）
      router.push("/");
    } catch (error) {
      console.log(error);
      alert("入力内容が正しくないため、ログインできません");
    }
  };

  return (
    <div className={styles.form}>
      <h3 className={styles.form__title}>ログイン</h3>

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

      <button onClick={handleLogin} className={styles.form__btn}>
        <LoginIcon sx={{ color: "#90EE90" }} />
        ログイン
      </button>
    </div>
  );
};

export default Login;

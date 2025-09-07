import React,{useState, useEffect} from 'react'
import styles from "@/components/Header/style.module.scss"
// import styles from ".style.module.scss"
import Link from 'next/link'
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { useRouter } from 'next/navigation';

const Header = () => {

  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter()

  useEffect(()=>{
    const token = localStorage.getItem("token")
    setIsAuth(!!token)
    // !!tokenは、値を明示的にboolean型(true false)に変換するテクニック
    // tokenがあればtrue なければfalse
  },[])

  const logout = () => {
    // ログイン成功時の乗車券（トークン）を削除します🤗
    localStorage.removeItem("token");
    setIsAuth(false);
    router.push("/login");
  };

  return (
    <div className={styles.header}>
      {/*  */}
      <ul>
        <li>
          {isAuth ? ( //trueの時は乗車券（トークン）を持っている時=ログイン成功している🤗
            <div onClick={logout}>
              <AccessibilityIcon />
              ログアウト
            </div>
          ) : (
            <Link href="/login">
              <AccessibilityIcon />
              ログイン
            </Link>
          )}
        </li>
        <li>
          <Link href="/signup">
            <AirplanemodeActiveIcon />
            登録
          </Link>
        </li>
      </ul>
      {/*  */}
    </div>
  );
};

export default Header;
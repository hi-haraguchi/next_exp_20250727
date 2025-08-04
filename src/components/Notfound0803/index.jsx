import React from "react";
import styles from "@/components/Notfound0803/style.module.scss";
import Link from "next/link";

const Notfound0803 = () => {
  return (
    <div className={styles.Notfound0803}>
      <h1>404 - ページが見つかりません</h1>
      <p>お探しのページは存在しないか、移動された可能性があります。</p>
      <Link href="/">
        ホームに戻る
      </Link>
    </div>
  );
};

export default Notfound0803;

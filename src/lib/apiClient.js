import axios from "axios";

const apiClient = axios.create({
  // ポイント！NEXT_PUBLIC_API_BASEURLは最後にvercel側で設定します🤗
//   8888はバックエンドで作るAPIのUPL、このNext.jsにはないので注意
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL || "http://localhost:8888",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
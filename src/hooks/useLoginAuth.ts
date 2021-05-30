/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "../hooks/useLoginUser";
export const useLoginAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();
  const login = useCallback(
    (userId: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10;
            setLoginUser({ ...res.data, isAdmin });
            history.push("/home");
            showMessage({
              title: "ログインしました",
              status: "success"
            });
          } else {
            setLoading(false);
            showMessage({
              title: "ユーザーが見つかりません",
              status: "error"
            });
          }
        })
        .catch(() => {
          setLoading(false);
          showMessage({
            title: "ユーザーが見つかりません",
            status: "error"
          });
        });
    },
    [history]
  );
  return { login, loading };
};

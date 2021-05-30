/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useCallback } from "react";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res) {
          setUsers(res.data);
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
  }, []);

  return { getUsers, users, loading };
};

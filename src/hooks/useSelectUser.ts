/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const { showMessage } = useMessage();
  type Props = {
    users: Array<User>;
    id: number;
    onOpen: () => void;
  };
  const selectUser = useCallback((props: Props) => {
    const { users, id, onOpen } = props;

    const targetUser = users.find((user) => user.id === id);
    if (targetUser) {
      setSelectedUser(targetUser);
      onOpen();
    } else {
      showMessage({ title: "ユーザーが見つかりません", status: "error" });
    }
  }, []);
  return { selectUser, selectedUser };
};

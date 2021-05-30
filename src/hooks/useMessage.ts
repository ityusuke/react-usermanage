import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";
export const useMessage = () => {
  const toast = useToast();
  type Props = {
    title: string;
    status: "info" | "warning" | "success" | "error";
  };
  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props;
      toast({
        position: "top",
        duration: 2000,
        isClosable: true,
        title,
        status
      });
    },
    [toast]
  );
  return { showMessage };
};

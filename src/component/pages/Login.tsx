import { Divider, Stack, Input, Heading, Box, Flex } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { VFC, memo, useState, ChangeEvent } from "react";
import { useLoginAuth } from "../../hooks/useLoginAuth";

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState("");
  const { login, loading } = useLoginAuth();
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);
  const onClickLogin = () => {
    console.log(userId);
    login(userId);
  };
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={4} my={4} px={10}>
          <Input placeholser="ユーザーID" onChange={onChangeUserId} />
          <PrimaryButton
            disabled={userId === "" || loading}
            onClick={onClickLogin}
            loading={loading}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});

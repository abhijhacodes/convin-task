import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, STATUSES } from "../redux/features/usersSlice";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Box, Container, Text, Stack, Link, Heading } from "@chakra-ui/react";
import { ConvinLogo } from "../components/ConvinLogo";
import { UsersData } from "../components/UsersData";

export default function Home() {
  const dispatch = useDispatch();
  const { data: users, status } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (status === STATUSES.LOADING) {
    return <LoadingSpinner />;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <>
      <Box
        height="100vh"
        width="100vw"
        bgGradient="linear(to-b, #2827CC, #0D0D0D)"
      >
        <Container maxW={"4xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              fontWeight={600}
              color="#9AE6B4"
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              <Link href="https://convin.ai/" isExternal>
                <ConvinLogo /> convin.ai{" "}
              </Link>
              <Text
                fontWeight={600}
                as={"span"}
                lineHeight={"110%"}
                color={"white"}
                fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              >
                Frontend task
              </Text>
              <br />
              <Text
                as={"span"}
                color={"blue.200"}
                fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
              >
                Click on a button to see user info
              </Text>
            </Heading>
            {users ? <UsersData users={users} /> : <LoadingSpinner />}
            <Text
              position="absolute"
              bottom="5"
              alignSelf="center"
              color="white"
            >
              Built by{" "}
              <Link
                href="https://abhijha.live/"
                isExternal
                color="#9AE6B4"
                fontSize={{ base: "sm", sm: "md", md: "lg" }}
              >
                Abhishek Jha
              </Link>
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

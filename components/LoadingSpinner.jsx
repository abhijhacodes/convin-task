import { Box, Spinner, Center } from "@chakra-ui/react";

export const LoadingSpinner = () => {
  return (
    <Center height="100vh">
      <Box
        px={4}
        h="100vh"
        w="100vw"
        py={6}
        borderRadius="lg"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgGradient="linear(to-b, #2827CC, #0D0D0D)"
      >
        <Spinner
          thickness="8px"
          speed="0.65s"
          color="green.200"
          emptyColor="red.200"
          size="xl"
          colorScheme="facebook"
        />
      </Box>
    </Center>
  );
};

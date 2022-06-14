import { Box, Spinner, Center } from "@chakra-ui/react";

export const LoadingSpinner = () => {
  return (
    <Center height="100vh">
      <Box
        px={4}
        h="90vh"
        w="100vw"
        py={6}
        borderRadius="lg"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          color="blue.500"
          size="xl"
          colorScheme="facebook"
        />
      </Box>
    </Center>
  );
};

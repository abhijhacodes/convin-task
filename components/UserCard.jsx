import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";

export default function UserCard({ email, first_name, last_name, avatar }) {
  return (
    <Center py={3}>
      <Flex justify={"center"} mt={-12}>
        <Avatar
          size={"2xl"}
          src={avatar}
          alt={first_name}
          css={{
            border: "2px solid #120E43",
          }}
        />
      </Flex>

      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading
            fontSize={"2xl"}
            fontWeight={500}
            fontFamily={"body"}
            color="white"
          >
            {first_name + " " + last_name}
          </Heading>
          <Text color={"green.200"}>{email}</Text>
        </Stack>
        <Button
          as="a"
          href={`mailto:${email}`}
          w={"full"}
          mt={8}
          bg="gray.900"
          color={"white"}
          rounded={"md"}
          variant="outline"
          border="2px solid #120E43"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
        >
          Contact
        </Button>
      </Box>
    </Center>
  );
}

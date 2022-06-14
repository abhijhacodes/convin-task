import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Wrap,
  WrapItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import UserCard from "./UserCard";

export const UsersData = ({ users }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState({
    id: "25",
    email: "abhi.jha.cs@gmail.com",
    first_name: "Abhishek",
    last_name: "Jha",
    avatar: "https://avatars.githubusercontent.com/u/77770628?v=4",
  });

  function showUserInfo(id) {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data);
        onOpen();
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <ButtonGroup gap="2" alignSelf="center" pt="8">
        <Wrap spacing="4">
          {users.map((user) => (
            <WrapItem key={user.id}>
              <Button
                colorScheme="green"
                key={user.id}
                size="lg"
                _hover={{ bg: "green.600", color: "white" }}
                variant="outline"
                border="2px"
                onClick={() => showUserInfo(user.id)}
              >
                {user.id}
              </Button>
            </WrapItem>
          ))}
        </Wrap>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bgGradient="linear(to-b, #120E43, #03203C)">
            <ModalHeader alignSelf="center" color="white">
              User Information
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <UserCard
                email={user.email}
                first_name={user.first_name}
                last_name={user.last_name}
                avatar={user.avatar}
              />
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose} colorScheme="green">
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ButtonGroup>
    </>
  );
};

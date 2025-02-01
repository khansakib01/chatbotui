import { Box, Text,  Button } from "@chakra-ui/react";
import React from "react";
import { FaRocketchat } from "react-icons/fa6";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

 function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box position="fixed" bottom="20px" right="20px" zIndex="1000">
      {isOpen ? (
        <Box
          w="300px"
          h="400px"
          bg="white"
          boxShadow="lg"
          borderRadius="lg"
          p={'4px'}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Text fontWeight="bold">Chatbot</Text>
          <Box flex="1" overflowY="auto" bg="gray.100" p={'2px'} borderRadius="md">
            <Text fontSize="sm" color={'black'}>Hi! How can I help you?</Text>
          </Box>
          <Button  onClick={() => setIsOpen(false)} colorScheme="red" >{<IoMdCloseCircle />}</Button>
        </Box>
      ) : (
        <Button   onClick={() => setIsOpen(true)} colorScheme="blue" borderRadius="full">{<FaRocketchat />}</Button>
      )}
    </Box>
  );
}
export default ChatbotWidget;
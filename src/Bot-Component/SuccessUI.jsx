import React, { useEffect, useState } from "react";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import img from "./../assets/102.png";
import { Navigate, useNavigate } from "react-router-dom";
function SuccessUI() {
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();

  function navigatetoSite(){
    window.confirm('You are directed to another site:')
    navigate('/dummysite')
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Box>
      {loading ? (
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Text fontSize={"xl"} fontFamily={"monospace"} mb={"6px"}>
            Loading
          </Text>
          <Spinner size="lg" thickness="4px" color="red.200" speed="0.65s" />
        </Box>
      ) : (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Box
            boxShadow={"lg"}
            minWidth={"sm"}
            minHeight={"vh"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            gap={"20px"}
          >
            <Image width={"100px"} height={"70px"} mt={"20px"} src={img} />
            <Text fontFamily={"mono"} fontWeight={"bold"} fontSize={"20px"}>
              Success!
            </Text>
            <Text fontFamily={"mono"} fontSize={"10px"}>
              Your Chatbot has been Integrated Successfully!
            </Text>
            <Box
              mt={"10px"}
              display={"flex"}
              flexDirection={"column"}
              gap={"20px"}
            >
              <Button colorPalette={"green"}>Explore Admin Panel</Button>
              <Button onClick={navigatetoSite} colorPalette={"orange"}>Test Chatbot</Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default SuccessUI;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Box, Text, Button, List, ListItem, Spinner } from "@chakra-ui/react";
import { webpages } from "../data";
import { toaster } from "@/components/ui/toaster";
const MotionBox = motion(Box);
const WebPages = () => {
  const [pages, setPages] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleIntegrationComplete = () => {
    toaster.create({
      title: "Integration Complete",
      description: "Chatbot has been successfully integrated.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setLoading(true)
    setTimeout(() => {
      setTimeout(() => {
        setLoading(false)
      }, 2000);
      navigate("/integration");
    }, 3000);
   
  };

  function onSelectPage(url) {
    window.open(url, "_blank");
  }

  useEffect(() => {
    setTimeout(() => {
      setPages(webpages);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <MotionBox
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={'100vh'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
         <Box
         w={'full'}
         maxW={'28rem'}
         bg={'white'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
         textAlign={'center'}
         boxShadow={'lg'}
         minH={'90vh'}
         >
            <Text fontSize={'2xl'} mb={'6px'} color={'black'}>ChatBot Integration</Text>
            {loading?(
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                 <Spinner size="lg" thickness="4px" color="gray.200" speed="0.65s" />
                </Box>
            ):(
                <Box mt={'8px'}>
                    <Text fontSize={'xl'} mb={'4px'} color={'black'}>Detected Web Pages</Text>
                    <Box
                    mb={'2px'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={'15px'}>
                    {pages.map((page, index) => (
                    <Box
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    key={index}
                    p={'4px'} borderRadius={'0.375rem'} boxShadow={'lg'} cursor={'pointer'} w={'full'}
                   
                    onClick={() => onSelectPage(page.url)}
                >
                  <Box display={'flex'} w={'full'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
                    <Button  bg={page.status === "scraped" ? 'green' : "red"} >{page.url}</Button>
                    <Button
                    pt={'0.25rem'} pb={'0.25rem'} pl={'0.5rem'} pr={'0.5rem'} borderRadius={'0.375rem'} bg={page.status==="scraped"?"green":"red"}
                    >
                      {page.status}
                    </Button>
                  </Box>
                </Box>
              ))}
                    </Box>
                </Box>
            )}
          <Button
          onClick={handleIntegrationComplete}
          color={'white'} 
          colorPalette={'blue'}
          mt={'8px'} 
          py={'2px'} 
          mb={'4px'} 
          disabled = {loading}
        >
          {loading ? <Spinner size={'sm'}/> : "Complete integration"}
        </Button>
        
    </Box>
    </MotionBox>
  );
};

export default WebPages;

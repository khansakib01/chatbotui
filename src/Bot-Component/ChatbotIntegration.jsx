import { VStack, Text, Box, Button, Spinner} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ChatbotWidget from "./ChatbotWidget";
import {
  ClipboardIconButton,
  ClipboardInput,
  ClipboardRoot,
} from "@/components/ui/clipboard"
import { InputGroup } from "@/components/ui/input-group"
import { toaster } from "@/components/ui/toaster";
 function ChatbotIntegration() {
  const navigate = useNavigate();
  const [showChatbot, setShowChatbot] = useState(false);
  const [testLoading, setTestLoading] = useState(false);
  const [proceedLoading, setProceedLoading] = useState(false);
  const testbot = () =>{
  
    setTestLoading(true)
    setTimeout(() => {
      toaster.create({
        title: "Success",
        description:"Has been Integrated",
        isclosable : true,
        duration:2000
      })
    }, 2000);
    setTimeout(() => {
     
      setShowChatbot(true)
    }, 3000);
      setTimeout(() => {
        setTestLoading(false)
      }, 2000);
     
  }
  const process = () =>{
    setProceedLoading(true);
    setTimeout(() => {
      navigate('/success')
    }, 2000);
  }
  return (
        <Box display={'flex'} justifyContent={'center'}>
          <Box minH={'vh'} display={'flex'} justifyContent={'center'} flexDirection={'column'} gap={'20px'} maxWidth={'sm'} boxShadow={'xl'}>
            <Text fontFamily={'monospace'} fontSize={'xl'} fontWeight={'900'} color={'red.600'} textAlign={'center'}>Chatbot Intergration</Text>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
              <ClipboardRoot value="https://chatbot-integration.com/chatbot.js">
              <Box display={'flex'} flexDirection={'column'} gap={'20px'} justifyContent={'center'} alignItems={'center'}>
                <Text fontFamily={'monospace'} fontSize={'12px'} textAlign={'center'} >Copy this script and paste it inside your website's head</Text>
                <InputGroup width= {'250px'} fontFamily = {'mono'} endElement={<ClipboardIconButton me="-2" />}>
                <ClipboardInput />
                </InputGroup>
                </Box>
              </ClipboardRoot>
              <Button colorPalette={'purple'} onClick={testbot}>{testLoading?<Spinner size={'sm'}/>:"Test Chatbot"}</Button>
              {showChatbot&&<ChatbotWidget/>}
              <Button  colorPalette="green" onClick={process}>{proceedLoading?<Spinner size={'sm'}/>:"Proceed"}</Button>
              
            </Box>
          </Box>
        </Box>
  );
}
export default ChatbotIntegration
import React, { useState } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { LuUser } from "react-icons/lu";
import { Input } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import { MdEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import {  toaster } from "@/components/ui/toaster";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import img from './../assets/rb.jpg'
function SignUP() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevdata)=>({
      ...prevdata,
      [name]:value
    }))
  };

  const sendOtp = async () => {
    
    if (!formData.email || !formData.password || !formData.name) {
      toaster.create({
        title: "error",
        description: "Enter all field",
        status: "error",
        duration: 3000,
      });
      return;
    }
    const otpCode = Math.floor(10000 + Math.random() * 90000);
    setGeneratedOtp(otpCode);


    const templateParams = {
      user_email: formData.email,
      otp: otpCode,
      chatbot:'Chatbot',
      user_name: formData.name
    };

    try {
      await emailjs.send(
        "service_d0r5cjk",
        "template_hol1cld",
        templateParams,
        "icSWXkVsu2trzadee"
      );
      setIsOtpSent(true);
      toaster.create({
        title: "OTP sent",
        description: "Check your email",
        status: "Success",
        duration: 3000,
      });
    } catch (e) {
      toaster.create({
        title: "error",
        description: "Failed to send otp,enter valid mail",
        status: "error",
        duration: 3000,
      });
    }
  };
  const verifyOtp = () => {
    if (otp === generatedOtp.toString()) {
      toaster.create({
        title: "Success",
        description: "OTP verified!",
        status: "success",
        duration: 5000,
      });
      navigate('/setup-organization')
    } else {
      toaster.create({
        title: "Error",
        description: "Invalid OTP",
        status: "error",
        duration: 3000,
      });
    }
    
  };

  return (
    <form>
     
      <Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
          
          <Box
            mt={'25px'}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"15px"}
            boxShadow={'lg'}
            minHeight={'md'}
            width={'270px'}
          >
            <Image mt={'10px'} height={'65px'} w={'100px'} src={img}/>
            <Text
              fontFamily={""}
              fontWeight={"bold"}
              fontSize={"30px"}
              style={{
                color: "#797dd7",
                backgroundImage:"linear-gradient(45deg, #797dd7 9%, #ff006f 93%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sign Up
            </Text>

            <InputGroup
              startElement={<LuUser fontWeight={"900"} color="red" />}
              
            >
              <Input
                value={formData.name}
                name="name"
                onChange={handleChange}
                placeholder="Name"
                type="text"
                width={"200px"}
                borderColor={"red.300"}
                fontSize={"10px"}
                fontFamily={"monospace"}
                height={"25px"}
                p={"5px"}
                borderRadius={"10px"}
              />
            </InputGroup>

            <InputGroup startElement={<MdEmail color="green" />}>
              <Input
                value={formData.email}
                name="email"
                onChange={handleChange}
                placeholder="Email"
                type="email"
                width={"200px"}
                height={"25px"}
                p={"5px"}
                borderColor={"red.300"}
                fontSize={"10px"}
                fontFamily={"monospace"}
                borderRadius={"10px"}
              />
            </InputGroup>

            <InputGroup startElement={<TbLockPassword color="yellow" />}>
              <Input
                name="password"
                onChange={handleChange}
                placeholder="Password"
                type="password"
                width={"200px"}
                height={"25px"}
                p={"5px"}
                borderColor={"red.300"}
                fontSize={"10px"}
                fontFamily={"monospace"}
                borderRadius={"10px"}
                color={'white'}
              />
            </InputGroup>
            {isOtpSent ? (
              <>
                <Input
                  name="Otp"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  width={"200px"}
                  height={"25px"}
                  p={"5px"}
                  fontSize={"10px"}
                  fontFamily={"monospace"}
                  borderRadius={'10px'}
                  borderColor={'red.500'}
                  color={'white'}
                />
                <Button
                  onClick={verifyOtp}
                  width={"200px"}
                  colorScheme="green"
                  colorPalette={"cyan"}
                >
                  Verify OTP
                </Button>
              </>
            ) : (
              <Button onClick={sendOtp} width={"200px"} colorPalette={"teal"}>
                Send OTP
              </Button>
            )}
            <Text color={'green.500'} fontWeight={'bold'} fontSize={'20px'} fontFamily={'monospace'}>OR</Text>
            <GoogleAuth/>
          </Box>
        </Box>
      </Box>
    </form>
  );
}

export default SignUP;

import React, { useState } from "react";
import {
  Box,
  Input,
  Text,
  Textarea,
  Button,
  Link,
  Image,
} from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import { toaster } from "@/components/ui/toaster";
import { BsAlphabetUppercase } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
import ai from "./../assets/cb.png";
import { Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function SetupOrganization() {
  const [companyName, setCompanyName] = useState("");
  const [webSiteUrl, setWebSiteUrl] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const HandleCompanyName = (e) => {
    setCompanyName(e.target.value);
  };

  const HandlewebsiteUrl = (e) => {
    setWebSiteUrl(e.target.value);
  };

  const HandleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    if (!webSiteUrl) {
      toaster.create({
        title: "error",
        description: "Enter URl",
        status: "fail",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setLoading(true);

    setTimeout(() => {
      toaster.create({
        title: "Success",
        description: "Setup has been completed.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/webpages");
      }, 1000);
      setLoading(false);
    }, 3000);
  };
  const fetchMetaDescription = async () => {
    if (!webSiteUrl) {
      toaster.create({
        title: "Error",
        description: "Please enter a valid website URL.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (!/^https?:\/\//i.test(webSiteUrl)) {
      toaster.create({
        title: "Invalid URL",
        description: "URL must start with http:// or https://",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setLoading(true);
    setDescription("");

    try {
      const response = await fetch(
        `https://api.microlink.io/?url=${webSiteUrl}`
      );
      const data = await response.json();
      console.log(data);

      if (data.status === "success" && data.data.description) {
        setDescription(data.data.description);
        toaster.create({
          title: "Meta Description Fetched",
          description: "Website description successfully fetched!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toaster.create({
          title: "Meta Description Not Found",
          description: "No description found for this website.",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toaster.create({
        title: "Error Fetching Data",
        description: "There was an error while fetching meta description.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        minH={"vh"}
        maxH={"sm"}
        bg={"Background"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={"20px"}
          bg={"white"}
          shadow={"lg"}
          width={"300px"}
        >
          <Image src={ai} width={"200px"} />
          <Text fontSize={"20px"}>Setup Your Organization</Text>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <InputGroup startElement={<BsAlphabetUppercase color="red" />}>
              <Input
                placeholder="Company Name"
                onChange={HandleCompanyName}
                value={companyName}
                width={"200px"}
                fontSize={"10px"}
                fontFamily={"monospace"}
                height={"30px"}
                p={"5px"}
                borderRadius={"5px"}
                color={'black'}
              />
            </InputGroup>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={"3px"}
            >
              <InputGroup startElement={<FaLink color="blue" />}>
                <Input
                  placeholder="Website URL"
                  onChange={HandlewebsiteUrl}
                  value={webSiteUrl}
                  width={"200px"}
                  borderColor={"gray.300"}
                  fontSize={"10px"}
                  fontFamily={"monospace"}
                  height={"30px"}
                  p={"5px"}
                  borderRadius={"5px"}
                  color={'black'}
                />
              </InputGroup>
              <Link
                fontSize={"10px"}
                color={"blue"}
                onClick={fetchMetaDescription}
              >
                Fetch Meta Description
              </Link>
            </Box>
          </Box>

          <Textarea
            placeholder="Description"
            onChange={HandleDescription}
            value={description}
            width={"205px"}
            height={"30px"}
            color={'black'}
          ></Textarea>

          <Button
            onClick={handleSubmit}
            px={"20px"}
            py={"10px"}
            width={"200px"}
            colorPalette={"blue"}
            disabled={loading}
          >
            Next
          </Button>
          {loading && <Spinner size="sm" />}
        </Box>
      </Box>
    </Box>
  );
}

export default SetupOrganization;

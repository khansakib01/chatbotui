import { Box,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from '@chakra-ui/react';
import ChatbotWidget from './ChatbotWidget';
function DummySite() {
    const list = ["Home","Service","About","Contact"];
  return (
    <Box>
        <Box>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'25px'} boxShadow={'lg'}>
                {
                    list.map((item,index)=>(
                        <Box key={index} border={'5px'} borderRadius={'5px'} cursor={'pointer'} color={'red'} fontSize={'15px'} fontWeight={'bold'} fontFamily={'mono'}>{item}</Box>
                    ))
                }
            </Box>
            <Box display={'flex'} justifyContent={'center'} mt={'20px'} flexDirection={'column'} alignItems={'center'}>
                <Text fontFamily={'mono'} fontSize={'xl'}>This is Dummy site to check integrate chatbot</Text>
                <Text fontFamily={'mono'} fontSize={'xl'}>See chatbot in bottom right corner</Text>
                <Text fontFamily={'mono'} fontSize={'xl'}>This is built by Sakib khan</Text>
                <Link href={'https://portfolio-sakib01.netlify.app/'} color={'blue'} fontFamily = {'mono'}>https://portfolio-sakib01.netlify.app/</Link>
                <ChatbotWidget/>
            </Box>
        </Box>
    </Box>
  )
}

export default DummySite

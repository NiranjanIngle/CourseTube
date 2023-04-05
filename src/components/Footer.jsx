import { Box, Button, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p='16' color={'white'}>
      <Stack direction={['column', 'row']} >
        <VStack alignItems={'stretch'} w={'full'} paddingBottom={["15px", "none"]}>
          <Heading size='md' textTransform={'uppercase'} px={'4'} textAlign={["center", "left"]} >
            Subscribe to get updates
          </Heading>

          <HStack borderBottom={"2px solid white"} p={'2'}>
            <Input
              placeholder='Enter Email Here...'
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor='none'
            />
            <Button p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0 '}>
              <AiOutlineSend size={20} />
            </Button>
          </HStack>

        </VStack>

        <VStack
          paddingBottom={["15px","none"]}
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}>
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>All rights Reserved</Text>
        </VStack>


        <VStack w={'full'}>
          <Heading size={'md '} textTransform={'uppercase'}
          >Social Media </Heading>

          <Button variant={"link"} colorScheme={"blue"} >
            <a href="http://youtube.com" target={"_blank"} >Youtube</a>
          </Button>
          <Button variant={"link"} colorScheme={"blue"} >
            <a href="http://instagram.com" target={"_blank"}>Instagram</a>
          </Button>
          <Button variant={"link"} colorScheme={"blue"} >
            <a href="http://github.com" target={"_blank"}>GitHub</a>
          </Button>

        </VStack>

      </Stack>

    </Box>
  )
}

export default Footer
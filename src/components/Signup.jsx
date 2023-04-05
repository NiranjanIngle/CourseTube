import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16px"}>
      <VStack

        spacing={8}
        w={["full", "96"]}
        m={"auto"}
        my={'16'}
        border={"2px Solid purple"}
        borderRadius={"9px"}
        padding={"10px"}
        bgGradient={"linear(to-r,#000428,#2c3e50)"}

      >
        <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize='5xl'
          fontWeight='extrabold'
        >
          Registration
        </Text>
      

        <Input
          placeholder={"Username"}
          _placeholder={{ color: "wheat" }}
          type={'text'}
          required
          focusBorderColor={"purple.500"} />

        <Input
          placeholder={"Email"}
          _placeholder={{ color: "wheat" }}
          type={'email'}
          required
          focusBorderColor={"purple.500"} />

        <Input
          placeholder={"Password"}
          _placeholder={{ color: "wheat" }}
          type={'password'}
          required
          focusBorderColor={"purple.500"}
        />



        <Button variant={'link'} alignSelf={"flex-end"}>
          <Link to={"/forgeatpassword"}>Forget Password</Link>
        </Button>

        <Button colorScheme={"blue"} type={'submit'}
          bgGradient={"linear(to-r,green.200,pink.500)"}
          border={"1px solid  #303030"}>
          Register
        </Button>
        <Text textAlign={'right'} bgGradient='linear(to-l, #ff9966, #ff5e62)'
          bgClip='text'>
          Account exist?   {""}
          <Button variant={'link'} alignSelf={"flex-end"} colorScheme={'purple'}>
            <Link to={"/login"}>Login</Link>
          </Button>
        </Text>





      </VStack>


    </Container>
  )
}
export default Signup
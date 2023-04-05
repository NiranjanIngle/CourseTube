import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16px"}>
      <VStack
        alignItems={"stretch"}
        spacing={8}
        w={["full", "96"]}
        m={"auto"}
        my={'16'}
        border={"2px Solid purple"}
        borderRadius={"9px"}
        padding={"10px"}
        bgGradient={"linear(to-r,#2c3e50,#000428)"}

      >

        <Text
          bgGradient='linear(to-l, #ff9966, #ff5e62)'
          bgClip='text'
          fontSize='5xl'
          fontWeight='extrabold'
        >
          Welcome Back
        </Text>

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
          focusBorderColor={"purple.500"} />


        <Button variant={'link'} alignSelf={"flex-end"}>
          <Link to={"/forgeatpassword"}>Forget Password</Link>
        </Button>

        <Button colorScheme={"green"}  type={'submit'}
         bgGradient={"linear(to-r,#36d1dc,#5b86e5)"}>
          Log In
        </Button>
        <Text textAlign={'right'} bgGradient='linear(to-l,  #ff5e62,#ff9966)'
          bgClip='text'
          >
          Don't have account  {""}
          <Button variant={'link'} alignSelf={"flex-end"} colorScheme={'purple'}>
            <Link to={"/signup"}>Signup</Link>
          </Button>
        </Text>





      </VStack>


    </Container>
  )
}

export default Login
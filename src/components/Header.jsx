import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";

import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from "react-icons/bi"
import { DragControls } from 'framer-motion';




const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button pos={'fixed'}
        top={'4'}
        left={"4"}
        p={"0"}
        w={'10'}
        h={"10"}
        colorScheme="purple"
        borderRadius={"full"}
        onClick={onOpen}
        zIndex={"overlay"}>
        <BiMenuAltLeft size={"20"} />

      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} >

        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>CourseTube</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>

              <Button variant={'ghost'} colorScheme={'purple'} onClick={onClose}>
                <Link to={"/"}>Home</Link>
              </Button>

              <Button variant={'ghost'} colorScheme={'purple'} onClick={onClose}>
                <Link to={"/videos"}>Videos</Link>
              </Button>

              <Button variant={'ghost'} colorScheme={'purple'} onClick={onClose}>
                <Link to={"/videos?category=free"}>Free Videos</Link>
              </Button>

              <Button variant={'ghost'} colorScheme={'purple'} onClick={onClose}>
                <Link to={"/upload"}>Upload Video</Link>
              </Button>
            </VStack>

            <HStack
              pos={"absolute"}
              bottom={'10'}
              left={'0'}
              width={"full"}
              justifyContent={"space-evenly"}>

              <Button colorScheme={'purple'} onClick={onClose}>
                <Link to={'/login'}>Log In</Link>
              </Button>

              <Button colorScheme={'purple'} variant={'outline'} onClick={onClose}>
                <Link to={'/signup'}>Sign Up</Link>
              </Button>

            </HStack>


          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>

  )
}

export default Header
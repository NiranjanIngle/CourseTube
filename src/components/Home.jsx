import React from 'react'
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl",
 
}

const Home = () => {
  return (

    <Box >
      <MyCarousel  />
      <Container maxW={"container.xl"} minH={"100vh"} p="16" >

        <Heading
          textTransform={"uppercase"}
          py="2"
          w={"fit-content"}
          borderBottom={"2px solid"}
          m="auto">

          Services

        </Heading>

        <Stack
          h="full"
          p={"4"}
          alignItems={"center"}
          direction={['column', 'row']}
        >
          <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"} />

          <Text letterSpacing={"widest"} lineHeight={"190%"} p={[4,16]} textAlign={"center"}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore obcaecati cupiditate porro architecto quae, voluptatum inventore provident a culpa quibusdam excepturi! Perspiciatis reiciendis animi quaerat tempora nobis aliquam saepe est ipsa fugiat vitae quasi accusantium ab autem, nulla voluptatibus aliquid asperiores provident modi repellendus tempore adipisci quibusdam! Eligendi repudiandae reiciendis porro eveniet consequuntur optio totam iure distinctio accusantium facere. Dicta necessitatibus delectus, asperiores praesentium dolor officia eligendi molestias reprehenderit aliquam illum iste quia vitae tempore incidunt consequuntur deserunt dignissimos, vel odio beatae voluptates? Dolorum quisquam quod facilis iure aliquam tenetur placeat nesciunt eveniet autem nihil? Voluptates eos exercitationem suscipit iure.
          </Text>
        </Stack>
      </Container>
    </Box>

  )
};



const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={"cover"} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >
        Watch The Future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'} >
      <Image src={img2}  h="full" w={'full'} objectFit={"cover"} />
      <Heading bgColor={'whiteAlpha.500'} color={'black'} {...headingOptions} >
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={'100vh'} >
      <Image src={img3}  h="full" w={'full'} objectFit={"cover"} />
      <Heading bgColor={'whiteAlpha.500'} color={'black'} {...headingOptions} >
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4}  h="full" w={'full'} objectFit={"cover"} />
      <Heading bgColor={'whiteAlpha.500'} color={'black'} {...headingOptions} >
        Night life is cool
      </Heading>
    </Box>


  </Carousel>
);

export default Home;
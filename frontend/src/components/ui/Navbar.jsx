import { Button, Container, Flex, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {PlusSquareIcon} from '@chakra-ui/icons'

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm:"row"
            }}>
          <Text
              fontSize={{ base: "22", sm: "28" }}
              fontWeight={"bold"}
              textTransform={"uppercase"}
              textAligh={"center"}
              bgGradient={"linear(to-l, #7928CA, #FF0080)"}
              bgClip={"text"}>
                <Link to={"/"}>Product Store 🛒</Link>
          </Text>

          <HStack spacing={2} alignItems={"center"}>
            <Link to={"/create"}>
            <Button>
              <PlusSquareIcon frontSize={20}/>
            </Button>
            </Link>
          </HStack>
        </Flex>
        
    </Container>
  )
}

export default Navbar
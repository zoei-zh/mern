import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../../store/product'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
  const { fetchProducts, products } = useProductStore()
  useEffect(() => { fetchProducts() }, [fetchProducts])
  console.log("products", products);
  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          textAlign={"center"}
          bgGradient={"linear(to-l, #7928CA, #FF0080)"}
          bgClip={"text"}>
          Current Products 🚀
        </Text>

        <SimpleGrid columns={{
          base: 1,
          md: 2,
          lg: 3
        }} spacing={10} w={"full"}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && 
        <Text
          fontSize='xl' fontWeight={"bold"} textAlign={"center"} color='gray.500'>
          No Product Found 😢{" "}
          <Link to={"/create"}>
            <Text as='span' color={"#7928CA"} _hover={{ textDecoration: "underline" }}>Create a product</Text>
          </Link>
        </Text>}
      </VStack>
    </Container>
  )
}

export default HomePage
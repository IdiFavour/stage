import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

function ProductAddToCart() {
  return (
    <SimpleGrid minChildWidth="180px" spacing="24px" mt="10">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        width="300"
        borderWidth="1px"
        position="relative"
      >
        <Image
          src="/shohin.jpg"
          boxSize="270"
          width="100%"
          objectFit="cover"
          alt="Picture of Shohin"
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontWeight="semibold" lineHeight="tight" isTruncated>
              <Text fontSize={"md"}>Shohin Davlatov</Text>
            </Box>
          </Flex>
          <Text fontSize={"sm"} color={"gray"}>
            Founder and CEO
          </Text>
        </Box>
      </Box>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        width="300"
        borderWidth="1px"
        position="relative"
      >
        <Image
          src="/headofteam.jpg"
          boxSize="270"
          width="100%"
          objectFit="cover"
          alt="Picture of Shohin"
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontWeight="semibold" lineHeight="tight" isTruncated>
              <Text fontSize={"md"}>Nandini Mukherjee</Text>
            </Box>
          </Flex>
          <Text fontSize={"sm"} color={"gray"}>
            Head of the Team
          </Text>
        </Box>
      </Box>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        width="300"
        borderWidth="1px"
        position="relative"
      >
        <Image
          src="/bunyod.jpg"
          boxSize="270"
          width="100%"
          objectFit="cover"
          alt="Picture of Bunyod"
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontWeight="semibold" lineHeight="tight" isTruncated>
              <Text fontSize={"md"}>Bunyod Tabarov</Text>
            </Box>
          </Flex>
          <Text fontSize={"sm"} color={"gray"}>
            Creative Director
          </Text>
        </Box>
      </Box>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        width="300"
        borderWidth="1px"
        position="relative"
      >
        <Image
          src="/favour.jpg"
          boxSize="270"
          width="100%"
          objectFit="cover"
          alt="Picture of Favour"
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontWeight="semibold" lineHeight="tight" isTruncated>
              <Text fontSize={"md"}>Favour Idi</Text>
            </Box>
          </Flex>
          <Text fontSize={"sm"} color={"gray"}>
            Software Developer
          </Text>
        </Box>
      </Box>
    </SimpleGrid>
  );
}

export default ProductAddToCart;

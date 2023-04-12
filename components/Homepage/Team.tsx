import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Team() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl py-24 sm:py-48 lg:py-36 px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl pb-10">
          Our Team
        </h1>
        <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16 pb-20">
          <div className="relative">
            <Box
              w={"full"}
              borderRight={"1px"}
              borderColor={"white"}
              p={6}
              overflow={"hidden"}
            >
              <Stack>
                <img
                  className="col-span-2 max-h-12 object-contain lg:col-span-1"
                  src="https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/reviews-section/logo-1.png"
                  alt="Transistor"
                  width={158}
                  height={48}
                />
                <Heading
                  color={"white"}
                  py={4}
                  fontSize={"lg"}
                  fontFamily={"body"}
                >
                  Boost your conversion rate
                </Heading>
                <Text color={"white"} fontSize={"sm"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Avatar
                  src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600} color={"gray"}>
                    Achim Rolle
                  </Text>
                  <Text color={"gray"}>Founder </Text>
                </Stack>
              </Stack>
            </Box>
          </div>
          <div className="relative">
            <Box
              w={"full"}
              borderRight={"1px"}
              borderColor={"white"}
              p={6}
              overflow={"hidden"}
            >
              <Stack>
                <img
                  className="col-span-2 max-h-12 object-contain lg:col-span-1"
                  src="https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/reviews-section/logo-1.png"
                  alt="Transistor"
                  width={158}
                  height={48}
                />
                <Heading
                  color={"white"}
                  py={4}
                  fontSize={"lg"}
                  fontFamily={"body"}
                >
                  Boost your conversion rate
                </Heading>
                <Text color={"white"} fontSize={"sm"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Avatar
                  src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600} color={"gray"}>
                    Achim Rolle
                  </Text>
                  <Text color={"gray"}>Chief Technical Officer </Text>
                </Stack>
              </Stack>
            </Box>
          </div>
          <div className="relative">
            <Box
              w={"full"}
              borderRight={"1px"}
              borderColor={"white"}
              p={6}
              overflow={"hidden"}
            >
              <Stack>
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  Company Logo
                </Text>
                <Heading color={"white"} fontSize={"lg"} fontFamily={"body"}>
                  Boost your conversion rate
                </Heading>
                <Text color={"white"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Avatar
                  src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600} color={"gray"}>
                    Achim Rolle
                  </Text>
                  <Text color={"gray"}>Feb 08, 2021</Text>
                </Stack>
              </Stack>
            </Box>
          </div>
        </dl>
        <div className=" py-10 pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-4xl text-center tracking-tight text-white sm:text-4xl pb-10">
              Our Partners are Backed by the Best in Venture
            </h1>
            <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/reviews-section/logo-1.png"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/reviews-section/logo-1.png"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/reviews-section/logo-1.png"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/reviews-section/logo-1.png"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://ninjapromo.io/wp-content/themes/ninjapromo/assets/img/reviews-section/logo-1.png"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
        <div className="text-center pt-20">
          <h1 className="text-4xl  tracking-tight text-white sm:text-5xl">
            Talk to a Full-Service Digital Marketing Agency About Your Business
            Goal
          </h1>
          <p className="mt-6 text-base leading-7 text-white">
            At NinjaPromo, we’re passionate about helping businesses reach their
            maximum potential online. Tell us a little about your brand and what
            you hope to achieve, and we’ll be in touch to discuss how we can
            help you grow.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className=" bg-white px-10 py-4 text-sm font-semibold text-black">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

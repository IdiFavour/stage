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
    <div
      style={{
        background: "#121212",
      }}
    >
      <div className="mx-auto max-w-7xl py-24 sm:py-48 lg:py-36 px-2 lg:px-8">
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
                <Text color={"white"} fontSize={"sm"}>
                  As the founder of our DvlMedia, I am proud to say that we are
                  a data-driven partner dedicated to helping our clients
                  succeed. Our team takes the time to thoroughly examine each
                  client's branding, messaging, and positioning to develop
                  customized strategies and content that align with their
                  business goals. We believe in providing valuable insights to
                  help our clients grow and scale their businesses.
                </Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Avatar src={"/shohin.jpg"} />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600} color={"gray"}>
                    Shohin Davlatov
                  </Text>
                  <Text color={"gray"}>Founder and CEO</Text>
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
                <Text color={"white"} fontSize={"sm"}>
                  Leading the team at DvlMedia, I am proud to work with a
                  talented group of professionals who are dedicated to providing
                  our clients with customized strategies and content that align
                  with their unique branding, messaging, and positioning.
                </Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Avatar src={"/headofteam.jpg"} />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600} color={"gray"}>
                    Nandini Mukherjee
                  </Text>
                  <Text color={"gray"}>Head of Team</Text>
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
                <Text color={"white"} fontSize={"sm"}>
                  As the Creative Director of dvlmedia, my team and I are
                  dedicated to creating customized strategies and content that
                  align with each client's branding, messaging, and positioning.
                  We believe in a data-driven approach to achieve the best
                  results for our clients and provide valuable insights to help
                  them grow and scale their businesses.
                </Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Avatar src={"/bunyod.jpg"} />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600} color={"gray"}>
                    Bunyod Tabarov
                  </Text>
                  <Text color={"gray"}>Creative Director</Text>
                </Stack>
              </Stack>
            </Box>
          </div>
        </dl>
        {/* <div className=" py-10 pb-20">
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
        </div> */}
        <div className="lg:text-center pt-20 px-4">
          <h1 className="text-4xl  tracking-tight text-white sm:text-5xl">
            Talk to a Full-Service Digital Marketing Agency About Your Business
            Goal
          </h1>
          <p className="mt-6 text-base leading-7 text-white">
            If you decide to work with us as your social media management
            company, you can relax knowing that your brand is in capable hands.
            We are dedicated to providing outstanding outcomes and assisting
            your company's social media growth and success.Our top lines of
            services being- customer service that is quick to respond: We value
            open lines of contact and are always available to our customers. We
            are always available to address any queries or worries you may have
            and are prompt and dependable.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className=" bg-white px-10 py-4 text-sm font-semibold"
              style={{
                color: "#121212",
              }}
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

export default function Industries() {
  return (
    <Box p={4}>
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <div className="grid  grid-cols-1  lg:grid-cols-2 ">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Industries
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Our expertise lies in various aspects of marketing, including
              business-to-business, cryptocurrency, NFT, and high-growth startup
              brands, which are our specialty. Explore our strategic services
              below to see how we can help take your business to new heights.
            </p>
          </div>
        </div>
        <div className=" ">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mt-10  sm:mt-14 lg:mt-18 ">
              <dl className="grid  grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none md:grid-cols-3 lg:grid-cols-5 lg:gap-y-16">
                <div className="relative">
                  <dt className="text-base font-semibold leading-7 text-gray-900 pl-12 pt-1">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
                        fill="black"
                        viewBox="0 0 24 24"
                      >
                        <path d="m20.772 10.155-1.368-4.104A2.995 2.995 0 0 0 16.559 4H7.441a2.995 2.995 0 0 0-2.845 2.051l-1.368 4.104A2 2 0 0 0 2 12v5c0 .738.404 1.376 1 1.723V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h12v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.277A1.99 1.99 0 0 0 22 17v-5a2 2 0 0 0-1.228-1.845zM7.441 6h9.117c.431 0 .813.274.949.684L18.613 10H5.387l1.105-3.316A1 1 0 0 1 7.441 6zM5.5 16a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5.5 16zm13 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18.5 16z"></path>
                      </svg>
                    </div>
                    Car Business
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    A top distributor of dependable vehicles, offering a variety
                    of types and models to suit your needs
                  </div>
                </div>
                <div className="relative">
                  <dt className="text-base font-semibold leading-7 text-gray-900 pl-12 pt-1">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center">
                      <svg
                        className="h-10 w-10 text-white"
                        fill="black"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                      </svg>
                    </div>
                    E-commerce
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    We offer a range of services to help businesses of all sizes
                    increase their online presence and engagement.
                  </div>
                </div>
                <div className="relative">
                  <dt className="text-base font-semibold leading-7 text-gray-900 pl-12 pt-1">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center">
                      <svg
                        className="h-10 w-10 text-white"
                        fill="black"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                      </svg>
                    </div>
                    Gym
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Providing top-quality gym services to help you achieve your
                    fitness goals.
                  </div>
                </div>
                <div className="relative">
                  <dt className="text-base font-semibold leading-7 text-gray-900 pl-12 pt-1">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center">
                      <svg
                        className="h-10 w-10 text-white"
                        fill="black"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                      </svg>
                    </div>
                    Startup
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    We offer a range of services to help startups establish and
                    grow their online presence.
                  </div>
                </div>
                <div className="relative">
                  <dt className="text-base font-semibold leading-7 text-gray-900 pl-12 pt-1">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center">
                      <svg
                        className="h-10 w-10 text-white"
                        fill="black"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                      </svg>
                    </div>
                    Restaraunts
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Specializing in providing effective and innovative social
                    media management solutions for restaurants.
                  </div>
                </div>
                <div className="relative">
                  <dt className="text-base font-semibold leading-7 text-gray-900 pl-12 pt-1">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center">
                      <svg
                        className="h-10 w-10 text-white"
                        fill="black"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                      </svg>
                    </div>
                    NFT Projects
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    We offer a range of services to help artists and creators
                    monetize their digital content through NFTs.
                  </div>
                </div>
                <div className="relative">
                  <dt className="text-base font-semibold leading-7 text-gray-900 pl-12 pt-1">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center">
                      <svg
                        className="h-10 w-10 text-white"
                        fill="black"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                      </svg>
                    </div>
                    Crypto Startups
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Crypto startups are new businesses that leverage blockchain
                    technology to create innovative products or services in the
                    cryptocurrency space.
                  </div>
                </div>
                <div className="relative">
                  <dt className="text-base font-semibold leading-7 text-gray-900 pl-12 pt-1">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center">
                      <svg
                        className="h-10 w-10 text-white"
                        fill="black"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                      </svg>
                    </div>
                    Small Business
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Offer a range of services to help small businesses establish
                    and grow their online presence.
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

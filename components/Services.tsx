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

export default function Services() {
  return (
    <Box p={4}>
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <div className="grid  grid-cols-1  lg:grid-cols-2 ">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Digital <br className="hidden lg:block" /> Marketing Services
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We’re experts in all things marketing. Business-to-business,
              cryptocurrency,NFT, and high-growth startup brands are our sweet
              spot. Discover how we can scale your business to new heights
              through our strategic services below:
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
                    Push to deploy
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                    suspendisse semper morbi. Odio urna massa nunc massa.
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
                    Push to deploy
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                    suspendisse semper morbi. Odio urna massa nunc massa.
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
                    Push to deploy
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                    suspendisse semper morbi. Odio urna massa nunc massa.
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
                    Push to deploy
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                    suspendisse semper morbi. Odio urna massa nunc massa.
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
                    Push to deploy
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                    suspendisse semper morbi. Odio urna massa nunc massa.
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
                    Push to deploy
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                    suspendisse semper morbi. Odio urna massa nunc massa.
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
                    Push to deploy
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                    suspendisse semper morbi. Odio urna massa nunc massa.
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
                    Push to deploy
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                    suspendisse semper morbi. Odio urna massa nunc massa.
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
                    Push to deploy
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                    suspendisse semper morbi. Odio urna massa nunc massa.
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
                    Push to deploy
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                    suspendisse semper morbi. Odio urna massa nunc massa.
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

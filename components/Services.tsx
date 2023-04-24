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
              Our creative digital marketing firm has helped a diverse range of
              businesses and organizations achieve their advertising objectives.
              With extensive experience working in numerous industries, we have
              the insights and expertise to help you discover your true
              potential.
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
                    Social Media
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Build your brand and engage with your audience through
                    strategic and effective social media management.
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
                    SEO
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Improve your website's visibility and search engine ranking
                    with expert SEO strategies.
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
                    Video Production
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Showcase your brand with stunning visual content through
                    promotional videos and photos.
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
                    Video Marketing
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Make your videos stand out with professional editing
                    services that enhance the visual appeal and message of your
                    content.
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
                    Branding
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Promote your business to a vast and engaged audience on the
                    world's largest social media platform.
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
                    Email Marketing
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Reach your audience directly with personalized and effective
                    email campaigns.
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
                    Web Development
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Build a modern and user-friendly website that represents
                    your brand and meets your business goals.
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
                    Paid Media ROI
                  </dt>
                  <div className="mt-4 text-sm leading-normal text-gray-500">
                    Reach your target audience with targeted advertising on
                    Google search results pages and across the web.
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

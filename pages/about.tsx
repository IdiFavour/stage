import { Box } from "@chakra-ui/react";
import TeamAvatar from "@/components/widgets/TeamAvatar";
const AboutUs = () => {
  return (
    <Box p={4} pt={12}>
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <div className="grid  grid-cols-1  lg:grid-cols-2 ">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Team
            </h1>
          </div>
        </div>
        <div>
          <TeamAvatar />
        </div>
      </div>
    </Box>
  );
};

export default AboutUs;

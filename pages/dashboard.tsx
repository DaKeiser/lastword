import ExternalLink from '@/components/external-link';
import PageLayout from '@/components/page-layout';
import {
  Button,
  Center,
  chakra,
  Divider,
  Heading,
  HStack,
  Link,
  Skeleton,
  Stack,
  Text,
  VStack,
  Flex,
  Box,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import { Trans, useTranslation } from 'react-i18next';
import { FiExternalLink } from 'react-icons/fi';
import { ImSphere } from 'react-icons/im';
import { GITHUB_PROFILE, WEBSITE } from 'src/constants';

const Dashboard = () => {
    const { t } = useTranslation();
  
    return (
        <Flex>
            <Button
                colorScheme='brand'
                variant='ghost'
                rightIcon={<ImSphere />}
              >
                Website
              </Button>
        </Flex>
    );
};

export default Dashboard

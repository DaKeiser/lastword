import Login from '@/components/login'
import ThemeButton from '@/components/theme-button';
import { Stack, HStack } from '@chakra-ui/react';
import Logo from '../logo-button';

const Header = () => {
  return (
    <HStack
      as='header'
      position='fixed'
      top='0'
      p={8}
      zIndex='tooltip'
      justify='space-between'
      align='center'
      w='100%'
    >
      <Logo />
      
      <Stack
        flex={{ base: 1, md: 0 }}
        justify={'flex-end'}
        direction={'row'}
        spacing={6}
      >
        <Login />
        <ThemeButton />
      </Stack>
    </HStack>
  );
};

export default Header;

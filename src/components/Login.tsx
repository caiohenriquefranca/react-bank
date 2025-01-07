import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Input,
  Heading,
  Text,
  Link,
  Image,
} from '@chakra-ui/react';
import { toaster } from './ui/toaster';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'admin@example.com' && password === 'password') {
        toaster.create({
        title: 'Login bem-sucedido',
        description: 'Você foi autenticado com sucesso!',
        duration: 3000,
      });
    } else {
        toaster.create({
        title: 'Erro no login',
        description: 'Credenciais inválidas.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex height="100vh">
      {/* Lado da Imagem */}
      <Box
        flex="1"
        display={{ base: 'none', md: 'block' }}
        bg="black"
        position="relative"
      >
        <Image
          src="/assets/login-image.jpg"
          alt="Login Illustration"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Box>

      {/* Lado do Formulário */}
      <Flex
        flex="1"
        align="center"
        justify="center"
        bg="gray.950"
        p={8}
        shadow="lg"
      >
        <Box width="100%" maxW="400px">
          <Heading mb={6} textAlign="center" color="teal.500" >
            Bem-vindo de volta!
          </Heading>
            <Input
              mb={2}
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              mb={2}
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          <Button
            colorScheme="teal"
            width="full"
            onClick={handleLogin}
          >
            Entrar
          </Button>
          <Text mt={4} textAlign="center">
            Não tem uma conta?{' '}
            <Link color="teal.500" href="#">
              Cadastre-se
            </Link>
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default LoginForm;

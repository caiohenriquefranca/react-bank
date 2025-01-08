"use client";

import {
  Box,
  Button,
  Flex,
  Input,
  Heading,
  Text,
  Link,
  Image,
  Stack,
} from "@chakra-ui/react";
//import { toaster } from "./ui/toaster";
import { Field } from "./ui/field";
import { useForm } from "react-hook-form";

interface FormValues {
  email: string;
  senha: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <Stack>
        <Flex height="100vh">
          {/* Lado da Imagem */}
          <Box
            flex="1"
            display={{ base: "none", md: "block" }}
            bg="black"
            position="relative"
          >
            <Image
              src="src/assets/background-login.png"
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
            <Box width="100%" maxW="400px" fontFamily="Poppins">
              <Heading
                mb={6}
                textAlign="center"
                color="teal.500"
                fontWeight="bold"
                fontSize="3xl"
              >
                Bem-vindo de volta👋
              </Heading>
              <Text mb={6} textAlign="center">
                Acesse sua conta e continue sua jornada financeira com segurança
                e praticidade.
              </Text>
              <Field
                label="Email:"
                invalid={!!errors.email}
                errorText={errors.email?.message}
              >
                <Input
                  {...register("email", { required: "Digite o seu e-mail" })}
                  borderStartColor="teal.500"
                  colorPalette="teal"
                  mb={6}
                  type="email"
                  placeholder="Digite seu email"
                />
              </Field>
              <Field
                label="Senha:"
                invalid={!!errors.senha}
                errorText={errors.senha?.message}
              >
                <Input
                  {...register("senha", { required: "Digite sua senha" })}
                  borderStartColor="teal.500"
                  colorPalette="teal"
                  mb={6}
                  type="password"
                  placeholder="Digite sua senha"
                />
              </Field>
              <Link color="teal.500" href="#" mb="2" ml="15rem" fontSize="sm">
                  Esqueçeu sua senha?
                </Link>
              <Field>
                <Button
                  mb={6}
                  colorPalette="teal"
                  colorScheme="teal"
                  width="full"
                  type="submit"
                >
                  Entrar
                </Button>
              </Field>
              <Text mt={6} textAlign="center">
                Ainda não tem uma conta?{" "}
                <Link color="teal.500" href="#">
                  Crie sua conta agora
                </Link>
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Stack>
    </form>
  );
};

export default Login;

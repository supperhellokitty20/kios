import { Button, Flex, Input, Heading, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { signIn,getSession } from 'next-auth/client'
export default function AuthForm() {
    const { toggleColorMode } = useColorMode()
    const formBackGround = useColorModeValue('gray.100', 'gray.900')
    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background={formBackGround} p={12}
                rounded={6}
            >
                        <Heading mb={6}>Login form</Heading>
                        <Input placeholder='youremail@domain.com' variant="filled" mb={3} type="email" />
                        <Input placeholder='*****' variant="filled" mb={6} type="password" />
                        <Button  mb={6} onClick={toggleColorMode} colorScheme="purple">Change color mode</Button>
                         <Button mb={6} onClick={()=>signIn()}>Login</Button> 
                         <Button onClick={()=>signIn("google")}>Google Login</Button> 
            </Flex>
        </Flex>
    )
}

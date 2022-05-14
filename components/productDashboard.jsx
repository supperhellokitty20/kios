import React from "react"
import { Grid, GridItem } from '@chakra-ui/react'
import styles from './productDashboard.module.css'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Container,
    Flex,
    Box,
    Button , ButtonGroup , Spacer , Heading , Text , Image , Icon , IconButton , Link , useColorMode , useColorModeValue
} from '@chakra-ui/react'
function ProductTable() {
    return (
        <>
            <Container>
                <Box borderWidth={1}> 
                <h1>Data table</h1>

                </Box>
            </Container>
        </>
    )
}
function ProductButtons() {
    return (
        <>
            <Container>
            <Flex  direction="row" minWidth='max-content' alignItems='center' gap='2'>
            <Box p='4'>
                <Heading size='md'>Product</Heading>
            </Box>
                <Spacer />
                <ButtonGroup gap='2'>
                    <Button colorScheme='yellow'>Import</Button>
                    <Button colorScheme='yellow'>Export</Button>
                    <Button colorScheme='teal'>Add</Button>
                </ButtonGroup>
            </Flex>
            </Container>
        </>
    )
}
export default function ProductDashboard() {
    return (
        <>
            <ProductButtons />
            <ProductTable />
        </>
    )
}
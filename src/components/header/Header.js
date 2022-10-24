import React from 'react'
import { Center, Stack, Container, Heading } from '@chakra-ui/react'
const Header = () => {
    return <Container maxW="5xl" >
        <Center
            mt={10}
            w='100%'
            h="150px"
            border='1px' borderColor='#2196F3'
        >
            <Stack>
                <Heading as='h2' size='xl'>
                    GDSC Turkiye FAQ
                </Heading>
                <Heading as='h3' size='sm' color="grey">
                    Bu sayfa sıklıkla sorulan soruları toplamak için yapılmıştır.
                </Heading>
            </Stack>

        </Center>
    </Container>
}

export default Header

import React, { useEffect, useState } from 'react'
import Accordion from '../accordion/Accordions'
import { Container, Box } from '@chakra-ui/react'
import axios from "axios";

const Faq = () => {

    const faqURL = "https://gdsc-turkey-d832c0xlt-nurettinselim.vercel.app/data.json";

    const [faq, setFaq] = useState({
        item: [],
        isLoading: true,
        error: null,
    })

    useEffect(() => {
        axios.get(faqURL).then((info) => {
            const allFaq = info.data
            setFaq({ item: allFaq, isLoading: false });
        })
            .catch((err) => setFaq({ error: err.message }));
    }, [])

    console.log("faq:", faq);
    return <Container maxW="5xl" >
        <Box mt={10} w='100%'  >
            <Accordion faq={faq.item} />
        </Box>
    </Container>
}

export default Faq

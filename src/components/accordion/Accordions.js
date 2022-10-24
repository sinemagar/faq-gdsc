import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
} from "@chakra-ui/react";


const Accordions = (faq) => {
    console.log("faq.item:", faq.faq);
    return (
        <Accordion defaultIndex={[0]} allowMultiple>

            {faq.faq.map((item, index) => (
                <AccordionItem key={index}>
                    {({ isExpanded }) => (
                        <>
                            <h2 style={{ marginTop: "5px" }}>
                                <AccordionButton _expanded={{ bg: "#E3F2FD", color: "black" }}>
                                    <Box fontSize='2xl' flex="1" textAlign="left">
                                        {item.question}
                                    </Box>
                                    {isExpanded ? (
                                        <img src="https://imgyukle.com/f/2022/10/24/n0dK26.png" width="20px" alt="denem" />
                                    ) : (
                                        <img src="https://imgyukle.com/f/2022/10/24/n0dzRv.png" width="20px" alt="denem" />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel fontSize='lg' pb={4}>
                                {item.answer}
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            ))}

        </Accordion>
    );
};

export default Accordions;

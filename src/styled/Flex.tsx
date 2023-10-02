import styled from "styled-components";

interface FlexPropsInterface {
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    justifyContent?: string;
    alignItems?: string;
    textAlign?: string;
    backgroundColor?: string;
    color?: string;
    gap?: string;
}

export const Flex = styled.div<FlexPropsInterface>`
    display: flex;
    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
    margin: ${(props) => props.margin || "0"};
    padding: ${(props) => props.padding || "0"};
    justify-content: ${(props) => props.justifyContent || "start"};
    align-items: ${(props) => props.alignItems || "start"};
    background-color: ${(props) => props.backgroundColor || "none"};
    color: ${(props) => props.color || "black"};
    gap: ${(props) => props.gap || "none"};
`
export const FlexRow = styled(Flex)`
    flex-direction: row;
`
export const FlexColumn = styled(Flex)`
    flex-direction: column;
`

import * as React from "react";
import { CodeText } from "../../components/Code/CodeText/CodeText";
import { CodeContainer } from "../../components/Code/CodeContainer/CodeContainer";

interface Props {

}
export const LandingPage: React.FC<Props> = (props: Props) => {
    const { } = props;
    return (
        <CodeContainer>
            <CodeText >hELLO</CodeText>
        </CodeContainer>
    );
};

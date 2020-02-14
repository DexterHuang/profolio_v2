
import * as React from 'react';
import { Text } from "../../Text/Text";
interface Props {
    children: any;
    varName: string;
}
export const CodeDeclaration: React.FC<Props> = (props: Props) => {
    const { children, varName } = props;
    return (
        <React.Fragment>
            <Text type="declaration">const</Text>
            <Text type="variable">{varName}</Text>
            <Text type="symbol">=</Text>
            {children}
        </React.Fragment>
    );
} 

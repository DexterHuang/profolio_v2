
import * as React from 'react';
import { CodeLine } from '../CodeLine/CodeLine';
import { CodeVariable } from '../CodeVariable/CodeVariable';
import { Text } from '../../Text/Text';
import { CodeEnd } from '../CodeEnd/CodeEnd';
import { CodeChain } from '../CodeChain/CodeChain';

interface Props {
    varName: string;
    children: string | number | any;
    noIndent?: boolean;
    equalSymbol?: "=" | ":";
    noCodeEnd?: boolean;
}
export const CodeSimpleVar: React.FC<Props> = (props: Props) => {
    const { varName, children, noIndent, equalSymbol, noCodeEnd } = props;
    let type: "string" | "number" | "enum" | "any" = "any";
    if (typeof children === "string") {
        if (children.indexOf(".") > 0) {
            type = "enum";
        } else {
            type = "string";
        }
    } else if (typeof children === "number") {
        type = "number";
    }
    return (
        <CodeLine noIndent={noIndent}>
            <CodeVariable varName={varName} equalSymbol={equalSymbol}>
                {type === "string" && <Text type="string">"{children}"</Text>}
                {type === "number" && <Text type="number">{children}</Text>}
                {type === "enum" && <CodeChain type="variable">{children as string}</CodeChain>}
                {type === "any" && children}
            </CodeVariable>
            {!noCodeEnd && <CodeEnd />}
        </CodeLine>
    );
}

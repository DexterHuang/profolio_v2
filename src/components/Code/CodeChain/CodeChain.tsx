import * as React from 'react';
import { ICodeSyntax } from '../../../Interface/ICodeSyntax';
import { Text } from "../../Text/Text";
interface Props {
    type: ICodeSyntax;
    lastType?: ICodeSyntax;
    children: string;
}
export const CodeChain: React.FC<Props> = (props: Props) => {
    let { type, lastType, children } = props;
    const list = children.split(".");
    if (!lastType) {
        lastType = type;
    }
    return (
        <React.Fragment>
            {list.map((str, index) => {
                const isLast = index === list.length - 1;
                let strType: ICodeSyntax = (isLast ? lastType : type) as ICodeSyntax;
                if (str === "this") {
                    strType = "declaration";
                }
                return (
                    <React.Fragment key={index}>
                        <Text type={strType} noMargin={!isLast}>
                            {str}
                        </Text>
                        {!isLast && (
                            <Text type="symbol" noMargin style={{ fontSize: 12 }}>
                                {"."}
                            </Text>
                        )}
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
}

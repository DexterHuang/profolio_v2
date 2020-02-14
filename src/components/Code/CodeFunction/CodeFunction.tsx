

import * as React from 'react';
import { Text } from "../../Text/Text";
import { CodeBlock } from '../CodeBlock/CodeBlock';
import { CodeEnd } from '../CodeEnd/CodeEnd';
import { CodeChain } from '../CodeChain/CodeChain';
import { CodeWrapper } from "../CodeWrapper/CodeWrapper";
import { CodeComment } from '../CodeComment/CodeComment';
import { useIsMounted } from '../../../Hook/useIsMounted';
import { CodeLine } from '../CodeLine/CodeLine';
import { CodeList } from '../CodeList/CodeList';
interface Props {
    name?: string;
    args?: string[];
    children?: any;
    block?: boolean;
    onClick?: () => Promise<void>
    comment?: string;
    inline?: boolean;
}
export const CodeFunction: React.FC<Props> = (props: Props) => {
    const { name, args: params = [], children, block, onClick, comment, inline } = props;
    const [message, setMessage] = React.useState<string>();
    const isMounted = useIsMounted();
    const [processing, setProcessing] = React.useState(false);
    let Wrapper = CodeLine;
    if (inline) {
        Wrapper = React.Fragment;
    }
    return (
        <React.Fragment>
            {comment && <CodeLine>
                <CodeComment>{comment}</CodeComment>
            </CodeLine>}
            <Wrapper>
                <CodeWrapper onClick={onClick ? async () => {
                    if (processing) {
                        return;
                    }
                    try {
                        setProcessing(true);
                        await onClick();
                        setProcessing(false);
                    } catch (e) {
                        console.error(`${e}`);
                        setMessage(`${e}`);
                        setProcessing(false);
                    }
                } : undefined}>
                    {name && <CodeChain type="variable" lastType="function">
                        {name}
                    </CodeChain>}
                    <Text type="symbol" noMargin>(</Text>
                    <CodeList noBracket items={params.map(i => <CodeChain type="variable">{i}</CodeChain>)} />
                    <Text type="symbol">)</Text>
                    {!name && <Text type="declaration">=></Text>}
                    {!name && children && children}
                </CodeWrapper>
                {block &&
                    <CodeBlock after={message && <CodeComment>{message}</CodeComment>} showLoading={processing}>
                        {children}
                    </CodeBlock>
                }
                {!block && <CodeEnd />}
            </Wrapper>
        </React.Fragment>
    );
}



import * as React from 'react';
import { Text } from '../../Text/Text';
import { CodeLine } from '../CodeLine/CodeLine';
import { CodeBlock } from '../CodeBlock/CodeBlock';
import { CodeIndent } from '../CodeIndent/CodeIndent';
import { CodeEnd } from '../CodeEnd/CodeEnd';

interface Props {
    items: any[];
    noBracket?: boolean;
    block?: boolean;
    hideCodeEnd?: boolean;
    noIndent?: boolean;
}
export const CodeList: React.FC<Props> = (props: Props) => {
    const { items, noBracket, block, hideCodeEnd, noIndent } = props;
    return (<React.Fragment>
        {!noBracket && <Text type="symbol">[</Text>}
        {block && <br />}
        {items.map((i, index) => {
            const isLast = index === items.length - 1;
            return <React.Fragment key={index}>
                {block && <CodeIndent>
                    <CodeLine noIndent={noIndent}>
                        {i}
                        {!isLast && <Text type="symbol" style={{ marginLeft: -4 }}>,</Text>}
                    </CodeLine>
                </CodeIndent>}
                {!block && <React.Fragment>
                    {i}
                    {!isLast && <Text type="symbol" style={{ marginLeft: -4 }}>,</Text>}
                </React.Fragment>}
            </React.Fragment>
        })}
        {!noBracket &&
            <CodeLine noIndent={noIndent} noNewLine={!block}>
                <Text type="symbol" noMargin>]</Text>
                {!hideCodeEnd && <CodeEnd />}
            </CodeLine>}

    </React.Fragment>
    );
}

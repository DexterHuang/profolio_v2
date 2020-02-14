import * as React from 'react';
import { CodeBlock } from '../CodeBlock/CodeBlock';
import { Text } from '../../Text/Text';
import { CodeLine } from '../CodeLine/CodeLine';
import { CodeList } from '../CodeList/CodeList';
import { CodeWrapper } from '../CodeWrapper/CodeWrapper';
import { CodeIndent } from '../CodeIndent/CodeIndent';

interface Props {
    obj: any;
    block?: boolean
}
export const CodeObject: React.FC<Props> = (props: Props) => {
    const { obj, block } = props;
    return (
        <React.Fragment>
            <Text type="symbol">{"{"}</Text>
            <CodeList items={Object.entries(obj || {}).map(([key, value]) => <React.Fragment>
                <Text type="variable" noMargin>{key}</Text>
                <Text type="symbol">:</Text>
                {value}
            </React.Fragment>)} noBracket block={block} />
            <CodeLine noIndent={!block}>
                <Text type="symbol">{"}"}</Text>
            </CodeLine>
        </React.Fragment>
    );
}

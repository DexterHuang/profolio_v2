

import * as React from 'react';
import { CodeLine } from '../CodeLine/CodeLine';
import { Text } from '../../Text/Text';

interface Props {
    children: string;
}
export const CodeDivider: React.FC<Props> = (props: Props) => {
    const { children } = props;
    return (
        <React.Fragment>
            <CodeLine/>
            <CodeLine>
                <Text type="comment">/* -------------- {children} -------------- */</Text>    
            </CodeLine>  
        </React.Fragment>
    );
}

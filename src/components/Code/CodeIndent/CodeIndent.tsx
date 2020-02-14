
import * as React from 'react';
import { IndentContext } from '../../../Context/IndentContext';

interface Props {
    children: any
}
export const CodeIndent: React.FC<Props> = (props: Props) => {
    const { children } = props;
    return (<IndentContext.Consumer>
        {({ indent }) =>
            <IndentContext.Provider value={{ indent: indent + 32 }}>
                {children}
            </IndentContext.Provider>}
    </IndentContext.Consumer>
    );
}

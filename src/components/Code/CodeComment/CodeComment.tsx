
import * as React from 'react';
import { Text } from "../../Text/Text";
import { CodeLine } from '../CodeLine/CodeLine';
interface Props {
    children?: string | any[] | any;
}
export const CodeComment: React.FC<Props> = (props: Props) => {
    const { children, } = props; 
    if(children instanceof Array){
        return <React.Fragment>
        <CodeLine>
            <Text type="comment">/**</Text>
        </CodeLine> 
        {children.filter(c => c).map( (c, i) => <CodeLine key={i}>
            <Text type="comment" style={{ marginLeft: 8, paddingRight: 16}}>*</Text> 
            {c}
        </CodeLine>)}
        <CodeLine>
            <Text type="comment" style={{marginLeft: 8}}>*/</Text>
        </CodeLine> 
    </React.Fragment>
    }
    if(typeof children === 'string' ){
        return <Text type="comment">// {children as string || ''}</Text>
    }
    return (<React.Fragment> 
        <CodeLine> 
        <Text type="comment">// {' '}</Text>
        {children}
        </CodeLine>
    </React.Fragment>);
}



import * as React from 'react';
import { Text } from '../../Text/Text';
import { CodeVariable } from '../CodeVariable/CodeVariable';
import { CodeWrapper } from '../CodeWrapper/CodeWrapper';
import { CodeEnd } from '../CodeEnd/CodeEnd';

interface Props {
    value: boolean;
    label: string;
    onChange: (value: boolean) => void;
}
export const CodeCheckbox: React.FC<Props> = (props: Props) => {
    const { value, label, onChange } = props;
    return (
        <React.Fragment>
            <CodeVariable varName={label}>
                <CodeWrapper onClick={() => {
                    onChange(!value);
                }}>
                    <Text type="declaration" >{value + ''}</Text>
                    <CodeEnd />
                </CodeWrapper>
            </CodeVariable>
        </React.Fragment>
    );
}

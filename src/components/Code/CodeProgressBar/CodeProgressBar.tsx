import * as React from 'react';
import { ICodeSyntax } from '../../../Interface/ICodeSyntax';
import { Text } from '../../Text/Text';
import { CodeWrapper } from '../CodeWrapper/CodeWrapper';

interface Props {
    max: number;
    current: number;
    filledColor?: ICodeSyntax;
    emptyColor?: ICodeSyntax;
    length?: number;
    bracketColor?: ICodeSyntax;
    reverse?: boolean;
}
export const CodeProgressBar: React.FC<Props> = (props: Props) => {
    const { max, filledColor = "comment", emptyColor = "comment", bracketColor = "comment", length = 10, reverse } = props;
    let { current } = props;
    if (current > max) {
        current = max;
    }
    if (current < 0) {
        current = 0;
    }
    let filledAmount = Math.floor(current / max * length);
    let emptyAmount = length - filledAmount;
    if (filledAmount < 0 || Number.isNaN(filledAmount)) {
        filledAmount = 0;
    }
    if (emptyAmount < 0 || Number.isNaN(emptyAmount)) {
        emptyAmount = 0;
    }
    return (<CodeWrapper>
        <Text type={bracketColor} noMargin>
            [
        </Text>
        <Text type={filledColor} noMargin>
            {new Array(reverse ? emptyAmount : filledAmount).fill(0).reduce((p, c) => `${p}/`, '')}
        </Text>
        <Text type={emptyColor} noMargin>
            {new Array(reverse ? filledAmount : emptyAmount).fill(0).reduce((p, c) => `${p}-`, '')}
        </Text>
        <Text type={bracketColor} noMargin>
            ]
        </Text>
        <Text type={bracketColor}>({Math.round(current) + ''}/{Math.round(max) + ''})</Text>
    </CodeWrapper>
    );
}

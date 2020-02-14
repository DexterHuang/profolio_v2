

import * as React from 'react';
import { ItemTier } from '../../../Enum/ItemTier';
import { Color } from '../../../Theme/Color';
interface Props {
    tier: ItemTier;
    style?: React.CSSProperties;
}
export const CodeTierDisplay: React.FC<Props> = (props: Props) => {
    const { tier, style } = props;

    return (
        <div style={{ height: 8, width: 8, borderRadius: 2, backgroundColor: Color[tier], marginTop: 2, ...style }}>
        </div>
    );
}

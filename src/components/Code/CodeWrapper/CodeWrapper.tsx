
import * as React from 'react';

interface Props {
    children?: any;
    onClick?: () => any;
    style?: React.CSSProperties;
}
export const CodeWrapper: React.FC<Props> = (props: Props) => {
    const { children, onClick, style } = props;
    return (
        <div style={{
            display: "inline",
            cursor: onClick ? "pointer" : "text",
            userSelect: onClick ? "none" : "auto",
            ...style
        }} onClick={onClick}>
            {children}
        </div>
    );
}

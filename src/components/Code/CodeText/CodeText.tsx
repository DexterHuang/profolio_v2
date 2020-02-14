import * as React from "react";
import { Color } from "../../../Theme/Color";
import { ICodeSyntax } from "../../../Interface/ICodeSyntax";
interface Props {
    children: string | string[] | number;
    type?: ICodeSyntax;
    noMargin?: boolean;
    style?: React.CSSProperties;
    styleType?: "error" | "warning";
}
export const CodeText: React.FC<Props> = React.memo((props: Props) => {
    const { children, type = "string", noMargin, style, styleType } = props;
    let codeStyle: React.CSSProperties = {
        marginRight: noMargin ? undefined : 4, whiteSpace: "nowrap",
        fontSize: 14,
    };
    switch (type) {
        case "string": {
            codeStyle = { ...codeStyle, color: Color.STRING };
            break;
        }
        case "function": {
            codeStyle = { ...codeStyle, color: Color.FUNCTION };
            break;
        }
        case "interface": {
            codeStyle = { ...codeStyle, color: Color.INTERFACE };
            break;
        }
        case "keyword": {
            codeStyle = { ...codeStyle, color: Color.KEY_WORD };
            break;
        }
        case "declaration": {
            codeStyle = { ...codeStyle, color: Color.DECLARATION };
            break;
        }
        case "symbol": {
            codeStyle = { ...codeStyle, color: Color.SYMBOL };
            break;
        }
        case "variable": {
            codeStyle = { ...codeStyle, color: Color.VARIABLE };
            break;
        }
        case "comment": {
            codeStyle = { ...codeStyle, color: Color.COMMENT };
            break;
        }
        case "number": {
            codeStyle = { ...codeStyle, color: Color.NUMBER };
            break;
        }
        case "variable-dark": {
            codeStyle = { ...codeStyle, color: Color.VARIABLE_DARK };
            break;
        }
    }
    if (styleType === "error") {
        codeStyle = {
            ...codeStyle,
            textDecorationLine: "underline",
            textDecorationStyle: "wavy",
            textDecorationColor: Color.ERROR,
        };
    }
    if (styleType === "warning") {
        codeStyle = {
            ...codeStyle,
            textDecorationLine: "underline",
            textDecorationStyle: "wavy",
            textDecorationColor: Color.WARNING,
        };
    }
    return (
        <i
            style={{
                ...codeStyle,
                ...style,
            }}>
            {children}
        </i>
    );
});

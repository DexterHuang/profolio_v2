

import * as React from 'react';
import { Color } from '../../../Theme/Color';
import styled from "styled-components";
import { ISelectItem } from "../../../Interface/ISelectItem";
import { Text } from '../../Text/Text';
import { CodeDeclaration } from "../CodeDeclaration/CodeDeclaration";
import { CodeWrapper } from '../CodeWrapper/CodeWrapper';
import { CodeEnd } from '../CodeEnd/CodeEnd';
import { ReactComponent as VariableIcon } from "../../../Icons/variable.svg";
import { useObservable, useObserver } from 'mobx-react-lite';
interface Props {
    options: ISelectItem[];
    value?: ISelectItem;
    label: string;
    enumStr?: string;
    onChange: (selected: ISelectItem) => any;
}
export const CodeSelect: React.FC<Props> = (props: Props) => {
    const { options, enumStr, label, value, onChange } = props;
    const [expanded, setExpanded] = React.useState(false);
    let selectedDisplay: any;
    if (value && value.display) {
        if (typeof value.display === "string") {
            selectedDisplay = <Text type="variable">{value.display}</Text>
        } else {
            selectedDisplay = value.display();
        }
    } else {
        selectedDisplay = <Text type="variable" styleType="error">CHANGE_ME</Text>
    }
    return useObserver(() => <React.Fragment>
        <CodeDeclaration varName={label}>
            {enumStr && <React.Fragment>
                <Text type="variable" noMargin>{enumStr}</Text>
                <Text type="symbol" noMargin>.</Text>
            </React.Fragment>}
            {expanded && <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", }}
                onClick={() => setExpanded(false)} />}
            <CodeWrapper style={{ position: "relative" }} onClick={() => {
                setExpanded(!expanded);
            }}>
                {expanded && <CodeWrapper style={{ opacity: 0 }}>
                    {selectedDisplay}
                </CodeWrapper>}
                {!expanded && selectedDisplay}
                {expanded && <div style={{
                    position: "absolute", top: 18, left: 0,
                    minWidth: 128,
                    backgroundColor: Color.PRIMARY_MEDIUM
                }}>
                    {options.map(({ value, display }, i) => <Option onClick={() => {
                        onChange({ value, display });
                    }} key={i}>
                        <VariableIcon style={{ marginRight: 4 }} />
                        {display()}
                    </Option>)}
                </div>}
            </CodeWrapper>
        </CodeDeclaration>
        <CodeEnd />
    </React.Fragment>
    );
}

const Option = styled.div`
    flex-direction: row;
    align-items: center;
    background-color: ${Color.PRIMARY_MEDIUM}; 
  &:hover {
    background-color: ${Color.HIGHLIGHT_OVERLAY};  
  }
`
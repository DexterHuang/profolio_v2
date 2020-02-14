import * as React from 'react';
import { ItemStack } from '../../../Model/ItemStack';
import { ItemDisplay } from '../../ItemDisplay/ItemDisplay';
import { Text } from '../../Text/Text';
import { CodeTierDisplay } from '../CodeTierDisplay/CodeTierDisplay';
import { CodeToolTip } from '../CodeToolTip/CodeToolTip';
import { ReactComponent as FoldUpIcon } from "../../../Icons/fold-up.svg";
import MAIN_STORE from '../../../Store/MainStore';
import { NavHandler } from "../../../Handler/NavHandler";
import { PageRoute } from '../../../Enum/PageRoute';
interface Props {
    item: ItemStack;
    tip?: () => React.ReactElement;
    name?: any;
}
export const CodeItem: React.FC<Props> = (props: Props) => {
    let { item, tip, name } = props;
    if (!item || !item.name) {
        return <Text type="declaration">null</Text>
    }
    if (!tip) {
        tip = () => <ItemDisplay item={item} />;
    }
    const onClick = React.useCallback(() => {
        NavHandler.navigateTo("ITEM_DETAILS", { data: { item } });
    }, [item]);
    const player = MAIN_STORE.getPlayer();
    return (<CodeToolTip tip={tip} onClick={onClick}>
        <div style={{ flexDirection: "row", alignItems: "center" }}>
            <CodeTierDisplay tier={item.tier} style={{ marginRight: 4 }} />
            <Text type={player.canUse(item) ? "variable" : "variable-dark"}>{name || item.getInvDisplayName()}</Text>
            {player.isBetterThenEquipped(item) && <FoldUpIcon style={{ height: "50%" }} />}
        </div>
    </CodeToolTip>
    );
}

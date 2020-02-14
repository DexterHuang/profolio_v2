

import { useObserver } from 'mobx-react-lite';
import * as React from 'react';
import { ItemStack } from "../../../Model/ItemStack";
import { Shop } from '../../../Model/Shop';
import MAIN_STORE from '../../../Store/MainStore';
import { ShopInvItemDisplay } from "../../ShopInvItemDisplay/ShopInvItemDisplay";
import { Text } from '../../Text/Text';
import { CodeToolTip } from '../CodeToolTip/CodeToolTip';
import { CodeWrapper } from '../CodeWrapper/CodeWrapper';
import { NPC } from '../../../Enum/NPC';
import { CodeItem } from '../CodeItem/CodeItem';

interface Props {
    shop: Shop;
    item: ItemStack;
    npc: NPC;
}
export const CodeShopInvItem: React.FC<Props> = (props: Props) => useObserver(() => {
    const { shop, item, npc } = props;
    const player = MAIN_STORE.getPlayer();
    return (
        <CodeItem tip={() => <ShopInvItemDisplay npc={npc} item={item} shop={shop} />} item={item}
            name={`${item.getCamelCase()}__$${item.price}${item.amount > 1 ? `_x${item.amount}` : ''}`} />
    );
})

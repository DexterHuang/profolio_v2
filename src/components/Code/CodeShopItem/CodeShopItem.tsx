

import * as React from 'react';
import { useObserver } from 'mobx-react-lite';
import { ItemType } from '../../../Enum/ItemType';
import { CodeWrapper } from '../CodeWrapper/CodeWrapper';
import { Text } from '../../Text/Text';
import { IShopItem } from '../../../Interface/IShopItem';
import { CodeToolTip } from '../CodeToolTip/CodeToolTip';
import { ShopItemDisplay } from '../../ShopItemDisplay/ShopItemDisplay';
import { Shop } from '../../../Model/Shop';
import MAIN_STORE from '../../../Store/MainStore';
import { NPC } from "../../../Enum/NPC";
import { CodeItem } from '../CodeItem/CodeItem';

interface Props {
    shop: Shop;
    index: number;
    shopItem: IShopItem;
    npc: NPC;
}
export const CodeShopItem: React.FC<Props> = (props: Props) => useObserver(() => {
    const { shopItem, shop, index, npc } = props;
    const player = MAIN_STORE.getPlayer();
    const item = shop.createItem(player.getLevel(), index);
    return (<CodeItem item={item}
        tip={() => <ShopItemDisplay npc={npc} shopItem={shopItem} shop={shop} index={index} item={item} />}
        name={`${item.getCamelCase()}__$${shopItem.price}`}
    />
    );
})

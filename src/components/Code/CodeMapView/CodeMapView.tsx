
import * as React from 'react';
import { useObserver } from 'mobx-react-lite';
import { Text } from '../../Text/Text';
import { CodeComment } from '../CodeComment/CodeComment';
import { CodeWrapper } from "../CodeWrapper/CodeWrapper";
import MAIN_STORE from '../../../Store/MainStore';
import { Vector2 } from '../../../Model/Vector2';
import { FirebaseHandler } from '../../../Handler/FirebaseHandler';
import { DatabaseCollection } from '../../../Enum/DatabaseCollection';
import { Tile } from "../../../Model/Tile";
import { TileView } from "../../../Model/TileView";
import { CameraHandler } from "../../../Handler/CameraHandler";
import { PlayerHandler } from "../../../Handler/PlayerHandler";

interface Props {

}
export const CodeMapView: React.FC<Props> = (props: Props) => useObserver(() => {
    return null;
    // const { } = props;
    // const { currentMap } = MAIN_STORE;
    // const playerPos = PlayerHandler.getCurrentPosition();
    // if (!playerPos) {
    //     return null;
    // }
    // const getChar = (tile: TileView) => {
    //     const { isEmpty } = tile;
    //     let char = '.';
    //     if (!isEmpty) {
    //         char = 'X';
    //     }
    //     if (Vector2.equals(tile.vec, playerPos)) {
    //         char = 'P'
    //     }
    //     return char;
    // }
    // return (currentMap ?
    //     <React.Fragment>
    //         <CodeComment  >
    //             {CameraHandler.getView().map((row, rowIndex) => <CodeWrapper style={{ marginLeft: 16 }} key={rowIndex}>
    //                 {row.map(tile => <Text style={{ letterSpacing: 8 }} type="comment" key={tile.getId()}>
    //                     {getChar(tile)}
    //                 </Text>)}
    //             </CodeWrapper>)}
    //         </CodeComment>
    //     </React.Fragment>
    //     : null
    // );
});
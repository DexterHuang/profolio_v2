import * as React from "react";
import { hot } from "react-hot-loader";
import wallpaper from "../../assets/img/wallpaper.jpg";
import { Color } from "../../theme/Color";
import "../../theme/style.scss";
import { NavBar } from "../NavBar/NavBar";
import { NavDrawer } from "../NavDrawer/NavDrawer";
import "./AppLayout.scss";
import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { LandingPage } from "../../pages/LandingPage/LandingPage";
class AppLayout extends React.Component<{}, undefined> {
    public createDot(color: string) {
        const size = 9;
        return <i style={{
            height: size, width: size, borderRadius: size / 2, backgroundColor: color,
            marginLeft: 6,
        }} />;
    }
    public render() {
        return (
            <div style={{
                backgroundImage: `url('${wallpaper}')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "100vh", width: "100vw",
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <div className={"codeWindow"} style={{ backgroundColor: Color.PRIMARY_DARKER, overflow: "hidden" }}>
                    <div style={{
                        flexDirection: "row", justifyContent: "flex-end", padding: "4px 6px",
                        backgroundColor: Color.PRIMARY_LIGHT,
                    }}>
                        {this.createDot("rgb(241,224,90)")}
                        {this.createDot("rgb(48,193,68)")}
                        {this.createDot("rgb(246,86,82)")}
                    </div>
                    <div style={{ flexDirection: "row", flex: 1 }}>
                        <NavBar />
                        <NavDrawer />
                        <div style={{ flex: 1, overflow: "auto" }}>
                            <Router>
                                <Route path="/" component={LandingPage} />
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

declare let module: object;

export default hot(module)(AppLayout);

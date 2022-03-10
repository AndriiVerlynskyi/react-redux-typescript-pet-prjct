import { IRouter } from "../../types/router";
import { INavBar } from "../../types/InavBar";

export interface IRootState {
    router: IRouter,
    navBar: INavBar
}
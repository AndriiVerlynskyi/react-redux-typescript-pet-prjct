import axios from 'axios';
import { navBarUrl } from "../../../../back/routes";

export function getNavBarData () {
    console.log(' function is called:', axios(navBarUrl))
    return axios(navBarUrl)
}
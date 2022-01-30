import axios from 'axios';

export function getNavBarData (navBarUrl: string) {
    return axios(navBarUrl)
}
export interface INavItemsList {
    navTitle: string,
    listElements: {
        title: string,
        icon: string,
        isNew: boolean,
        dropdownElementsList?: string[]
    }[]
}

export interface INavButtonProps {
    title: string,
    isNew: boolean
}

export interface INavBar {
    customerTier: string,
    navItemsList: INavItemsList[]
}

export interface navBarState {
    pending: boolean,
    navBar: INavBar,
    error: string | null
}

export interface FetchNavBarDataSuccessPayload {
    error: string
}

export interface FetchNavBarDataFailurePayload{
    error: string
}

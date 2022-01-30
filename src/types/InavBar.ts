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
    icon: string,
    isNew: boolean
}

export interface INavBar {
    customerTier: string,
    navItemsList: INavItemsList[]
}

export interface navBarState {
    pending: boolean,
    navBarData: INavBar,
    error: string | null
}
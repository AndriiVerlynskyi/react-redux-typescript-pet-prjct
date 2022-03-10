export interface INavButtonProps {
    navButtonItem:{
        title: string,
        icon: string,
        isNew: boolean,
        withCollapseWrapper: boolean,
        dropdownElementsList: string[]
    }
}

export interface dropdownElementsList {
    dropdownElementName: string,
    dropdownElementLink: string
}

export interface INavButton {
    title: string,
    icon: string,
    link: string,
    isNew: boolean,
    withCollapseWrapper: boolean,
    dropdownElementsList: dropdownElementsList[]
}

export interface INavItemsList {
    navTitle: string,
    listElements: INavButton[]
}

export interface INavBar {
    navItemsList: INavItemsList[]
}

export interface navBarState {
    pending: boolean,
    navBarData: INavBar,
    error: string | null
}
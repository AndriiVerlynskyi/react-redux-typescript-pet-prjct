import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './redux/store';


export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


// export const useTimeoutReset = ( timeout: number, func: Function ) => {

//     let timer: number | null = null;

//     function setTimer ( timeout: number, func: Function ) {
//         timer = window.setTimeout( () => {
//             func(true)
//         }, timeout)
//     }

//     function clearTimer ( timerId: number ) {
//         clearTimeout(timerId)
//     }
// }
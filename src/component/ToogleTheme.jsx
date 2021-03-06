import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { toogleTheme } from '../actions';

export default function ThemeToogle() {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    return (
        <div className="toogle-theme">
            <button className={theme ? "btn btn-light" : "btn btn-dark"}
                onClick={()=>{
                    dispatch(toogleTheme());    
                }}
            >
                {theme ? "Dark" : "Light"}
            </button>
        </div>
    )
}

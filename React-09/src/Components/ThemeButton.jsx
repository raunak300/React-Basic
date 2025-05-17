import React from 'react'
import useTheme, { ThemeProvider,ThemeContext } from '../contexts/theme';
export default function ThemeBtn() {
    const {themeMode,lightTheme,darkTheme}=useTheme()
    function onChangeBtn(e){
        const darkModeStatus=e.currentTarget.checked
        if(darkModeStatus){darkTheme();}
        else{ lightTheme();}
    }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                checked={themeMode==="dark"}
                onChange={onChangeBtn}
                className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}


//(6.)
//in here we can see that 
// app.jsx have the function darkmode and lightmode means they explained what to do

// and App.jsx have the useEffect that manages on change to themeMode
// on checked it is set on dark and function is made to help that as WEBGL_lose_context
// and in here out useTheme hook helped that is created to send the context or current context to things

//(7.)
// Card.jsx does not require knowing about the things as on change of themeMode useEffect will work and update everything
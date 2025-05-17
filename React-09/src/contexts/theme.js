import { createContext,useContext } from "react";

export const ThemeContext=createContext({
    themeMode:"light" ,
    darkTheme:()=>{} ,
    lightTheme:()=>{}
});

export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){   
    // this is a userDefined Hook
    return useContext(ThemeContext);
}


// 1.
// we are creating a context this time with some predefined values that could be understandable to other components when called
// import { createContext,useContext } from "react";

// export const ThemeContext=createContext({
//     themeMode:"light" ,
//     darkTheme:()=>{} ,
//     lightTheme:()=>{}
// });

// these are some predefined things that you are seeing,hence we can pass variables and some methods in here as well as you can see



//(2.)
// look at this

// export const ThemeProvider=ThemeContext.Provider

// this actucally shortens things up in here for us like instead of creating a .jsx file and wrapping things there we can pass this thing from here onlyy and do things for us



//(3.)
//look here 
// export default function useTheme(){   
//     // this is a userDefined Hook
//     return useContext(ThemeContext);
// }

// we did create a user defined hook that is actually followed in real to make things easy in here like 

// earlier we had 2 folder 
// 1->js that carried the createcontext portion
// 2->then there is this jsx file that is used to 
// do the (provider) thing in here as we know

// 3->we got to know that we can create custom hooks in here that brings things up preety formally that we dont need to define the
// ueContext+ ThemeContext everywhere and will be handeled by hook (usetheme)

// 4->that we cann pass some values like props  in here even befor anything could happend

// these props could be method or some variable as well

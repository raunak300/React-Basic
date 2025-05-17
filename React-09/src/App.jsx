import { useState } from 'react'
import './App.css'
import { ThemeContext, ThemeProvider } from './contexts/theme'
import { useEffect } from 'react'
import ThemeButton from './Components/ThemeButton'
import Card from './Components/Card'
function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {  // to know when it must change
    document.querySelector('html').classList.remove("light","dark")
    //remove what existed
    //then add the themeMode
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])


  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* theme btn */}
              <ThemeButton />
            </div>
            <div className="w-full max-w-sm mx-auto">
              {/* card  */}
              <Card />
            </div>
          </div>
        </div>

      </ThemeProvider>
    </>
  )
}

export default App


//(4.)

//now need is to do wrap with values provided



//(5.)
//<ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
// since the functunality in ThemeContext.js was undefined we can make it better by workin on the function in here and they will be defined in here only and functunality goes at the end to them in Themecontext



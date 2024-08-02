import { useEffect, useState } from 'react'
import MainHeader from '../ui/MainHeader'
import NavBar from '../ui/NavBar'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../ui/resizable'
import { Outlet, useLocation } from 'react-router-dom'
import Home from './home'
import { ScrollArea } from '../ui/scroll-area'

const Root = () => {
  const location = useLocation()
  const [isHome, setIsHome] = useState(true)
  const [isNavHidden, setIsNavHidden] = useState(false)
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const hideNav = () => {
    setIsNavHidden(!isNavHidden)
  }

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsHome(false)
    } else {
      setIsHome(true)
    }
  }, [location.pathname])

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="sm:w-screen min-h-svh sm:min-h-svh"
    >
      <ResizablePanel
        defaultSize={screenSize.width < 768 || isNavHidden ? 0 : 15}
        maxSize={screenSize.width < 768 || isNavHidden ? 0 : 25}
        minSize={screenSize.width < 768 || isNavHidden ? 0 : 13}
        className="sm:border-l"
      >
        <NavBar />
      </ResizablePanel>
      {screenSize.width < 768 || isNavHidden ? '' : <ResizableHandle />}
      <ResizablePanel className="sm:border-r">
        <MainHeader
          hideNav={hideNav}
          isNavHidden={isNavHidden}
          screenSize={screenSize}
        />
        <ScrollArea className="h-[calc(100svh-56px)] lg:h-[calc(100svh-60px)]">
          <div className="m-4">{isHome ? <Home /> : <Outlet />}</div>
        </ScrollArea>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default Root

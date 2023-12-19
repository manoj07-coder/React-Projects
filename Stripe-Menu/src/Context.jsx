import React, {useContext,useState} from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({children}) =>{

    const [isSidebarOpen,setisSidebarOpen] = useState(false)
    const [isSubmenuOpen,setIsSubmenuOpen] = useState(false)
    const [page,setPage] = useState({page:'',links:[]})
    const [location, setLocation] = useState({})

    const openSidebar = () =>{
        setisSidebarOpen(true)
    }

    const closeSidebar = () => {
        setisSidebarOpen(false)
    }

    const openSubmenu = (text,coordinates) => {
        const page = sublinks.find((link)=> link.page === text)
        setPage(page)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return (
        <AppContext.Provider 
        value={{
            isSidebarOpen,
            isSubmenuOpen,
            openSidebar,
            closeSidebar,
            openSubmenu,
            closeSubmenu,
            page,
            location,
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

import React,{useState,useRef,useEffect} from 'react'
import { useGlobalContext } from './Context'

const Submenu = () => {

    const {
        isSubmenuOpen,
        page:{page,links},
        location,
    } = useGlobalContext()

    const container = useRef(null)

    const [colums,setColums] = useState('col-2')

    useEffect(()=>{
        setColums('col-2')
        const submenu = container.current;
        const {center,bottom} = location;
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`

        if(links.length === 3){
            setColums('col-3')
        }
        if(links.length > 3){
            setColums('col-4')
        }
    },[page,location,links])

    

  return (
    <aside className={`${isSubmenuOpen?'submenu show ':'submenu '}`} ref={container}>
        <section>
            <h4>{page}</h4>
            <div className={`submenu-center ${colums}`}>
                {
                    links.map((link,index)=>{
                        const {url,icon,label} = link;
                        return(
                            <a key={index} href={url}>
                                {icon}
                                {label}
                            </a>
                        )
                    })
                }
            </div>
        </section>
    </aside>
  )
}

export default Submenu
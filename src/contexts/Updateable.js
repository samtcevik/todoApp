import {createContext, useState} from 'react';


export const UpdateAbleContext = createContext();


export default function UpdateableProvider({children}){
    const[isShow, setIsShow] = useState(false);
    const[selectedItem, setSelectedItem]=useState({});
    const[selectedTitle, setSelectedTitle] =useState("");
    const[selectedDescription,setSelectedDescription] = useState("")

    return(
        <UpdateAbleContext.Provider value={{isShow, setIsShow, selectedItem, setSelectedItem, selectedTitle, selectedDescription, setSelectedTitle, setSelectedDescription}}>
            {children}
        </UpdateAbleContext.Provider>
    )


}
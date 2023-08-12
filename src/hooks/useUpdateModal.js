import { useContext } from "react"
import { UpdateAbleContext } from "../contexts/Updateable"

const useUpdateModal = () =>{
    return useContext(UpdateAbleContext);
}

export default useUpdateModal;
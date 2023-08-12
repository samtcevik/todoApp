import { useContext } from "react";
import { ItemOperationContext } from "../contexts/ItemOperation"

 const useItemOperation = ()=>{
    return useContext(ItemOperationContext);
}

export default useItemOperation;
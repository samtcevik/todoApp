import { createContext, useEffect, useState } from "react";

export const ItemOperationContext = createContext();

export default function ItemOperationProvider({ children }) {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState({});
    const [id, setId] = useState(1);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);
    const [filterItems, setFilterItems] = useState([]);

    const createItem = async () => {
        if (item.description === "" || item.title === "") {
            alert("Please fill Title and Description")
            return false;
        }
        setId(id + 1);
        const stringId = id.toString();
        const newItem = { stringId, isCompleted : false, ...item }
        const newItems = [...items, newItem];

        setItems(newItems);
        setFilterItems(newItems);
        setDescription("");
        setTitle("");
    };

    const updateActivate =  (index, buttonName)=>{
        let V = isCompleted;
        if(buttonName === "active"){
            setIsCompleted(false);
            V = false;
        }
        else{
            setIsCompleted(true);
            V = true;
        }
            
        const item = items.find((item)=>{
            return item.stringId === index;
        })
        const editedItem = {...item, isCompleted:V}
        editItemById(index, editedItem)
    }

    const deleteItem = async (indexArr) => {
        let selectedIndex = indexArr[0].id;
        const deletedItemList = items.filter((itm) => {
            return itm.stringId !== selectedIndex;
        })

        setItems(deletedItemList);
        setFilterItems(deletedItemList);
    };
    const editItemById = async (id, editedItem) => {
        const updatedItems = items.map((item) => {
            if (item.stringId === id) {
                return { ...item, ...editedItem };
            }

            return item;
        })

        setItems(updatedItems);
        setFilterItems(updatedItems);
    };

    const showAllItem = async()=>{
        setFilterItems(items);
    }

    const showActiveItem = async()=>{
        const filtered = items.filter((item)=>{
            return item.isCompleted === false;
        });

        setFilterItems(filtered);
    }

    const showCompleteItem = async()=>{
        const filtered = items.filter((item)=>{
            return item.isCompleted === true;
        });

        setFilterItems(filtered);
    }


    return (
        <ItemOperationContext.Provider value={
            {
                items,
                item,
                id,
                setId,
                setItem,
                createItem,
                deleteItem,
                title,
                setTitle,
                description,
                setDescription,
                editItemById,
                isCompleted,
                setIsCompleted,
                updateActivate,
                showAllItem,
                showActiveItem,
                showCompleteItem,
                filterItems,
                setFilterItems
            }
        }>
            {children}
        </ItemOperationContext.Provider>
    )
}



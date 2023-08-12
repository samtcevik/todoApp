
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import useUpdateModal from '../hooks/useUpdateModal';
import useItemOperation from '../hooks/useItemOperation';

function Footer() {
    const { setIsShow, setSelectedItem } = useUpdateModal();
    const { items, item, createItem, deleteItem, showAllItem, showActiveItem, showCompleteItem } = useItemOperation()

    const handleAddItem = () => {
        createItem(item);
    }

    const handleDeleteItem = () => {
        var checkedBoxes = document.querySelectorAll('input[name=checkboxes]:checked');
        if (checkedBoxes.length > 1) {
            alert("Cannot delete one more items.");
            return false;
        }

        if (checkedBoxes.length === 0) {
            alert("Please check item you want to delete.")
            return false;
        }

        deleteItem(checkedBoxes);
        checkedBoxes = document.querySelectorAll('input[name=checkboxes]:checked');
        checkedBoxes.forEach(element => {
            let elm = document.getElementById(element.id)
            if (elm.checked === "checked") {
                elm.click();
            }
        });
    }

    const handleModified = () => {
        
        const checkedBoxes = document.querySelectorAll('input[name=checkboxes]:checked');
        if (checkedBoxes.length > 1) {
            alert("Cannot modify one more items.");
            return false;
        }

        if (checkedBoxes.length === 0) {
            alert("Please check item you want to modify.")
            return false;
        }
        setIsShow(true);
        const id = checkedBoxes[0].id;
        const selectedItem = items.find((item) => {
            return item.stringId === id;
        });

        setSelectedItem(selectedItem);
    }

    const showAll = () => {
        showAllItem();
    }

    const showActive = () => {
        showActiveItem();
    }

    const showComplete = () => {
        showCompleteItem();
    }

    return (
        <div className='mb-2 mt-5'>
            <Stack direction="horizontal" gap={3}>
                <div style={{ cursor: "pointer" }} onClick={showAll}>All</div>
                <div className="vr" />
                <div style={{ cursor: "pointer" }} onClick={showActive}>Active</div>
                <div className="vr" />
                <div style={{ cursor: "pointer" }} onClick={showComplete}>Complete</div>
                <Button variant="outline-success ms-auto" style={{ width: "150px" }} onClick={handleAddItem}>Add</Button>
                <Button variant="outline-secondary" style={{ width: "150px" }} onClick={handleModified}>Modify</Button>
                <Button variant="outline-danger" style={{ width: "150px" }} onClick={handleDeleteItem}>Delete</Button>
            </Stack>
        </div>
    )
}

export default Footer;
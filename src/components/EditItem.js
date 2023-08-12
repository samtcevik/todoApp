import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import useUpdateModal from '../hooks/useUpdateModal';
import useItemOperation from '../hooks/useItemOperation';
import {useState} from 'react';

function EditItem() {
  const { isShow, setIsShow, selectedItem, selectedTitle, selectedDescription} = useUpdateModal();
  const { editItemById } = useItemOperation();
  const[changeDescription, setChangeDescription] =useState("")
  const[changeTitle, setChangeTitle] =useState("")

  const handleSave = () => {
    setIsShow(false);
    if(changeTitle !== ""){
      selectedItem.title = changeTitle;
    }

    if(changeDescription !==""){
      selectedItem.description = changeDescription;
    }
    
    editItemById(selectedItem);
  }

  const handleClose = () => {
    setIsShow(false)
  }

  const handleTitleChange = (event) => {
    setChangeTitle(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setChangeDescription(event.target.value);
  }

  return (
    <>
      <Modal show={isShow} onHide={() => setIsShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modify Item - {selectedItem.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingInput" label="Add Title" className="mb-3">
            <Form.Control type="email" placeholder={selectedTitle} value={changeTitle} onChange={handleTitleChange} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Add Description" className="mb-3">
            <Form.Control type="email" placeholder={selectedDescription} value={changeDescription} onChange={handleDescriptionChange} />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditItem;
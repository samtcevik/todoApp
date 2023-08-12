import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import useItemOperation from '../hooks/useItemOperation';
import { useEffect} from 'react';

function Input() {
    const {setItem, title, setTitle, description, setDescription } = useItemOperation();
    

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    useEffect(()=>{
        setItem({title, description});
    },[title, description])
    return (
        <div >
            <FloatingLabel controlId="floatingInput" label="Add Title" className="mb-3">
                <Form.Control type="email" placeholder={title} value={title} onChange={handleTitleChange} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Add Description" className="mb-3">
                <Form.Control type="email" placeholder={description} value={description} onChange={handleDescriptionChange} />
            </FloatingLabel>
        </div>
    )
}

export default Input;
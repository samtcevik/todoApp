import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Item({ id, title, description, isCompleted, updateActivate}) {
    const style = isCompleted ? { backgroundColor: '#86BF99' } : { backgroundColor: 'white' }

    const handleCompleted = (event) => {

        updateActivate(event.target.id, event.target.name)
    }

    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Checkbox name={"checkboxes"} id={id.toString()} aria-label="Checkbox for following text input" />
                <div style={{ width: "100px" }}>
                    <Form.Control aria-label="Text input with checkbox" value={title} readOnly style={style} />
                </div>
                <Form.Control className='rounded' aria-label="Text input with checkbox" value={description} style={style} />
                <Button className='rounded' variant="primary" name={"active"} id={id.toString()} style={{ width: "150px" }} onClick={handleCompleted}>
                    Active
                </Button>
                <Button className='rounded' variant="secondary" name={"complete"} id={id.toString()} style={{ width: "150px" }} onClick={handleCompleted} >
                    Complete
                </Button>
            </InputGroup>
        </>
    )
}

export default Item;
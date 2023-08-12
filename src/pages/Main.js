import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Input from '../components/Input';
import Footer from '../components/Footer';
import EditItem from '../components/EditItem';
import useItemOperation from '../hooks/useItemOperation';
import Item from '../components/Item';
import { useEffect } from 'react';

function Main() {
    const {  setIsCompleted, updateActivate, filterItems, isCompleted } = useItemOperation();
    const unCheckedNextItem = () => {
        const checkedBoxes = document.querySelectorAll('input[name=checkboxes]:checked');
        checkedBoxes.forEach(element => {
            let elm = document.getElementById(element.id)
            if (elm.checked === true) {
                elm.click();
            }
        });
    }
    const renderedItems = filterItems.map((item, index) => {
        unCheckedNextItem();
        return <Item key={index} id={item.stringId} title={item.title} description={item.description} isCompleted={item.isCompleted} setIsCompleted={setIsCompleted} updateActivate={updateActivate}></Item>
    });

    return (
        <div>
            <Header className="mb-3"></Header>
            <Input></Input>
            <br></br>
            <br></br>
            <div className='mt-12'>
                {renderedItems}
            </div>
            <Footer></Footer>
            <EditItem title={"samet"}></EditItem>
        </div>
    )
}

export default Main;
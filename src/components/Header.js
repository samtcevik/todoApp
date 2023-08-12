import Badge from 'react-bootstrap/Badge';


function Header() {
    return (
        <div className='mb-3' style={{marginTop:"1.5rem"}}>
            <h1 style={{display:"flex", justifyContent:"center"}}>
                <Badge bg="secondary">THINGS TO DO</Badge>
            </h1>
        </div>
    )
}

export default Header;
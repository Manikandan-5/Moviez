import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function Search(){
    return (
        
<Form className="d-flex mx-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button 
            className='btn btn-success'
            >Search</Button>
          </Form>
    )

}

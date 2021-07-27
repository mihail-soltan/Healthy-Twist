import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';

export default function SearchBar() {

const [query, setQuery] = useState("")

    return (
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                style={{width: "20vw"}}
            />
            <Button variant="light" style={{ color: "green", marginLeft: "2px" }}>Search</Button>
        </Form>
    )
}

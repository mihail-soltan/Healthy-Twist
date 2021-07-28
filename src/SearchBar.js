import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

export default function SearchBar({ search, setSearch }) {


    return (
        <Form className="d-flex" >
                <FormControl
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    type="text"
                    placeholder="search"
                    className="mr-2"
                    aria-label="Search"
                    style={{ width: "25vw", height: "5vh"}}
                />
        </Form>
    )
}

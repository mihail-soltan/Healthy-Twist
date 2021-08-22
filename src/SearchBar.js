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
                    className="mt-2"
                    aria-label="Search"
                />
        </Form>
    )
}

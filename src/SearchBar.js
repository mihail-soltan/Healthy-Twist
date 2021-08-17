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
                    style={{backgroundColor: "#999B9C", opacity: "0.7", color: "#F4F5F2"}}
                />
        </Form>
    )
}

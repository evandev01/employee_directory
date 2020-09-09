import React, { useEffect } from 'react';
import SearchForm from '../../components/SearchForm';
import SearchResults from '../../components/SearchResults';
import API from '../../utils/API';

function Search(props){
    const [search, setSearch] = useState({
        search: "",
        results: []
    })

    useEffect(() => {
        API.getEmployees()
        .then(res => {
            if (props.search === res.data){
                
            }
        })
}

export default Search;
import { useContext} from 'react';
import { ProdectContext } from '../App';

function Search ()
{
    const [ ,,,handlerOnChange, handlerSubmint ] = useContext(ProdectContext);
    return (
        <>
            <form className="px-4 my-5 py-3 mx-md-5 mx-3  search-container  shadow hide" onSubmit={ (e) => handlerSubmint(e) }>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control d-inline-block py-3"
                        placeholder="Search..."
                        onChange={ (e) => handlerOnChange(e) }
                    />
                </div>
            </form>
        </>
    );
}

export default Search;
import { useContext } from 'react';
import { ProdectContext } from '../App';
import Products from './Products';

function Tabs ({ singleCategory })
{
    const [ , , categories ] = useContext(ProdectContext);
    return (
        <>
            <div className='container my-2 hide'>
                <div
                    className="btn-toolbar mb-3 justify-content-center"
                >
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <div className='row'>
                            { categories.map((category,index) =>
                            {
                                return (
                                    <button type="button" className="btn btn-outline-danger col-6 col-md-3 category-btn "
                                        role="tab" onClick={ () => singleCategory(category) } key={ index }>
                                        { category }
                                    </button>
                                );
                            }) }
                        </div>
                    </div>
                </div>
            </div>
            <Products />
        </>

    );
}

export default Tabs;
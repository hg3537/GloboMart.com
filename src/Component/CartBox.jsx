import { useContext } from 'react';
import { ProdectContext } from '../App';

export default function CartBox ({ deleteProdect })
{

    const [ , , , , , , , , , , , , , buyProdect ] = useContext(ProdectContext);
    if (buyProdect.length < 1)
    {
        return (
            <div className="cart-container container opacity-0 shadow ">
                <h3>Your Cart Is Empty</h3>
            </div>
        );
    }
    return (
        <>
            <div className="cart-container container opacity-0 shadow " >
            {
                buyProdect.map(prodect =>
                {
                    const { images: img, title, price, id } = prodect;
                    return (
                        <div key={ id } className='position-relative'>
                            <i className="fa-solid fa-trash " onClick={ () => deleteProdect(id) }></i>
                            <div className="row my-3">
                                <div className="col-6"><img src={ img[ 0 ] } className="img-fluid" alt={ title } /></div>
                                <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                                    <h3> { title }</h3>
                                    <h4> Total Price : <span className="text-danger">{ price } $</span></h4>
                                    <h4> Pieces : <span className="text-danger">1</span></h4>
                                </div>
                            </div>
                       </div>
                    );
                })
            }
        </div >
        </>
    );
}

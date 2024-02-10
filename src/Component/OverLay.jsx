import { useContext,} from 'react';
import { ProdectContext } from '../App';
function OverLay ()
{
    const [ , , , , , , closeOverLay, selectedProdect, , , ,, handlerCartBtn ] = useContext(ProdectContext);
    return (
        <div className="over-lay shadow ">
            <i className="fa-solid fa-x btn btn-outline-danger" onClick={ () => closeOverLay() }></i>
            <div className="container">
                { selectedProdect.map(prodect =>
                {
                    const { images: img, title, price, id, description } = prodect;
                    return (
                        <>
                            <div className="row justify-content-center align-items-center" key={ id }>
                                <div id="carouselExampleControls" className="carousel slide col-md-6 col-12" data-bs-ride="carousel"
                                >
                                    <div className="carousel-inner h-100">
                                        <div className="carousel-item active">
                                            <img
                                                src={ img[ 0 ] }
                                                className="d-block w-100"
                                                alt={ title }
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src={ img[ 1 ] }

                                                className="d-block w-100"
                                                alt={ title }
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src={ img[2]}
                                                className="d-block w-100"
                                                alt={ title }
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src={ img[3]}
                                                className="d-block w-100"
                                                alt={ title }
                                            />
                                        </div>
                                    </div>
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carouselExampleControls"
                                        data-bs-slide="prev"
                                    >
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselExampleControls"
                                        data-bs-slide="next"
                                    >
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="col-12 col-md-6 d-flex flex-column align-items-center text-center my-3 justify-content-center">
                                    <h1 className='text-danger'>{ title }</h1>
                                    <h6 className='text-secondary my-1'>{ description }</h6>
                                    <h2 className='fw-bold'>Total Price : { price} $</h2>
                                    <button className=" btn btn-danger my-1 w-50" onClick={()=> handlerCartBtn (id)}>Add</button>
                                </div>
                            </div>
                        </>
                    );
                })
                }
            </div>
        </div>
    );
}
export default OverLay;
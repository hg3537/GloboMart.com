// import { useContext } from "react";
import { useContext } from 'react';
// import AppContext  from '../Context';
import { ProdectContext } from '../App';

function SavedProdects ()
{
    const [ , , , , , handlerOverLay,, , , savedProdect, UnsavedProdectFun ] = useContext(ProdectContext);
    if (savedProdect.length <=0) {
        return (
            <div className='container unsave-cont'>
              <h1>Don’t Have Saved Products</h1>
            </div>
        );
    }
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                { savedProdect.map(prodect =>
                {
                    const { images: img, title, price, id } = prodect;
                    return (
                        <div className="card col-12 col-md-6 col-lg-3 mx-3 my-4 py-3 shadow-sm rounded prodect-card" key={ id }>
                            <h6 className='btn btn-danger my-3 shadow' onClick={ () => UnsavedProdectFun(id)}>UnSave</h6>
                            <img src={ img[0]} className="card-img-top" alt={ title }
                            />
                            <div className="card-body">
                                    <h3 className="card-title text-danger ">{ title }</h3>
                                <div className=" d-flex justify-content-between align-items-center p-3 ">
                                    <p className="card-text text-capitalize m-0">
                                        it’s price <span className='text-danger fw-bold '>{ price } $</span>
                                    </p>
                                    <button className="btn btn-outline-danger" onClick={ () => handlerOverLay(prodect) }>Details</button>
                                </div>
                            </div>
                        </div>
                    );
                })
                }
            </div>
        </div>
    );

}

export default SavedProdects;
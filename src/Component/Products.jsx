import { useContext } from 'react';
import { ProdectContext } from '../App';
import { useScroll, animated, useSpring } from '@react-spring/web';
export default function Products ()
{
    const [ prodects, spiner, , , , handlerOverLay, , , savedProdectFun ] = useContext(ProdectContext);
    const { scrollYProgress } = useScroll()
    const springs = useSpring({
        from: { opacity: 0 },
        to: { opacity: .9 },
    })
    // const X_LINES = 40;

    // const PAGE_COUNT = 5;

    // const INITIAL_WIDTH = 3
    if (spiner)
    {
        return (
            <div className="d-flex justify-content-center align-items-center ">
                <div className="spinner-grow text-danger" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        );
    }

    return (
        <div className='container my-3' >
            <div className='row justify-content-center'>
                { prodects.map(prodect =>
                {
                    const { images: img, title, price, id } = prodect;
                    return (
                        <animated.div className="card col-10 col-md-5 col-lg-3 mx-3 my-4 py-3 shadow-sm rounded prodect-card" key={ id }
                        >
                            <img src={ img[0] } className="card-img-top" alt={ title }
                            />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center py-3 ">
                                    <h3 className="card-name text-danger d-inline-block">{ title }</h3>
                                    <button className='btn btn-danger' onClick={ () => savedProdectFun(id) }><i className="fa-regular fa-bookmark"></i></button>
                                </div>
                                <div className="details d-flex justify-content-between align-items-center p-3 ">
                                    <p className="card-text text-capitalize m-0">
                                        it’s price <span className='text-danger fw-bold '>{ price } $</span>
                                    </p>
                                    <button className="btn btn-outline-danger" onClick={ () => handlerOverLay(prodect) }>Details</button>
                                </div>
                            </div>
                        </animated.div>
                    );
                })
                }
            </div>
        </div>
    );
}
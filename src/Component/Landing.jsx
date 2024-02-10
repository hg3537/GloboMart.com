import Img5 from '../Images/undraw_web_shopping_re_owap.png';
export default function Landing ()
{
   
    return (
        <div className="container landing my-5">
            <div className="row justify-content-center">
                <div className="col-10 col-lg-5 mx-1 text-center my-3">
                    <h1>Discover Products For A Life Well Lived</h1>
                    <h6 className='my-0'>With</h6>
                    <h4 className="navbar-brand mx-1 my-0">
                        Globo<span className="text-danger">Mart</span>
                    </h4>
                    <h2 className='my-3'>Easy More You Think</h2>
                    <button className='btn btn-outline-danger'>Start Shopping</button>
                </div>
                <div className="col-10 col-lg-5 mx-1">
                    <img src={ Img5 } alt="landing" className='img-fluid LandImg' />
                </div>
            </div>
        </div>
    );
}
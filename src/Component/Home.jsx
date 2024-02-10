import { useContext } from 'react';
import { ProdectContext } from '../App';
import Landing from './Landing';
import Search from './Search';
import Products from './Products';

function Home ()
{
    const [ prodects, spiner, , , ,, , ,  ] = useContext(ProdectContext);

  
    return (
        <main >
            <Landing />
            <Search/>
            <Products/>
        </main>
    );

}

export default Home;
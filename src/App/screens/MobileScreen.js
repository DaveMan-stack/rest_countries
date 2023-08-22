
import Navigation from "../components/Navigation";

function MobileScreen({moon}){
    return (
        <header className='text-sm'>
            <Navigation moon={moon}/>
        </header>
    )
}

export default MobileScreen;
import './button.css'
import IconLoading from '../IconLoading'
 function Button(){
     return(
        <>
            <button className="btn btn-primary btn-size-large">
                <IconLoading />
                
            Load more
            </button>

        </>
     );
 }

export default Button
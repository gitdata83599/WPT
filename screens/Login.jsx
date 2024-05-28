import { Link } from "react-router-dom";

function Login(){
    return (
        <div>
          <h2 className='page-header'>Login</h2>
           <div className='row'>
            <div classname='col'></div>
            <div classname='col'>
                <div className='form'>
                <div className='mb-3'>
                    <label htmlfor=''>Email</label>
                    <input type ='email' className='form-control'/>
                    </div>
                    <div className='mb-3'>
                    <label htmlfor=''>Password</label>
                    <input type ='password' className='form-control'/>
                    </div>
                    </div>
                    </div>
                    
                    <div className='mb-3'>
                        <div>Don't have account ? <Link to='/register'>Register here</Link>
                        </div>
                        <button classname='btn btn-success'>Login</button>
                        <div/>
                        </div>

                     </div>
                     

            <div classname='col'></div>

            <div/> 
             

        </div>
        
    )
}
export default Login
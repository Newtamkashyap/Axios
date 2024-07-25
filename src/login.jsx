

export function LoginPage(){
    return(
        <div className="container-fluid ">
            
            <h3>Register Page</h3>
            <form className=" mt-4 w-25 align-items-center bg bg-black text-light form-switch ">
                <label className="mt-2 form-label">UserName</label>
                <input  type="text"/><br/>
                <label className="mt-2 form-label">Email</label>
                <input type="email"/><br/>
                <label className="mt-2">Password</label>
                <input type="password"/><br/>
                <label className="mt-2">Gender: </label>
                <label>Male</label>
                <input type="checkbox"/>
                <label>Female</label>
                <input type="checkbox" className=""/><br/>
                <button type="submit" className="">Submit</button> <button type="reset">reset</button>

             
            </form>
        </div>
    )
}
import React from "react";
import NavigationBar from "../components/NavigationBar";

function Signup(){
    return(
        <>
        <form>
        <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</>
    )
}
export default Signup;
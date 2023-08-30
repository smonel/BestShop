import React from "react";

function Conctact (){

    return(
            <>
            <h1>Any questions?</h1>
            <h2>Leave your email address or call us!</h2>
            <p>info@bestshop.xyz</p>
            <p>123 456 789</p>
           
            
            <form>
                    <label for="fname">Name </label>
                    <br/>
                      <input type="text" id="name" name="name"/><br/>
                     <label for="Email">Email </label><br/>
                    <input type="email" id="email" name="Email"/>

            </form>
            
            

            </>
    );
}


export default Conctact;
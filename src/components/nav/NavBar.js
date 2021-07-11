import React, { useState } from 'react';              //importing React for JSX.
import './scss/Main.scss';                         //commmand for installing scss => npm i scss sass.




function NavBar() {

    const [set, setstate] = useState(true);

    return (


        <div>




            <div>
                <div className="container">



                    {/* BOX - 1 */}
                    <div className="box box1 " style={{ width: "200px", padding: "0px", height: "55px", fontFamily: "serif", fontSize: "2.7em" }}>PubBlog.com</div>


                    {/* BOX - 2 */}
                    <input className="box box2 hide-for-mobile" style={{ width: "800px", marginLeft: "29px", height: "4.6rem" }} type="search" placeholder="search"></input>


                    {/* BOX - 3 , 4 ,7 */}
                    <div className="box box3"></div>
                    <div className="box box4"></div>
                    <div className="box box7"></div>


                    {/* BOX - 5 */}
                    <button className="box box5 hide-for-mobile" style={{
                        width: "200px", height: "43px", padding: "18px", height: "75px",
                    }}>About Us</button>



                    {/* BOX - 6 */}
                    <button className="box box6 hide-for-mobile " style={{ width: "160px", padding: "18px", marginLeft: "4px", marginRight: "4px", height: "75px" }}>Login</button>

                    <div className="hamburger hide-for-desktop">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>




                </div>
            </div>



        </div>




    )
}

export default NavBar

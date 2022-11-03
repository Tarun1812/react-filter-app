import React, { Component, Fragment, useState } from "react";
import './Header.css'

const Header = (props) => {
    const [input,setInput] = useState("User Text Here")

    const title = "React Filter App"
    

    const handleChange = (e) => {
    setInput(e.target.value?e.target.value:"User Text Here")
    props.userInput(e.target.value)
    }

    return(
                    <Fragment>
                        <header>
                            <div className="logo">{title}</div>
                            <center>
                                <input type="search" onChange={handleChange} />
                                <div style={{color:'white',fontSize:'20px'}}>{input}</div>
                            </center>
                        </header>
                        <hr/>
                    </Fragment>
                )
}
// class Header extends Component {

//     constructor(){
//         super()
//         this.state={
//             title:"React Filter App",
//             keyword:"User Text Here"
//         }

//     }
//     handleChange = (event) => {
//         // ternary operator used 
//         this.setState({keyword:event.target.value?event.target.value:"User Text Here"})
//         this.props.userInput(event.target.value)
//     }

//     render(){
        
//         return(
//             <Fragment>
//                 <header>
//                     <div className="logo">{this.state.title}</div>
//                     <center>
//                         <input type="search" onChange={this.handleChange} />
//                         <div style={{color:'white',fontSize:'20px'}}>{this.state.keyword}</div>
//                     </center>
//                 </header>
//                 <hr/>
//             </Fragment>
//         )
//     }
// }
export default Header
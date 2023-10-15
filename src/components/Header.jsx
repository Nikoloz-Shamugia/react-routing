import { Link } from "react-router-dom"
import LogoImg from '../images/logo.svg';


const Header = () =>{
    const headerStyles = {
        height : '115px' ,
        width : '100%' , 
        display : 'flex',
        justifyContent :'space-between',
        alignItems : 'center',
        padding :'0px 10px'
    }
    const linkStyle = {
        listStyle :'none',
        textDecoration: 'none',
        color :'black'
    }
    const liStyle = {
        listStyle:'none' , 
        width : '100%',
        display : 'flex' ,
        justifyContent : 'space-between',
        alignItems : 'center'
    }
    return(
        <header style={headerStyles}>
            <div>
                <img src={LogoImg} alt="logo"/>
            </div>
            <ul style={{width : '350px'}}>
                <li style={liStyle}>
                    <Link style={linkStyle} to='/ourCompany'>our company</Link>
                    <Link style={linkStyle} to='/locations'>locations</Link>
                    <Link style={linkStyle} to='/contacts'>contact</Link>
                </li>
            </ul>

        </header>
    )
}
export default Header

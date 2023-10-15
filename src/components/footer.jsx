import Logo from '../images/logo.svg'
import Icons from '../images/icons.svg'

const footer = ()=>{
    return(
        <footer style={{background:'#1D1C1E' , padding :'0px 30px', zIndex: 0}}>
            <div style={{maxWidth:'1250px' , margin :'0 auto' , padding :'120px 0px 0px 0px ' , borderBottom :"ipx solid white"}}>
                <div style={{display:'flex' , alignItems :'center' , justifyContent :'space-between'}}>
                    <img src={Logo} alt='alt' />
                    <ul style={{display :'flex' , width :'450px' , justifyContent :'space-between'}}>
                        <li style={{listStyle:'none' , color :'white'}}>OUR COMPANY</li>
                        <li style={{listStyle:'none' , color :'white'}}>LOCATIONS</li>
                        <li style={{listStyle:'none' , color :'white'}}>CONTACT</li>
                    </ul>
                </div>
                <div style={{display:'flex' , padding :'70px 0px 20px 0px' , justifyContent:'space-around' , alignItems:'bottom'}}>
                    <div style={{width :'300px' , color :'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta saepe incidunt aliquid, nam pariatur molestias dolorum iure hic sunt consequatur soluta unde excepturi reprehenderit aspernatur, odio possimus porro tempore quibusdam.</div>
                    <div style={{width :'300px' , color :'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellat magni illum consectetur tempora earum, animi minus quibusdam ad commodi in architecto eos vero repudiandae. Adipisci quaerat consequatur enim soluta.</div>
                    <div > 
                        <img src={Icons} alt="icon" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default footer
import webDesignBackg from '../images/webDesignBack.jpg'
import appDesignBackg from '../images/appDesignBackg.jpg'
import graphicDesignBackg from '../images/graphicDesignBackg.jpg'

const professionWrapper = ()=>{
    const webDesignStyle = {
        height:'640px',
        width:'585px',
        position :'relative'
    }
    const webImgStyle = {
        width:'595px',
        height :'640px',
        borderRadius :'15px'
    }
    const info = {
        color:'white',
        marginBottom :'8px'
    }
    const appDesignStyle ={
        width: '595px',
        height: '308px',
        position :'relative'
    }
    const appImgStyle ={
        width: '585px',
        height: '308px',
        borderRadius :'15px'
    }
    const professionWrapperStyle = {
        display:'flex',
        alignItems:'center',
        justifyContent :'space-between',
        marginTop:'105px'
    }
    return(
        <div style={professionWrapperStyle}>
                <div style={webDesignStyle}>
                    <div style={{position:'absolute' , top:'50%' , left:'50%' , transform :'translate(-50% , -50%)' , display:"grid" , placeItems:'center'}}>
                        <h2 style={info}>WEB DESIGN</h2>
                        <p style={info}>VIEW PROJECTS</p>
                    </div>
                    <img style={webImgStyle} src={webDesignBackg} alt="bckg"/>
                </div>
                <div style={{height:'640px' , display:'flex',flexDirection:'column' , justifyContent:'space-between'}}>
                    <div style={appDesignStyle}>
                        <div style={{position:'absolute' , top:'50%' , left:'50%' , transform :'translate(-50% , -50%)' , display:"grid" , placeItems:'center'}}>
                            <h2 style={info}>APP DESIGN</h2>
                            <p style={info}>VIEW PROJECTS</p>
                        </div>
                        <img style={appImgStyle} src={appDesignBackg} alt="bckg"/>
                    </div>
                    <div style={appDesignStyle}>
                        <div style={{position:'absolute' , top:'50%' , left:'50%' , transform :'translate(-50% , -50%)' , display:"grid" , placeItems:'center'}}>
                            <h2 style={info}>APP DESIGN</h2>
                            <p style={info}>VIEW PROJECTS</p>
                        </div>
                        <img style={appImgStyle} src={graphicDesignBackg} alt="bckg"/>
                    </div>
                </div>
            </div>
    )
}
export default professionWrapper
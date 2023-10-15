import CircleImg from '../images/circle.svg'
import PhoneImg from '../images/iphone.png'

const iphoneDiv = () =>{
    const awardDivStyle = {
        backgroundColor : '#E7816B',
        height : '660px' ,
        borderRadius :'20px',
        position : 'relative'
    }
    const circleImageStyle = {
        position:'absolute',
        top :'0' ,
        right:'0',
    }
    const iphoneImgStyle = {
        position:'absolute',
        bottom : '0',
        left :'65%',
        Transform: 'translate(0 ,-50%)'
    }
    const infoBoxStyle = {
        width : '540px',
        padding : '165px 0px 0px 110px',
    }
    const infoStyle = {
        color : 'white' , 
        margin : '0px 0px 50px 0px'
    }
    const buttonStyle = {
        backgroundColor:'white',
        padding :'12px 20px',
        borderRadius :'15px',
        border :'none'
    }
    return(
        <div style={awardDivStyle}>
            <div style={infoBoxStyle}>
                <h1 style={infoStyle}>Award-winning custom designs and digital branding solutions</h1>
                <p style={infoStyle}>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                <button style={buttonStyle}>Learn More</button>
            </div>
            <img style={circleImageStyle} src={CircleImg} alt="circleImage"/>
            <img style={iphoneImgStyle} src={PhoneImg} alt="phoneImg"/>
        </div>
    )
}
export default iphoneDiv
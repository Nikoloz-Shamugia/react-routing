const projectDiv = () =>{
    const modalStyle ={
        height:'292px',
        width :'100%',
        borderRadius :'15px',
        backgroundColor:'#E7816B',
        display:'flex',
        justifyContent:'space-between',
        padding :'0px 160px',
        alignItems :'center',
        marginBottom:'-70px',
        zIndex: 5,
        position: 'absolute',
        bottom :'0px',
    }
    const modalInfoStyle = {
        width:'520px',
        height :'auto',
    }
    const infoStyle = {
        color:'white',
        marginBottom:'20px'
    }
    const buttonStyle ={
        border:'none' ,
        borderRadius :'15px',
        padding :'15px 30px'
    }
    return (
        <div style={{position :'relative', margin :'350px 0px 0px 0px'}}>
                <div style={modalStyle}>
                    <div style={modalInfoStyle}>
                        <h2 style={infoStyle}>Lets talk about your project</h2>
                        <p style={infoStyle}>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                    </div>
                    <button style={buttonStyle}>Get in touch</button>
                </div>
            </div>
    )
}
export default projectDiv
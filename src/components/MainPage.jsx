import MainLayout from "./MainLayout"
import IphoneDiv from "./IphoneDiv"
import ProfessionWrapper from "./ProfessionWrapper"
import Steps from "./InformationDiv"
import AnimationImg1 from '../images/animationImg1.svg'
import AnimationImg2 from '../images/animationImg2.svg'
import AnimationImg3 from '../images/animationImg3.svg'
import ProjectDiv from "./projectDiv"

const mainPage = ()=>{
    return (
        <MainLayout>
            <IphoneDiv/>
            <ProfessionWrapper/>
            <div style={{display:'flex' , justifyContent:'space-between' , alignItems:'center' , margin :'120px 0'}}>
                <Steps 
                    url={AnimationImg1}
                    heading="PASSIONATE"
                    text="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."/>
                <Steps 
                    url={AnimationImg2}
                    heading="RESOURCEFUL"
                    text="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."/>
                <Steps 
                    url={AnimationImg3}
                    heading="PASSIONATE"
                    text=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.."/>
            </div>
            <ProjectDiv/>
        </MainLayout>   
    )
}
export default mainPage
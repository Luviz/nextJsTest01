import Layout from "../components/masterpages";
import css from "../styles.scss"
// import Image from "next/types"


const AboutMe = props => <Layout>
    <div className={css.aboutMe}>
        <div>
            <img className={css.myphoto} src="/img.jpg" height={300} alt="my image" />
        </div>
    </div>
    
</Layout>





export default AboutMe;
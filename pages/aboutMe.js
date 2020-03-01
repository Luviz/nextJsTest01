import Layout from "../components/masterpages";
import css from "../styles.scss"
// import Image from "next/types"
const now = require('./my.json');
console.log(now);
const AboutMe = props => <Layout>
    <div className={css.aboutMe}>
        <div>
            <img className={css.myphoto} src="/img.jpg" height={300} alt="my image" />
        </div>
        <h2>
            {JSON.stringify(now)}
        </h2>
    </div>
    
</Layout>





export default AboutMe;
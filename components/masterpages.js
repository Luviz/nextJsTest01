import Link from 'next/link';
import css from "../styles.scss"


const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  // backgroundColor: "#D3D3D3"
};
const linkStyle = {
  marginRight: 15

};

const Layout = props => (
  <div className={css.root}>
    <div className={css.layout}>
      <Header />
      <div className={css.content} >
        {props.children}
      </div>
    </div>
  </div>
);

const Header = () => (
  <div className={css.header}>
    <Link href="/">
      <a>
        Home
      </a>
    </Link>
    <Link href="/about">
      <a>
        About
      </a>
    </Link>
    <Link href="/test01">
      <a>
        Test 01
      </a>
    </Link>
    <Link href="/testAPITest">
      <a>
        Test 02
      </a>
    </Link>
  </div>
);

export default Layout;  

import Link from 'next/link';
import css from "../styles.scss"

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
        Blog
      </a>
    </Link>
    <Link href="/test01">
      <a>
        Test 01
      </a>
    </Link>
    <Link href="/aboutMe">
      <a>
        About Me
      </a>
    </Link>
  </div>
);

export default Layout;  

import Link from 'next/link';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  backgroundColor: "#D3D3D3"
};
const linkStyle = {
  marginRight: 15

};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

const Header = () => (
  <div >
    <Link href="/">
      <a style={linkStyle}>
        Home
      </a>
    </Link>
    <Link href="/abomt">
      <a style={linkStyle}>
        About
      </a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>
        About
      </a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>
        About
      </a>
    </Link>
  </div>
);

export default Layout;  

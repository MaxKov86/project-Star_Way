import css from './Layout.module.css'

const Layout = ({ children }) => {
	return <div className={css.layout}>{children}</div>;
};

export default Layout;

import Header from './Header';
import Footer from './footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className='container'>
        <Header />
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout
import Footer from '../components/Main Page/Footer/Footer';
import HeaderMain from '../components/Main Page/Header/HeaderMain';
import Speaking from '../components/Main Page/Speaking Section/Speaking';
import Writing from '../components/Main Page/Writing Section/Writing';

export default function Home() {
  return (
    <>
      <HeaderMain />
      <Writing />
      <Speaking />
      <Footer />
    </>
  );
}

import HeaderLayout from './HeaderLayout';
import FooterLayout from './FooterLayout';
import { Outlet, useNavigation } from 'react-router-dom';
import LoadingPage from '../../Pages/LoadingPage';

const AppLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);

  if (navigation.state === 'loading') return <LoadingPage />;
  return (
    <>
      <HeaderLayout />
      <Outlet />
      <FooterLayout />
    </>
  );
};

export default AppLayout;

import { useSelector } from 'react-redux';
import { HomePageLink, ContactsLink } from './Navigation.styled';
import { getLoggedIn } from 'redux/auth/auth-selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  return (
    <div>
      <HomePageLink to="/home">Home page</HomePageLink>
      {isLoggedIn && <ContactsLink to="/contacts">Contacts</ContactsLink>}
    </div>
  );
};

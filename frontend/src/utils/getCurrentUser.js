export const getCurrentUser = () => {
  const {
    location: { pathname },
  } = window;
  const currentUser = pathname.split('/')[1];
  return currentUser;
};

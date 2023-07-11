import { Box, useMediaQuery } from '@mui/material';
import NavBar from '../../scenes/navBar';
import { useSelector } from 'react-redux';
import UserWidget from '../../scenes/widgest/UserWidget';
import MyPostWidget from '../../scenes/widgest/MyPostWidget';
import PostsWidget from '../../scenes/widgest/PostsWidgwt';
import AdverWidget from '../../scenes/widgest/AdverWidget';
import FriendListWidget from '../../scenes/widgest/FriendListWidget';

const HomePage = () => {
  const isNonMobileScreems = useMediaQuery('(min-width: 1000px)');
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <NavBar />
      <Box
        width='100%'
        padding='2rem 6%'
        display={isNonMobileScreems ? 'flex' : 'block'}
        gap='0.5rem'
        justifyContent='space-between'
      >
        <Box flexBasis={isNonMobileScreems ? '26%' : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreems ? '42%' : undefined}
          mt={isNonMobileScreems ? undefined : '2rem'}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreems && (
          <Box flexBasis='26%'>
            <AdverWidget />
            <Box m='2rem 0' />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;

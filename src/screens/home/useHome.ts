import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {fetchData} from '../../redux/movieReducer';
import {useAppDispatch} from '../../redux/store';
import {setUser} from '../../redux/userProfile';
import {SCREEN_NAMES} from '../../route/rootStack';

export const useHome = () => {
  const navigation: any = useNavigation();
  const dispatch = useAppDispatch();
  const {data} = useSelector((state: any) => state.movies);

  const logoutUser = () => {
    dispatch(setUser({email: '', password: ''}));
    navigation.reset({
      index: 0,
      routes: [{name: SCREEN_NAMES.LOGIN}],
    });
  };

  const loadMoreData = () => {
    console.log(data.page, data.total_pages);
    if (data.page < data.total_pages) {
      dispatch(fetchData(data.page + 1, data.results));
      return;
    }
  };

  const loadInitData = () => {
    dispatch(fetchData(1));
  };

  return {
    data,
    logoutUser,
    loadMoreData,
    loadInitData,
  };
};

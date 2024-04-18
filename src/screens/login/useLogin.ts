import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../../redux/store';
import {setUser} from '../../redux/userProfile';
import base64 from 'react-native-base64';
import {SCREEN_NAMES} from '../../route/rootStack';

export const useLogin = () => {
  const navigation: any = useNavigation();
  const dispatch = useAppDispatch();

  const handleUserSubmit = (data: any) => {
    dispatch(
      setUser({email: data.email, password: base64.encode(data.password)}),
    );
    navigation.reset({
      index: 0,
      routes: [{name: SCREEN_NAMES.HOME}],
    });
  };

  return {
    handleUserSubmit,
  };
};

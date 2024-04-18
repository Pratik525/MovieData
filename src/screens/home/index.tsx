import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import Config from 'react-native-config';
import 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { ImageContainer } from '../../components/languageChangeIcon/languageChangeIcon.style';
import { fetchData } from '../../redux/movieReducer';
import { useAppDispatch } from '../../redux/store';
import { setUser } from '../../redux/userProfile';
import { SCREEN_NAMES } from '../../route/rootStack';
import {
  Container,
  HeaderContainer,
  HeaderText,
  ItemContainer,
  Thumbnail,
  TitleText,
} from './home.style';

interface Props {
  navigation: any;
}

interface ArticleItemType {
  item: {
    title : string,
    poster_path : string,
    id: number 
  };
  index: number
}

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const {t} = useTranslation();
  const {data} = useSelector((state: any) => state.movies);

  useEffect(() => {
    dispatch(fetchData(1));
  }, []);

  const renderListItem = ({item}: ArticleItemType) => {
    return (
      <ItemContainer>
        <Thumbnail
          source={{uri: `${Config.IMAGE_PATH}${item.poster_path}`}}
        />
        <TitleText numberOfLines={1}>{item.title}</TitleText>
      </ItemContainer>
    );
  };

  const onEndReached = () => {
    if (data.page < data.total_pages) {
      dispatch(fetchData(data.page + 1, data.results));
      return;
    }
  };
  
  const logoutUser = () => {
    Alert.alert(
      t('logout'),
      t('areYouSure'),
      [
        {text: t('no'), style: 'cancel'},
        {
          text: t('yes'),
          onPress: () => {
            dispatch(setUser({email: '', password: ''}))
            navigation.reset({
              index: 0,
              routes: [{name: SCREEN_NAMES.LOGIN}],
            });
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <SafeAreaView>
      <HeaderContainer>
        <HeaderText>{t('popularMovies')}</HeaderText>
        <TouchableOpacity onPress={logoutUser}>
          <ImageContainer source={require('../../assests/images/logout.png')} />
        </TouchableOpacity>
      </HeaderContainer>
      <Container>
        <FlatList
          keyExtractor={(item, index) => `${item.id}-${data.page}-${index}`}
          testID="movie-list"
          numColumns={2}
          keyboardShouldPersistTaps={'always'}
          data={data.results}
          onEndReachedThreshold={0.5}
          showsVerticalScrollIndicator={false}
          onEndReached={onEndReached}
          renderItem={renderListItem}
        />
      </Container>
    </SafeAreaView>
  );
};

export default HomeScreen;

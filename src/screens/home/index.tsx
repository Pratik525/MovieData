import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import Config from 'react-native-config';
import 'react-native-gesture-handler';
import { ImageContainer } from '../../components/languageChangeIcon/languageChangeIcon.style';
import { useAppDispatch } from '../../redux/store';
import {
  Container,
  HeaderContainer,
  HeaderText,
  ItemContainer,
  Thumbnail,
  TitleText,
} from './home.style';
import { useHome } from './useHome';

interface Props {
  navigation: any;
}

interface ArticleItemType {
  item: {
    title: string;
    poster_path: string;
    id: number;
  };
  index: number;
}

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const {t} = useTranslation();
  const {data, logoutUser, loadInitData, loadMoreData} = useHome();

  useEffect(() => {
    loadInitData();
  }, []);

  const renderListItem = ({item}: ArticleItemType) => {
    return (
      <ItemContainer>
        <Thumbnail source={{uri: `${Config.IMAGE_PATH}${item.poster_path}`}} />
        <TitleText numberOfLines={1}>{item.title}</TitleText>
      </ItemContainer>
    );
  };

  const logout = () => {
    Alert.alert(
      t('logout'),
      t('areYouSure'),
      [
        {text: t('no'), style: 'cancel'},
        {
          text: t('yes'),
          onPress: logoutUser,
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <SafeAreaView>
      <HeaderContainer>
        <HeaderText>{t('popularMovies')}</HeaderText>
        <TouchableOpacity onPress={logout}>
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
          onEndReached={loadMoreData}
          renderItem={renderListItem}
        />
      </Container>
    </SafeAreaView>
  );
};

export default HomeScreen;

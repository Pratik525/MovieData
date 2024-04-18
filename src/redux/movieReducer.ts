import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'react-native-config';
import i18n from '../locales/i18Next';

interface DataState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: {
    results: [],
  },
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<{}>) {
      state.data = action.payload;
    },
    fetchDataStart: state => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {setMovies, fetchDataStart, fetchDataSuccess, fetchDataFailure} =
  movieSlice.actions;
export default movieSlice.reducer;

export const fetchData =
  (pageNo: number = 1, results: Array<{}> = []) =>
  async (dispatch: any) => {
    const language = i18n.language === 'en' ? 'en-US' : 'ar';
    try {
      dispatch(fetchDataStart());
      const response = await axios.get(
        `${Config.API_URL}?language=${language}&page=${pageNo}` || '',
        {
          headers: {
            Authorization: Config.API_TOKEN,
          },
        },
      );
      if (response.data.page > 1) {
        response.data.results = [...results, ...response.data.results];
      }
      dispatch(fetchDataSuccess(response.data));
    } catch (error: any) {
      dispatch(fetchDataFailure(error.message));
    }
  };

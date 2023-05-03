import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { setGames, setError } from '../../reducers/actions';
import {
  MainBox,
  Header,
  Results,
  Form,
  Text,
  Label,
  Input,
  Img,
  InputBox,
  ImgInput,
  HeaderBox,
  InputBoxFloat,
  InputFloat,
} from './Search.style';
import Box from '../Box/Box.js';
import Logo from '../../assets/images/logo.svg';
import Glass from '../../assets/images/glass.svg';
import Key from '../../assets/images/key.svg';

function Search() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);
  const error = useSelector((state) => state.error);
  const [currentPage, setCurrentPage] = useState(1);
  const [apiKey, setApiKey] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (apiKey === '') {
      dispatch(setError('Please enter an API key'));
    } else {
      const debouncedFetchGames = debounce((key, query, currentPage) => {
        setIsLoading(true);
        axios
          .get(
            `https://api.rawg.io/api/games?key=${key}&search=${query}&page=${currentPage}&page_size=10`
          )
          .then((response) => {
            dispatch(setGames(response.data));
          })
          .catch((error) => {
            dispatch(setError(error.message));
            console.log(error);
          })
          .finally(() => setIsLoading(false));
      }, 500);

      debouncedFetchGames(apiKey, searchQuery, currentPage);
    }
  }, [apiKey, searchQuery, currentPage, dispatch]);
  console.log(games);
  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handlePageChange = (event) => {
    const newPage = parseInt(event.target.value);
    if (
      !isNaN(newPage) &&
      newPage > 0 &&
      newPage <= Math.ceil(games.games.count / 10)
    ) {
      setCurrentPage(newPage);
    }
  };
  const handleSearchQuerySubmit = (event) => {
    event.preventDefault();
  };
  return (
    <MainBox>
      <Header>
        <Form onSubmit={handleSearchQuerySubmit}>
          <Text>
            <Img src={Logo} />
            Games DB
          </Text>
          <HeaderBox>
            <InputBox>
              <ImgInput src={Glass} />
              <Input
                type="text"
                value={searchQuery}
                onChange={handleSearchQueryChange}
              />
            </InputBox>
          </HeaderBox>
          <InputBox>
            <ImgInput src={Key} />
            <Input
              type="password"
              value={apiKey}
              onChange={handleApiKeyChange}
            />
          </InputBox>
        </Form>
      </Header>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Results>
          <Box games={games} />
        </Results>
      )}
      {games.error === 'Please enter an API key' ? (
        <Results>
          <Text>{games.error}</Text>
        </Results>
      ) : (
        ''
      )}
      <Form onSubmit={handleSearchQuerySubmit}>
        <InputBoxFloat>
          <InputFloat
            type="number"
            value={currentPage}
            onChange={handlePageChange}
            min="1"
            max={Math.ceil(games.games.count / 10)}
          />
          <Label>Go to page</Label>
        </InputBoxFloat>
      </Form>
    </MainBox>
  );
}

export default Search;

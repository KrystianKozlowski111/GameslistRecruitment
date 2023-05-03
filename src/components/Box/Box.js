import React from 'react';
import { Wrapper, TextWrapper, Img, Image, Title, Text } from './Box.style';

const Box = ({ games }) => {
  return (
    <>
      {games.games.results &&
        games.games.results.map((game) => (
          <Wrapper key={game.id}>
            <Image>
              <Img src={game.background_image} alt={game.name} />
            </Image>
            <TextWrapper>
              {' '}
              <Title>{game.name}</Title>
              <div>
                <Text>
                  {game.platforms &&
                    game.platforms
                      .map((platform) => platform.platform.name)
                      .join(game.platforms.length > 1 ? ', ' : '')}
                </Text>
              </div>
            </TextWrapper>
          </Wrapper>
        ))}
    </>
  );
};

export default Box;

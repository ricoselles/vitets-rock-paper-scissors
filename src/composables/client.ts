export type Shape = 'rock' | 'paper' | 'scissor';

export type PlayRoundResponse = {
  id: string;
  playerA: string;
  playerB: string;
  rounds: {
    answerA: string;
    answerB: string;
  }[];
};

export function useClient(
  baseUrl: string = 'https://apim-netivity-trendwatch-prod-euwe.azure-api.net'
) {
  return {
    playRound(
      gameId: string,
      playerId: string,
      shape: Shape
    ): Promise<PlayRoundResponse | null> {
      return post(baseUrl, '/PlayRound', { gameId, playerId, shape });
    },

    startGame(playerId: string): Promise<{ id: string } | null> {
      return post(baseUrl, '/StartGame', { playerId });
    },

    registerPlayer(name: string): Promise<{ id: string } | null> {
      return post(baseUrl, '/RegisterPlayer', { name });
    },
  };
}

async function get<T>(baseUrl: string, url: string): Promise<T | null> {
  try {
    const response = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response;
    const json = await result.json();

    if (result.ok) {
      return json;
    } else {
      throw new Error('message' in json ? json.message : 'Unexpected error');
    }
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function post<T>(
  baseUrl: string,
  url: string,
  data: object
): Promise<T | null> {
  try {
    const response = await fetch(`${baseUrl}${url}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response;
    const json = await result.json();

    if (result.ok) {
      return json;
    } else {
      throw new Error('message' in json ? json.message : 'Unexpected error');
    }
  } catch (e) {
    console.error(e);
    return null;
  }
}

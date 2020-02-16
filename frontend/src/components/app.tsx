import React, { useEffect, useState } from 'react';

import { getAnswer, Answer } from '../utils/yes-no-api';
import { RequestState, Ajax } from '../utils/ajax';

import './styles.css';

export const App: React.FC = () => {
  const [answer, setAnswer] = useState<Answer>({});
  const apiRequest: Ajax<Answer> = getAnswer();
  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        const answer = await apiRequest.send();
        if (apiRequest.state === RequestState.READY) {
          setAnswer(answer);
        }
      } catch (ex) {}
    };
    asyncWrapper();
    return () => {
      apiRequest.abort();
    }
  }, [getAnswer, setAnswer, apiRequest]);
  return (
    <main style={{backgroundImage: `url('${answer.gif}')`}}>
      <p>{answer.answer}</p>
    </main>
  );
};

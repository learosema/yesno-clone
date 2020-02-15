import React, { useEffect, useState } from 'react';

import { YesNoApi, Answer } from '../utils/yes-no-api';

import './styles.css';

export const App: React.FC = () => {
  const [answer, setAnswer] = useState<Answer>({});
  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setAnswer(await YesNoApi.getAnswer());
      } catch (ex) {}
    };
    asyncWrapper();
  }, []);
  return (
    <main style={{backgroundImage: `url('${answer.gif}')`}}>
      <p>{answer.answer}</p>
    </main>
  );
};

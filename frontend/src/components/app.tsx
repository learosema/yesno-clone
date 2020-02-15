import React, { useEffect, useState } from 'react';

import { getAnswer, Answer } from '../utils/yes-no-api';

export const App: React.FC = () => {
  const [answer, setAnswer] = useState<Answer>({});
  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setAnswer(await getAnswer());
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

import { useState } from 'react';
import { useParams } from 'react-router';
import useFetch from '../utils/useFetch';

function Speech() {
  const { speakingTitle } = useParams();
  const [speech, setSpeech] = useState({});

  useFetch(
    `http://localhost:3000/speeches/${speakingTitle}`,
    setSpeech
  );

  return (
    <div>
      <p>Speech</p>
      <p>{speech?.title}</p>
    </div>
  );
}

export default Speech;

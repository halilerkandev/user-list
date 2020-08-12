import { useEffect, useRef } from 'react';

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current === undefined ? null : ref.current;
};

export default usePrevious;

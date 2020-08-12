import { useState, useCallback } from 'react';

const useDOMRef = () => {
  const [DOMRef, setDOMRef] = useState({});
  const setRef = useCallback((node) => {
    if (node !== null) {
      setDOMRef((prevDOMRefs) => ({
        ...prevDOMRefs,
        [node.dataset.refkey]: node,
      }));
    }
  }, []);

  return [DOMRef, setRef];
};

export default useDOMRef;

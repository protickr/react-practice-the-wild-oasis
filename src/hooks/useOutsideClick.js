import { useEffect, useRef } from "react";

function useOutsideClick(onClick, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) onClick();
      }

      document.addEventListener("click", handleClick, listenCapturing);
      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [onClick, listenCapturing]
  );

  return ref;
}

export default useOutsideClick;

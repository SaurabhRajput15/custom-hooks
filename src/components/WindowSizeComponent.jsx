import useWindowSize from '../customHooks/useWindowSize';

function WindowSizeComponent() {
  const size = useWindowSize()

  return (
    <div>
      <h2>Width:{size.width}</h2>
      <h2>Height:{size.height}</h2>
    </div>
  );
}

export default WindowSizeComponent;
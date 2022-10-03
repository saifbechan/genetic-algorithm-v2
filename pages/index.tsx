import { useEffect, useRef } from 'react';
import P5 from 'p5';
import sketch from '../src/sketch';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const p5Ref = useRef<P5>();
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (p5Ref !== null) {
      p5Ref.current?.remove();
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      p5Ref.current = new (require('p5'))(sketch, canvasRef.current);
    }
  }, []);

  return (
    <main>
      <div ref={canvasRef} id="sketch" role="sketch" />
    </main>
  );
};

export default Home;

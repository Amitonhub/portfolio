import AnimatedCursor from 'react-animated-cursor';

const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: `#27592d`,
        mixBlendMode: 'color-dodge'
      }}
      outerStyle={{
        border: `3px solid #16a34a`
      }}
    />
  );
};

export default Cursor;

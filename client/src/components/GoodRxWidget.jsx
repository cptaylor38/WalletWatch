import React, { useEffect } from 'react';

const GoodRxWidget = ({ toggleWidget }) => {
  useEffect(() => {
    (function (d, t) {
      var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      g.src =
        '//s3.amazonaws.com/assets.goodrx.com/static/widgets/search.min.js';
      s.parentNode.insertBefore(g, s);
    })(document, 'script');
  }, []);

  return (
    <div className='goodrx__helper'>
      <header>
        <p>Is your copay cheaper than GoodRx?</p>
        <button onClick={() => toggleWidget(false)}>X</button>
      </header>
      <div id='goodrx_search_widget' />
    </div>
  );
};

export default GoodRxWidget;

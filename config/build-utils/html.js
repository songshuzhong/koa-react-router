import React from 'react';

const Html = ( children ) => {
  return(
    <html lang="zh-cn">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
      <link href="main.css" rel="stylesheet" />
      <title>{ 'EPM UI App' }</title>
    </head>
    <body>
    <div id="react-root"/>
    <div dangerouslySetInnerHTML={{__html: children.children}}/>
    <script src="bundle.js" />
    </body>
    </html>
  )
};

export { Html };
export default Html;
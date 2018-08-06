// global-styles.js

import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
     font-family: 'my something';
     src: url('../assets/fonts/OpenSans-Bold.ttf');
  }
`
injectGlobal`
  @font-face {
     font-family: 'open sans bold italic';
     src: url('../assets/fonts/OpenSans-BoldItalic.ttf');
  }
`
injectGlobal`
  @font-face {
     font-family: 'open sans extra bold';
     src: url('../assets/fonts/OpenSans-ExtraBold.ttf');
  }
`

injectGlobal`
  @font-face {
     font-family: 'open sans extra bold italic';
     src: url('../assets/fonts/ExtraBoldItalic.ttf');
  }
`
// ===============================
injectGlobal`
  @font-face {
     font-family: 'open sans italic';
     src: url('my-source.ttf');
  }
`
injectGlobal`
  @font-face {
     font-family: 'open sans light';
     src: url('my-source.ttf');
  }
`
injectGlobal`
  @font-face {
     font-family: 'open sans regular';
     src: url('my-source.ttf');
  }
`
injectGlobal`
  @font-face {
     font-family: 'open sans semi bold';
     src: url('my-source.ttf');
  }
`
injectGlobal`
  @font-face {
     font-family: 'open sans semi bold italic';
     src: url('my-source.ttf');
  }
`
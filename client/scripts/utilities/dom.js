/** 关于 dom 一些常用方法的封装 */
/** 添加 class */
const addClass = ( el, className ) => {
  if ( el.classList ) {
    el.classList.add( className );
  } else {
    el.className += ` ${ className }`;
  }
};

// 删除 class
const removeClass = ( el, className ) => {
  if ( el.classList ) {
    el.classList.remove( className );
  } else {
    el.className = el.className.replace( new RegExp( `(^|\\b)${ className.split( ' ' ).join( '|' ) }(\\b|$)`, 'gi' ), ' ' );
  }
};

// 获取元素的纵坐标（相对于窗口）
const getOffsetTop = ( e ) => {
  let offset = e.offsetTop;

  if ( e.offsetParent !== null ) offset += getOffsetTop( e.offsetParent );

  return offset;
};

// 获取元素的横坐标（相对于窗口）
const getOffsetLeft = ( e ) => {
  let offset = e.offsetLeft;

  if ( e.offsetParent !== null ) offset += getOffsetLeft( e.offsetParent );

  return offset;
};

const scrollSmoothly = (id) => {
  let elem = document.getElementById(id);
  if ( elem ) {
    let scrollPos = getOffsetTop(elem);
    scrollPos = document.documentElement.scrollTop - scrollPos;
    let remainder = scrollPos % 50;
    let repeatTimes = ( Math.abs( scrollPos ) - remainder) / 50;
    scrollToControl(scrollPos, repeatTimes);
    window.scrollBy(0, remainder - 60);
  }
};

let repeatCount = 0;
let cTimeout;

const scrollToControl= (scrollPos, repeatTimes) => {
  if (repeatCount < repeatTimes) {
    window.scrollBy(0, 50);
  }
  else {
    repeatCount = 0;
    clearInterval(cTimeout);
    return;
  }
  repeatCount++;
  cTimeout = setInterval( scrollToControl( scrollPos, repeatTimes ), 5000 );
};

export { addClass, removeClass, getOffsetTop, getOffsetLeft, scrollSmoothly };

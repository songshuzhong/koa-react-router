/**
 * Created by renxuanwei on 2017/8/16.
 */

const getCookies= (name) => {

    let cookies = document.cookie;
    let arrcookies = cookies.split(';');
    for(let i = 0; i <arrcookies.length; i++ ) {
        let arr = arrcookies[i].split("=");
        if(arr[0] === name) {
            return arr[1];
        }
    }
};
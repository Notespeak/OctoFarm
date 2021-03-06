export default class Validate {
    //Check the validity of a URL
    static URL(u) {
        let elm;
        if (!elm) {
            elm = document.createElement('input');
            elm.setAttribute('type', 'url');
        }
        elm.value = u;
        return elm.validity.valid;
    }
    static IP(ipaddress) {
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
            return true;
        } else {
            return false;
        }

    }
    static JSON(file) {
        if (/^[\],:{}\s]*$/.test(file.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            return true;
        } else {
            return false;
        }
    }
}
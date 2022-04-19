// Observe class
function Observe(data) {
    let signals = {};

    data.observe = function (property, signalHandler) {
        if(!signals[property]) signals[property] = [];

        signals[property].push(signalHandler)
    };

    observeData(data);

    function notify (signal) {
        if(!signals[signal] || signals[signal].length < 1) return;
        signals[signal].forEach((signalHandler) => signalHandler());
    }

    function makeReactive (obj, key) {
        let val = obj[key];

        Object.defineProperty(obj, key, {
            get () {
                return val;
            },
            set (newVal) {
                val = newVal;
                notify(key);
            }
        })
    }

    function observeData (obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                makeReactive(obj, key);
            }
        }
    }

    return data;
}
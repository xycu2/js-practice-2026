const appData = {
    name: 'Anna',
    age: 24,

    asking: function(str) {
        console.log(str);
    },

    logger: function() {
        for(let key in this) {
            console.log(`${key}: ${this[key]}`);
            
        }
    },
    start: function() {
        this.asking('Hello!'),
        this.logger()
    },
}

appData.start();
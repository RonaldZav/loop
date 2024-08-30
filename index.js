class Loop {
    constructor(times, sleepDuration, callback) {
        if (times < 0 || sleepDuration < 0) {
            console.error('\x1b[31m[@ronaldzav/loop] Error: You cannot enter a negative number! 0 has been taken as the actual value instead.\x1b[0m');
            this.times = Math.max(0, times);
            this.sleepDuration = Math.max(0, sleepDuration);
        } else {
            this.times = times;
            this.sleepDuration = sleepDuration;
        }
        this.callback = callback;
    }

    async execute() {
        for (let i = 0; i < this.times; i++) {
            this.callback(i);
            if (this.sleepDuration > 0) {
                await new Promise(resolve => setTimeout(resolve, this.sleepDuration));
            }
        }
    }
}

function loop(timesToRepet, sleepTime, callback) {
    const loopInstance = new Loop(timesToRepet, sleepTime, callback);
    loopInstance.execute();
    return loopInstance;
}

module.exports = loop;

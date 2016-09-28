export default class Schedule {
    constructor(funcToRun) {
        this.stop = ::this.stop;
        this.runAt = ::this.runAt;
        this.scheduleAt = ::this.scheduleAt;

        this.func = funcToRun;
        this.timerIdR = false;
        this.timerIdS = false;
        this.intervalId = false;
    }
    set trigger(newFunction) {
        this.func = newFunction;
    }
    get get() {
        return this.func;
    }
    static runAt(func, time) {
        if (typeof (func) === 'function') {
            return console.log('first argument has to be function');
        } else if (
            time.split(':').length !== 2 ||
            time.split(':')[0].length !== 2 ||
            time.split(':')[1].length !== 2
        ) {
            return console.log('second argument has to be string, which will present time: "**:**"');
        } else {
            let now = new Date(),
                tillFirstStart = new Date(
                        now.getFullYear(),
                        now.getMonth(),
                        now.getDate(),
                        time.split(':')[0],
                        time.split(':')[1]
                    ) - now;
            if (tillFirstStart <= 0) {
                tillFirstStart = new Date(
                        now.getFullYear(),
                        now.getMonth(),
                        now.getDate() + 1,
                        time.split(':')[0],
                        time.split(':')[1]
                    ) - now;
            }
            setTimeout(func, tillFirstStart);
        }
    }
    static scheduleAt(func, days, timeString) {
        let time = timeString;
        if (!time) time = '00:00';
        if (typeof (func) === 'function') {
            return console.log('first argument has to be function');
        } else if (!Number.isInteger(days)) {
            return console.log('second argument has to be number, which will present days');
        } else if (
            time.split(':').length !== 2 ||
            time.split(':')[0].length !== 2 ||
            time.split(':')[1].length !== 2
        ) {
            return console.log('third argument has to be string, which will present time: "**:**"');
        } else {
            let now = new Date(),
                tillFirstStart = new Date(
                        now.getFullYear(),
                        now.getMonth(),
                        now.getDate(),
                        time.split(':')[0],
                        time.split(':')[1]
                    ) - now,
                eachDays = days * 86400000;
            if (tillFirstStart <= 0) {
                tillFirstStart = new Date(
                        now.getFullYear(),
                        now.getMonth(),
                        now.getDate() + 1,
                        time.split(':')[0],
                        time.split(':')[1]
                    ) - now;
            }
            setTimeout(() => setInterval(func, eachDays), tillFirstStart);
        }
    }
    stop() {
        this.timerIdR ? clearTimeout(this.timerIdR) : null;
        this.timerIdS ? clearTimeout(this.timerIdS) : null;
        this.intervalId ? clearInterval(this.intervalId) : null;
    }
    runAt(time) {
        if (
            time.split(':').length !== 2 ||
            time.split(':')[0].length !== 2 ||
            time.split(':')[1].length !== 2
        ) {
            return console.log('second argument has to be string, which will present time: "**:**"');
        } else {
            let now = new Date(),
                tillFirstStart = new Date(
                        now.getFullYear(),
                        now.getMonth(),
                        now.getDate(),
                        time.split(':')[0],
                        time.split(':')[1]
                    ) - now;
            if (tillFirstStart <= 0) {
                tillFirstStart = new Date(
                        now.getFullYear(),
                        now.getMonth(),
                        now.getDate() + 1,
                        time.split(':')[0],
                        time.split(':')[1]
                    ) - now;
            }
            this.timerIdR = setTimeout(this.func, tillFirstStart);
        }
    }
    scheduleAt(days, timeString) {
        let time = timeString;
        if (!time) time = '00:00';
        if (!Number.isInteger(days)) {
            return console.log('second argument has to be number, which will present days');
        } else if (
            time.split(':').length !== 2 ||
            time.split(':')[0].length !== 2 ||
            time.split(':')[1].length !== 2
        ) {
            return console.log('third argument has to be string, which will present time: "**:**"');
        } else {
            let now = new Date(),
                tillFirstStart = new Date(
                        now.getFullYear(),
                        now.getMonth(),
                        now.getDate(),
                        time.split(':')[0],
                        time.split(':')[1]
                    ) - now,
                eachDays = days * 86400000;
            if (tillFirstStart <= 0) {
                tillFirstStart = new Date(
                        now.getFullYear(),
                        now.getMonth(),
                        now.getDate() + 1,
                        time.split(':')[0],
                        time.split(':')[1]
                    ) - now;
            }
            this.timerIdS = setTimeout(() => {
                this.intervalId = setInterval(this.func, eachDays);
            }, tillFirstStart);
        }
    }
}
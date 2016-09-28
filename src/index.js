export default class Schedule {
    constructor(funcToRun, ...args) {
        this.stop = ::this.stop;
        this.runAt = ::this.runAt;
        this.scheduleAt = ::this.scheduleAt;

        this.function = funcToRun;
        this.arguments = args;
        this.bind = false;
        this.timerIdR = false;
        this.timerIdS = false;
        this.interId = false;
    }

    set args(args) {
        this.arguments = args;
    }

    set func(newFunction) {
        this.function = newFunction;
    }

    set THIS(bindWith) {
        this.bind = bindWith;
    }

    run(...args) {
        let execute = this.function;
        if (this.bind) execute = this.function.bind(this.bind);
        execute(...args);
    }

    static runAt(time, func, ...args) {
        if (typeof (func) !== 'function') {
            return console.log('second argument has to be function');
        } else if (
            time.split(':').length !== 2 ||
            time.split(':')[0].length !== 2 ||
            time.split(':')[1].length !== 2
        ) {
            return console.log('first argument has to be string, which will present time: "**:**"');
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

            setTimeout(func, tillFirstStart, ...args);
        }
    }

    static scheduleAt(inter, timeString, func, ...args) {
        let time = timeString;
        if (!time) time = '00:00';
        if (typeof (func) !== 'function') {
            return console.log('third argument has to be function');
        } else if (
            (inter.slice(-2) !== 'ms' && !Number.isInteger(+inter.slice(0, -1))) ||
            (inter.slice(-2) === 'ms' && !Number.isInteger(+inter.slice(0, -2)))
        ) {
            return console.log('first argument has to be string ["number(ms || s || m || h || d)"]');
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
                    ) - now,
                interval;
            if (tillFirstStart <= 0) {
                tillFirstStart = new Date(
                        now.getFullYear(),
                        now.getMonth(),
                        now.getDate() + 1,
                        time.split(':')[0],
                        time.split(':')[1]
                    ) - now;
            }

            if (inter.slice(-2) === 'ms') {
                interval = +inter.slice(0, -2);
            } else if (inter.slice(-1) === 's') {
                interval = inter.slice(0, -1) * 1000;
            } else if (inter.slice(-1) === 'm') {
                interval = inter.slice(0, -1) * 60000;
            } else if (inter.slice(-1) === 'h') {
                interval = inter.slice(0, -1) * 3600000;
            } else if (inter.slice(-1) === 'd') {
                interval = inter.slice(0, -1) * 86400000;
            } else {
                return console.log('first argument has to be string ["number(ms || s || m || h || d)"]');
            }

            setTimeout(() => setInterval(func, interval, ...args), tillFirstStart);
        }
    }

    runAt(time) {
        if (typeof (this.function) !== 'function') {
            return console.log('You have to use function as argument in "new Schedule(arg)"');
        } else if (
            time.split(':').length !== 2 ||
            time.split(':')[0].length !== 2 ||
            time.split(':')[1].length !== 2
        ) {
            return console.log('first argument has to be string, which will present time: "**:**"');
        } else {
            let execute = this.function,
                now = new Date(),
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

            if (this.bind) execute = this.function.bind(this.bind);
            this.timerIdR = setTimeout(execute, tillFirstStart, ...this.arguments);
        }
    }

    scheduleAt(inter, timeString) {
        let time = timeString;
        if (!time) time = '00:00';
        if (typeof (this.function) !== 'function') {
            return console.log('You have to use function as argument in "new Schedule(arg)"');
        } else if (
            (inter.slice(-2) !== 'ms' && !Number.isInteger(+inter.slice(0, -1))) ||
            (inter.slice(-2) === 'ms' && !Number.isInteger(+inter.slice(0, -2)))
        ) {
            return console.log('first argument has to be string ["number(ms || s || m || h || d)"]');
        } else if (
            time.split(':').length !== 2 ||
            time.split(':')[0].length !== 2 ||
            time.split(':')[1].length !== 2
        ) {
            return console.log('second argument has to be string, which will present time: "**:**"');
        } else {
            let execute = this.function,
                now = new Date(),
                tillFirstStart = new Date(
                        now.getFullYear(),
                        now.getMonth(),
                        now.getDate(),
                        time.split(':')[0],
                        time.split(':')[1]
                    ) - now,
                interval;
            if (tillFirstStart <= 0) {
                tillFirstStart = new Date(
                        now.getFullYear(),
                        now.getMonth(),
                        now.getDate() + 1,
                        time.split(':')[0],
                        time.split(':')[1]
                    ) - now;
            }

            if (inter.slice(-2) === 'ms') {
                interval = +inter.slice(0, -2);
            } else if (inter.slice(-1) === 's') {
                interval = inter.slice(0, -1) * 1000;
            } else if (inter.slice(-1) === 'm') {
                interval = inter.slice(0, -1) * 60000;
            } else if (inter.slice(-1) === 'h') {
                interval = inter.slice(0, -1) * 3600000;
            } else if (inter.slice(-1) === 'd') {
                interval = inter.slice(0, -1) * 86400000;
            } else {
                return console.log('first argument has to be string ["number(ms || s || m || h || d)"]');
            }

            if (this.bind) execute = this.function.bind(this.bind);
            this.timerIdS = setTimeout(() => {
                this.interId = setInterval(execute, interval, ...this.arguments);
            }, tillFirstStart);
        }
    }

    stop() {
        this.timerIdR ? clearTimeout(this.timerIdR) : null;
        this.timerIdS ? clearTimeout(this.timerIdS) : null;
        this.interId ? clearInterval(this.interId) : null;
    }
}
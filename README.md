Small package to schedule function execution at specific time.
You can use this package on client and server side.

### Install
~~~sh
npm i --save schedule-js
~~~

### Examples

You can use ```Schedule``` as class to create object with following methods:
~~~js
import Schedule from 'schedule-js';

function catchClean(a, b, c) {...};

let autoCatchClean = new Schedule(catchClean, a ,b ,c); 
//first argument has to be function, rest of arguments will be pass to function

autoCatchClean.scheduleAt('1d', '18:00');
//will run function 'catchClean' at 18:00 and will rerun it every day.

Schedule.runAt('23:00', () => autoCatchClean.stop());
// at 23:00 will stop schedule

// - autoCatchClean.run(args) 
//execute function: autoCatchClean.run(arg1, arg2, arg3, ...) 

// - autoCatchClean.func 
//setter to change function: autoCatchClean.func = 'anoterFunction'

// - autoCatchClean.args 
//setter to change arguments, you have to pass argument/s in array: autoCatchClean.args = [arg1, arg2, arg3]

// - autoCatchClean.THIS 
//you can bind passed function: autoCatchClean.THIS = this

// - autoCatchClean.scheduleAt(interval, time) 
//schedule auto-run every "interval" first start at "time": autoCatchClean.scheduleAt('20s', '17:15')

// - autoCatchClean.runAt(time) 
//one time run at "time": autoCatchClean.runAt('12:12')

// - autoCatchClean.stop() 
//stop scheduled or/and one time run: autoCatchClean.stop()
~~~

You can also use static methods  of ```Schedule``` class:
~~~js
import Schedule from 'schedule-js';

function catchClean(arg1, arg2) {...};

- Schedule.scheduleAt('30m', '18:00', catchClean, arg1, arg2) 
//schedule auto-run every 30 minutes, schedule and firs ececution will be at 18:00

- Schedule.runAt('22:30', catchClean, arg1, arg2) 
//one time run at "22:30"
~~~

Note that if you use static methods you can't stop timer, it will stopped only with script.

### Usage

- ```scheduleAt(interval, time)```: 'interval' has to be string as following: ```'12345[ms || s || m || h || d]'```, 'time' has to be string as following: ```'23:30'```
- ```runAt(time)```: time has to be string as following: ```'23:30'```
- ```static scheduleAt(interval, time, func[, arg1, arg2, ...])``` and ```static runAt(time, func[, arg1, arg2, ...])```: same logic as above, but third argument has to be function which you are going to run by schedule, and all arguments after "func" will be passed to function.

####If you have any suggestion, please let me know.
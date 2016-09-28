#alpha version, package under active development, stable version will be pushed soon.
Small package to schedule function execution at specific time:

### Install
~~~sh
npm i --save schedule-js
~~~

### Examples

You can use ```Schedule``` as class to create function object with following methods:
~~~js
import Schedule from 'schedule-js';

function catchClean() {...};

let autoCatchClean = new Schedule(catchClean);

- autoCatchClean.get //return function which was used to create class
- autoCatchClean.scheduleAt(days, time) //schedule auto-run every "days" at "time"
- autoCatchClean.runAt(time) //one time run at "time"
- autoCatchClean.stop() //stop scheduled or/and one time run
~~~

You can also use static methods  of ```Schedule``` class:
~~~js
import Schedule from 'schedule-js';

function catchClean() {...};

- Schedule.scheduleAt(catchClean, days, time) //schedule auto-run every "days" at "time"
- Schedule.runAt(catchClean, time) //one time run at "time"
~~~

Note that if you use static methods you can't stop timer, it will stopped only with script.

### Usage

```scheduleAt(days, time)```: 'days' has to be integer number, time has to be string as following: ```'23:30'```
```runAt(time)```: time has to be string as following: ```'23:30'```
```static scheduleAt(func, days, time)``` and ```static runAt(func, time)```: same logic is above, but first argument has to be function which you are going to run by schedule.

Also if you create object using class as in first example, you can reset executing function by using setter ```.trigger```:
~~~js
import Schedule from 'schedule-js';

function catchClean() {...};
function cookeClean() {...};

let autoCatchClean = new Schedule(catchClean);
autoCatchClean.trigger = cookeClean; 
~~~
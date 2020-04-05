import {func} from './Main'
import Main from './Main'
import * as moment from 'moment';

const test = (a: number, b: number) => {
    console.log(a + b)
    console.log(moment().format('YYYY-MM-DD HH:mm:ss'))
    func(a + b)
    new Main().function(a + b)
    new Main().function2(a + b)
}

test(2 ,3)

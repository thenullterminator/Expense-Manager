import moment from 'moment'
import { deflate } from 'zlib';
const expenses=[{
      id:'1',
      description:'Rent 1',
      note:'',
      amount:12,
      createdAt:moment(0).subtract(4,'days').valueOf()
},
{
      id:'2',
      description:'Rent 23',
      note:'',
      amount:13,
      createdAt:moment(0).valueOf()
},
{
      id:'3',
      description:'Rent 3',
      note:'',
      amount:14,
      createdAt:moment(0).add(4,'days').valueOf()
}];

export default expenses;
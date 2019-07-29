import moment from 'moment';

const filters={

      text:'bill',
      sortBy:'amount',
      startDate:moment(0),
      endDate:moment(0).add(13,'days')
};

const altfilters={

      text:'',
      sortBy:'date',
      startDate:undefined,
      endDate:undefined
};

export {filters,altfilters};
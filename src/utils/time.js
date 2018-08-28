import moment from 'moment';


export const formatTimeToString = (time) => {
  const givenTime = moment.unix(time);
  const now = moment();
  
  const diffInSeconds = now.diff(givenTime, 'seconds');
  const diffInMinutes = now.diff(givenTime, 'minutes');
  const diffInHours   = now.diff(givenTime, 'hours');
  const diffInDays    = now.diff(givenTime, 'days');
  const diffInMonths  = now.diff(givenTime, 'months');
  const diffInYears   = now.diff(givenTime, 'years');


  if(diffInYears > 0) return diffInYears+' years ago';

  if(diffInMonths > 0) return diffInMonths+' months ago';
   
  if(diffInDays > 0) return diffInDays+' days ago';

  if(diffInHours > 0) return diffInHours+' hours ago';

  if(diffInMinutes > 0) return diffInMinutes+' minutes ago';

  return diffInSeconds+' seconds ago';
};
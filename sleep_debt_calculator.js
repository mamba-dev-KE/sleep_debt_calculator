const getSleepHours = day => {
    switch(day) {
      case 'Monday':
        return 8;
        case 'Tuesday':
        return 9;
        case 'Wednesday':
        return 6;
        case 'Thursday':
        return 4;
        case 'Friday':
        return 5;
        case 'Saturday':
        return 5;
        case 'Sunday':
        return 5;
    }
    };
    const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
    
    const getIdealSleepHours = () => {
      const idealHours = 7.5;
      return idealHours * 7; 
    };
    
    const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();
      const lessBy = idealSleepHours - actualSleepHours;
      const moreBy = actualSleepHours - idealSleepHours; 
    
      if (actualSleepHours === idealSleepHours) {
        console.log('You are getting the perfect amount of sleep!');
      } else if (actualSleepHours < idealSleepHours) {
        console.log(`You got ${lessBy} hour(s) less sleep than you needed this week`);
      } else {
        console.log(`You got ${moreBy} hour(s) more sleep than you needed this week`);
      }
    };
    
    calculateSleepDebt();
    
module.exports = require('react-native').StyleSheet.create({
  leftTop:{
    flexDirection:'row',
    justifyContent: 'flex-start',
  },
  centerTop:{
    flexDirection:'row',
    justifyContent: 'center',
  },
  rightTop:{
    flexDirection:'row',
    justifyContent: 'flex-end',
  },
  leftCenter:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  center:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightCenter:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  leftBottom:{
    flexDirection:'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  centerBottom:{
    flexDirection:'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  rightBottom:{
    flexDirection:'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  spaceBetween:{
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  spaceAround:{
    flexDirection:'row',
    justifyContent: 'space-around',
  },
  flexWrap:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
  flexNoWrap:{
    flexDirection:'row',
    flexWrap:'nowrap',
  }
});


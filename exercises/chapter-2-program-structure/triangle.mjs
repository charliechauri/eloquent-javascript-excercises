/**
* @name displayTriangle
* @description Write a loop that makes seven calls to console.log to output the following triangle:
  #
  ##
  ###
  ####
  #####
  ######
  #######
*/
const displayTriangle = (numberOfRepetitions = 7, figure = '#') => {
  let output = figure;

  while (output.length <= numberOfRepetitions) {
    console.log(output);
    output += figure;
  }
};

export default displayTriangle;


export default function windConversion(deg){
  
  var windConversion = (deg < 22.5) ? 'North' : 
  (deg < 67.5) ? 'Northeast' :
  (deg < 112.5) ? 'East' :
  (deg < 157.5) ? 'Southeast' :
  (deg < 202.5) ? 'South' :
  (deg < 247.5) ? 'Southwest' :
  (deg < 292.5) ? 'West' :
  (deg < 337.5) ? 'Northwest' : 'North';
  return windConversion;

};


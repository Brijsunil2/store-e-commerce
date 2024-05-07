const capaitalizeTitle = (str) => {
  const temp = str.toLowerCase().split(' ');
  for (var i = 0; i < temp.length; i++) {
    temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].substring(1);     
  }
  return temp.join(' '); 
}

export default capaitalizeTitle;

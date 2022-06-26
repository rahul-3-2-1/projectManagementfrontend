export default function CSVtoJSON(csv, emailList) {
    // console.log("csv is")
    // console.log(csv)
    var lines = csv.split("\n");
  
    var result = [];
  
    //Get the headers and fix the fields
    var headers = lines[0].split(",");
    for (let i in headers) {
      headers[i] = String(headers[i]).replace("\r", "");
    }
  
    //Iterate over all the rows
    // console.log(headers);
    for (var i = 1; i < lines.length - 1; i++) {
      var obj = {};
      var currentline = lines[i].split(",");
  
      //Insert each element of each row w.r.t corresponding field in the object,
      for (var j = 0; j < headers.length; j++) {
        //Fix the strings
        obj[headers[j]] = String(currentline[j])
          .replace("\r", "")
          .replace('"', "");
  
        //Get the list of emails and contacts, to be used for validation later on
        if (headers[j] === "email") {
          emailList.push(currentline[j]);
        }
        
      }
  
      result.push(obj);
    }
    // console.log(result);
  
    return result; //JavaScript object
  }
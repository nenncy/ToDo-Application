var CurrentDate=() =>{
    var date_ob = new Date();
    var day = ("0" + date_ob.getDate()).slice(-2);
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    var year = date_ob.getFullYear();
       
    var date = year + "-" + month + "-" + day;
    console.log(date);
        
    var hours = date_ob.getHours();
    var minutes = date_ob.getMinutes();
    var seconds = date_ob.getSeconds();
      
    return  day + "-" + month + "-" + year 
    
    
}
module.exports=CurrentDate;
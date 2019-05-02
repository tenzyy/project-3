


$.ajax({
    method:'get',
    url: " https://api.nytimes.com/svc/topstories/v2/science.json?api-key=0rDLQOWB9Rgp7vmdbqIgHe7T5j6S389t"
   })
  .done(function(data){
  console.log(data);
       
    
  });

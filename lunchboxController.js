var myAppController=angular.module('myApp',[]);
myAppController.controller('myCtrl',function($scope){
  console.log("inside new world")
      $scope.lunchItems = "";
    $scope.message = "do NOT consider an empty item, i.e., , , as an item towards to the count";
    
    $scope.inspectLunchBox = function () {
        var arrayOfitems = null;
          arrayOfitems=  calculateItems($scope.lunchItems);
        if (arrayOfitems.length > 3) {
            $scope.message = "Too much!";
        } else if (arrayOfitems.length >= 1 ) {
            if(arrayOfitems[0] !== ""){
                 $scope.message = "Enjoy!";
                
            }else{
            $scope.message = " Please enter data first";
        } 
        }
        function calculateItems(lunch) {
           
         console.log("what is present in  lunch" + lunch);
            var items = lunch.split(',');
            console.log ("inside split items name : "+items);
            console.log ("split output length : "+items.length);
            return items;
        }
    }
    
});

const initialPageView = () => {
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      let value = $(this).val().toLowerCase();
      $("#divWrap .delete").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
};

export {initialPageView};

;(function($) {
  
  $.simpleGrid = function(opts) {
    $(function() {
      var hgrid = opts.rowHeight, 
          vgrid = opts.columnWidth,
          griddedWidth = opts.gridWidth;
          

      // Add the switch
      $('body').append('<a id="jquery-simple-grid-view" style="display: block; text-indent: -9999px; z-index: 101; position: fixed; top: 10px; left: 10px; height: 10px; width: 10px; background-color: #ff99cc; border-radius: 10px;" href="">Grid</a>');
      
      $("#jquery-simple-grid-view").toggle(
        function () {
          var documentHeight = $(document).height() - Math.round(hgrid / 2);
          var gridHeight = hgrid - 1;
          var gridWidth = vgrid - 1;
          var vgrids = griddedWidth / vgrid;
          var hgrids = Math.round(documentHeight / hgrid);
          
          // Building the grid
          $('body').append('<div id="jquery-simple-grid" style="margin: 0; position: absolute; top: 0; width: ' + griddedWidth + 'px; pointer-events: none; z-index: 100; "><div id="hgrid"></div><div id="vgrid" style="position: absolute; top: 0; height: ' + documentHeight + 'px; "></div></div>');
          $("#jquery-simple-grid").css("left", ( $(document).width() - griddedWidth ) / 2);

          // Run through the amount of rows needed and build them
          var htmp = ''; 
          for (var i = 0; i < hgrids; i++) {
            htmp += '<div style="border-top: 1px dotted #ccc; height: ' + gridHeight + 'px; "></div>';
          } 
          $('#hgrid').append(htmp);

          // Run through the amount of columns needed and build them
          var vtmp = ''; 
          for (var i = 0; i < vgrids; i++) {
            vtmp += '<div style="border-left: 1px solid #ffccff; height: ' + documentHeight + 'px; width: '+gridWidth+'px; float: left; "></div>';
          } 
          $('#vgrid').append(vtmp);
          
          return false;
        },
        
        function () {
          $("#jquery-simple-grid").remove();
          return false;
        }
      );
    });
  };
}(jQuery));

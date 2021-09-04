<script>
$( document ).ready(function() {
  var cite = ' ';
  var psyteachr = ' <a href="https://sohmeiling.github.io/"><img src="images/atom-icon.png" style="height: 31px; color: white;" alt="Open Science: Physics Textbook" /></a>';
  var license = ' <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/" target="blank"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"></a>';

  $("footer div.row div:eq(1) p").html(
    psyteachr + license + cite
  );
});
</script>

$(window).load(function(){

  var sPositions = localStorage.positions || "{}",
      positions = JSON.parse(sPositions);
  $.each(positions, function (id, pos) {
      $("#" + id).css(pos)
  })

  $("#draggable01").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable02").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable03").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable04").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable05").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable06").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable07").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable08").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable09").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable10").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable11").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable12").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable13").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable14").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable15").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable16").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable17").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable18").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable19").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable20").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable21").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable22").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable23").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable24").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

  $("#draggable25").draggable({
      containment: "#containment-wrapper",
      scroll: false,
      stop: function (event, ui) {
          positions[this.id] = ui.position
          localStorage.positions = JSON.stringify(positions)
      }
  });

});

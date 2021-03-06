(function() {

  var Memory = {

    init: function(cards) {
      this.$game = $(".game");
      this.$modal = $(".modal");
      this.$overlay = $(".modal-overlay");
      this.$restartButton = $("button.restart");
      this.cardsArray = $.merge(cards, cards);
      this.shuffleCards(this.cardsArray);
      this.setup();
    },

    shuffleCards: function(cardsArray) {
      this.$cards = $(this.shuffle(this.cardsArray));
    },

    setup: function() {
      this.html = this.buildHTML();
      this.$game.html(this.html);
      this.$memoryCards = $(".card");
      this.paused = false;
      this.guess = null;
      this.binding();
    },

    binding: function() {
      this.$memoryCards.on("click", this.cardClicked);
      this.$restartButton.on("click", $.proxy(this.reset, this));
    },
    // kinda messy but hey
    cardClicked: function() {
      var _ = Memory;
      var $card = $(this);
      if (!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")) {
        $card.find(".inside").addClass("picked");
        if (!_.guess) {
          _.guess = $(this).attr("data-id");
        } else if (_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")) {
          $(".picked").addClass("matched");
          _.guess = null;
        } else {
          _.guess = null;
          _.paused = true;
          setTimeout(function() {
            $(".picked").removeClass("picked");
            Memory.paused = false;
          }, 600);
        }
        if ($(".matched").length == $(".card").length) {
          _.win();
        }
      }
    },

    win: function() {
      this.paused = true;
      setTimeout(function() {
        Memory.showModal();
        Memory.$game.fadeOut();
      }, 1000);
    },

    showModal: function() {
      this.$overlay.show();
      this.$modal.fadeIn("slow");
    },

    hideModal: function() {
      this.$overlay.hide();
      this.$modal.hide();
    },

    reset: function() {
      this.hideModal();
      this.shuffleCards(this.cardsArray);
      this.setup();
      this.$game.show("slow");
    },

    // Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
    shuffle: function(array) {
      var counter = array.length,
        temp, index;
      // While there are elements in the array
      while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }
      return array;
    },

    buildHTML: function() {
      var frag = '';
      this.$cards.each(function(k, v) {
        frag += '<div class="card" data-id="' + v.id + '"><div class="inside">\
				<div class="front"><img src="' + v.img + '"\
				alt="' + v.name + '" /></div>\
				<div class="back"><img src="images/logo.png"\
				alt="Codepen" /></div></div>\
				</div>';
      });
      return frag;
    }
  };

  var cards = [{
      name: "comic1",
      img: "images/comic1.png",
      id: 1,
    },
    {
      name: "comic2",
      img: "images/comic2.png",
      id: 2
    },
    {
      name: "comic3",
      img: "images/comic3.png",
      id: 3
    },
    {
      name: "comic4",
      img: "images/comic4.png",
      id: 4
    },
    {
      name: "comic5",
      img: "images/comic5.png",
      id: 5
    },
    {
      name: "comic6",
      img: "images/comic6.png",
      id: 6
    },
    {
      name: "comic7",
      img: "images/comic7.png",
      id: 7
    },
    {
      name: "comic8",
      img: "images/comic8.png",
      id: 8
    },
    {
      name: "holdingphone",
      img: "images/holdingphone.png",
      id: 9
    },
    {
      name: "jason",
      img: "images/jason-strip.png",
      id: 10
    },
    {
      name: "email",
      img: "images/email.png",
      id: 11
    },
    {
      name: "avenir",
      img: "images/avenir.png",
      id: 12
    },
  ];

  Memory.init(cards);


})();

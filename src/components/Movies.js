import godfather from "./assets/godFather.jpg"
import schindlerList from "./assets/schindlerList.jpeg"
import goodFellas from "./assets/goodFellas.jpg"
import theShawshankRedemption from "./assets/theShawshankRedemption.jpg"

const Movies = [
      {
        title: 'The Godfather',
        description:
          'Suit l\'histoire de la famille mafieuse Corleone pendant les années 1940.',
        trailer: "https://www.youtube.com/embed/UaVTIH8mujA",
        posterURL: godfather,
        rating: 4,
      },
      {
        title: 'Schindler\'s List',
        description:
          'Raconte l\'histoire vraie d\'Oskar Schindler, un homme d\'affaires allemand qui a sauvé la vie de plus de mille Juifs pendant l\'Holocauste. ',
        posterURL: schindlerList,
        rating: 4,
      },
      {
        title: 'Goodfellas',
        description:
          'suit l\'histoire de Henry Hill, un gangster qui monte les échelons de la mafia new-yorkaise.',
          trailer: 'https://www.youtube.com/embed/2ilzidi_J8Q',
        posterURL: goodFellas,
        rating: 3,
      },
      {
        title: 'The Shawshank Redemption',
        description:
          'Raconte l\'histoire de deux prisonniers qui se lient d\'amitié alors qu\'ils purgent leur peine à la prison de Shawshank.',
        posterURL: theShawshankRedemption,
        rating: 3,
      },
    ]

export default Movies

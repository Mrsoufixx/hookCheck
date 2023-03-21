import godfather from "./assets/godFather.jpg"
import schindlerList from "./assets/schindlerList.jpeg"
import goodFellas from "./assets/goodFellas.jpg"
import theShawshankRedemption from "./assets/theShawshankRedemption.jpg"

const Movies = [
      {
        title: 'The Godfather',
        description:
          'Suit l\'histoire de la famille mafieuse Corleone pendant les années 1940.',
        posterURL: godfather,
        rating: 8.5,
      },
      {
        title: 'Schindler\'s List',
        description:
          'Raconte l\'histoire vraie d\'Oskar Schindler, un homme d\'affaires allemand qui a sauvé la vie de plus de mille Juifs pendant l\'Holocauste. ',
        posterURL: schindlerList,
        rating: 8,
      },
      {
        title: 'Goodfellas',
        description:
          'suit l\'histoire de Henry Hill, un gangster qui monte les échelons de la mafia new-yorkaise.',
        posterURL: goodFellas,
        rating: 7,
      },
      {
        title: 'The Shawshank Redemption',
        description:
          'Raconte l\'histoire de deux prisonniers qui se lient d\'amitié alors qu\'ils purgent leur peine à la prison de Shawshank.',
        posterURL: theShawshankRedemption,
        rating: 7.5,
      },
    ]

export default Movies

// RegExp : Permet de chercher si certains éléments sont présent (Ex: Présence du "@" dans l'email) / Cours "Le Réacteur" à 10min de la vidéo "Cours sur les Filters", catégorie "Back", Jour 6
// MODEL
const MovieModel = require("../models/Movie");

const movieCtrl = {
  getAllMovies: async (req, res, next) => {
    try {
      //! création d'un objet dans lequel on va stocker nos différents filtres
      let filters = {};

      if (req.query.name) {
        filters.product_name = new RegExp(req.query.name, "i");
      }

      let sort = {};

      if (req.query.sort === "nameMovie-desc") {
        sort = { name: -1 };
      } else if (req.query.sort === "nameMovie-asc") {
        sort = { name: 1 };
      }

      let page;

      if (Number(req.query.page) < 1) {
        page = 1;
      } else {
        page = Number(req.query.page);
      }

      //   SKIP ET LIMIT
      let limit = Number(req.query.limit);
      // console.log(page, limit);
      //.skip(10) // = sauter l'affichage des 10 premières annonces

      const movies = await MovieModel.find(
        filters
        // { product_name: new RegExp("sac", "i") },
        // { product_price: { $gte: 50, $lte: 150 } }
      )
        .sort(sort)
        .limit(limit) // renvoyer y résultats
        .skip((page - 1) * limit); // ignorer les x résultats
      // .select("product_name product_price")
      // .populate({
      //   path: "owner",
      //   select: "account",
      // });
      //.countDo
      const total = await MovieModel.countDocuments({});

      const response = {
        total,
        movies,
      };

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = movieCtrl;

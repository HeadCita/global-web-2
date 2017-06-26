"use strict";

class SiteController{

    getSite(req, res, next){
        res.render('index',{
			title: "Global Car: Escuela de manejo para obtener tu brevete.",
			description: "Global Car es tu mejor opción como escuela de manejo y te brinda asesoramiento total para el trámite de tu brevete."
		});
    }

}

module.exports = SiteController;
const isMain =(req, res, next) =>{
    /**
     * This condition require the user Model to have a:
     * - isAdmin
     * - isMain
     * - isPrivate
     * Boolean keys (Which you added :)) But I guess you can see that
     * it is adding a lot of repetition.
     * A good way to do define different roles is using an enum
     * ie: Someone can be "admin" or - and "main" or - and "private"
     * Instead of having three fields you now just have one and need just
     * one middleware to check any of the status.
     * 
     * The point of this exercise was to check if someone was logged in but as we already
     * covered this part with the isLoggedIn middleware you created you own, that's great!
     * By following my previous advice and creating an enum on the model you could improve
     * this middleware a bit :) 
     */
    if(req.session.currentUser.isMain){
        return  next()
        }
    res.redirect("/profile");
};

module.exports = isMain;
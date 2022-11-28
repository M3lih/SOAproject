const getindexPage = (req, res) => {

  res.render("index",{
    link:"index",
  });

}

const getaboutPage = (req, res) => {
    res.render("about",{
      link:"about",
    });
  };

  const getregisterPage = (req, res) => {
    res.render("register",{
      link:"register",
    });
  };

  const getLoginPage = (req, res) => {
    res.render("login",{
      link:"login",
    });
  };


  const getLogout= (req,res) => {
    res.cookie("jwt","",{
      maxAge:1,
    });
    res.redirect("/");
  };

  export{ getindexPage , getaboutPage,getregisterPage,getLoginPage, getLogout };
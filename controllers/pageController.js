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

  export{ getindexPage , getaboutPage,getregisterPage };
const getindexPage = (req, res) => {
  res.render("index");

}

const getaboutPage = (req, res) => {
    res.render("about");
  
  }

  export{ getindexPage , getaboutPage };
export default function IsLogin(req, res){
    res.statusCode = 200;
    res.json({ name: req.cookies.a_name });
    
    console.log("res : " + res);
  };
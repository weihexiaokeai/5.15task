const path=require("path")
const webpack=require("webpack")
const HtmlWebpackPlugin=require("html-webpack-plugin")
const list=require("./src/data/banner.json")
module.exports={
  plugins: [
    new HtmlWebpackPlugin({  //base
          template:"./src/index.html",
          filename:"app.html",
          title:"1701B"
    }),
    new webpack.HashedModuleIdsPlugin //dev
  ],
    devServer:{
        open:true,
        port:8787,
        hot:true,
        host:"localhost",
        before(app){
           app.get("/api/list",function(req,res,next){
             res.send({code:1,data:list})
           })
        },
       
  }
}
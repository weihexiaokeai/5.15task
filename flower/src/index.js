import Axios from "axios";

Axios.get("/api/list").then((res)=>{
     var data=res.data;
    var  list=data.data.Datas.FlowerList
    var str=""
    list.forEach(item=>{
            str+=`
            <dl>
                <dt><img src="${item.Image}"></dt>
    
                <dd>
                     <p>${item.Name}</p>
                     <p>${item.Introduction}</p>
                     <p>${item.Price}</p>
                    <p>${item.Sales}</p>
                    <p>${item.NowPromo}</p>
                    <p><b></b></p>
                </dd>
    
            </dl>`
    })
    document.querySelector('.wrap').innerHTML=str;
})
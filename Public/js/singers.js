$(function(){
    let myScroll=new IScroll('.wrapper',{
        click:true
    });
    //////////////////////页面显示////////////////////////////////////////////
    let singersList=$('.singerslist>.scroll');
    let singersData=[];
    $.ajax('/php/ktv/index.php/singers/query',{
        method:'post',
        dataType:'json',
        success:function(data){
            console.log(data);
            singersData=data.filter(element=>{
                return element;
            });
            console.log(singersData);
            render(singersList,singersData);
            myScroll=new IScroll('.singerslist');
        }
    })
    function render(obj,data){
        obj.empty();
        let str='';
        for(let i=0;i<data.length;i++){
            str+=`
        <li>
            <img src="${data[i]['rimg']}" alt="">
            <div class="singer">
                <span class="rname">${data[i]['rname']}</span>
                <span class="rnum">(${data[i]['rnum']})</span>
            </div>
        </li>
            `;
        }
        obj.html(str);
    }
})
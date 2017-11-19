$(function(){
    let myScroll=new IScroll('.wrapper',{
        click:true
    });
    //////////////////////页面显示////////////////////////////////////////////
    let singersList=$('.songslist>.scroll');
    let singersData=[];
    $.ajax('/php/ktv/index.php/songs/query',{
        method:'post',
        dataType:'json',
        success:function(data){
            console.log(data);
            singersData=data.filter(element=>{
                return element;
            });
            console.log(singersData);
            render(singersList,singersData);
            myScroll=new IScroll('.songslist');
        }
    })
    function render(obj,data){
        obj.empty();
        let str='';
        for(let i=0;i<data.length;i++){
            str+=`
        <li>
            <span id="xuhao">01</span>
            <div class="son">
                <span>${data[i]['gname']}</span>
                <span>${data[i]['gtime']}</span>
            </div>
            <span class="add"></span>
        </li>
            `;
        }
        obj.html(str);
    }
})
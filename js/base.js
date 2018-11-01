    var add_content=JSON.parse(localStorage.getItem('keepwork')) || [];
    var quwork=JSON.parse(localStorage.getItem('keepwork')) || [];
    //添加缓存
    $(".add-btn").on('click',function(e){
        e.preventDefault();
        var add_text=$(".add-text").val();
        add_content.push(add_text);
        localStorage.setItem('keepwork',JSON.stringify(add_content));
        
        var html_text='<div class="task-item">'+
            '<span><input type="checkbox"></span>'+
            '<span class="task-content">'+add_content[add_content.length-1]+'</span>'+
            '<span class="task-del">删除</span>';
        $(".task-list").append(html_text);
        location.reload();
    })
    //加载显示
    function show(){
        for(let i=0;i<quwork.length;i++){
            var html_text='<div class="task-item">'+
                '<span><input type="checkbox"></span>'+
                '<span class="task-content">'+quwork[i]+'</span>'+
                '<span class="task-del">删除</span>';
            $(".task-list").append(html_text);
        }
    } 

    console.log(quwork);
    $(document).ready(function(){
        show();

        //删除显示
        $('.task-del').on('click',function(e){
        for(let i=0;i<quwork.length;i++){
           if($(this).parent().children()[1].innerHTML===quwork[i]){
                quwork.splice(i,1);
                add_content=quwork;
                $(this).parent().remove();
           }
        }
        localStorage.setItem('keepwork',JSON.stringify(add_content));
        })
        
    })
    
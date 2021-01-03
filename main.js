var app = new Vue({
    el : '#app', 
    data : {
        btnKey : '' , 
        showArea : true,
        showArea2 : false,
        showArea3 : false,
        showArea4 : false,
        logs : [
        ],
        addLogTitle : '',
        addLogContent : '',
        },
    methods:{
        showContents : function(event){ //見出しクリックで、ページを切り替える(表示するコンテンツを変更するメソッド)
            this.btnKey = event.target.innerText;
            if(this.btnKey === "PROFILE"){
                this.showArea  = true ;
                this.showArea2 = false ; 
                this.showArea3 = false ; 
                this.showArea4 = false ; 
            }else if(this.btnKey === "WORK"){
                this.showArea = false ;
                this.showArea2 = true ; 
                this.showArea3 = false ; 
                this.showArea4 = false ; 
            }else if(this.btnKey === "PORTFOLIO"){
                this.showArea = false ;
                this.showArea2 = false ; 
                this.showArea3 = true ; 
                this.showArea4 = false ; 
            }else if(this.btnKey === "LOG"){
                this.showArea = false ;
                this.showArea2 = false ; 
                this.showArea3 = false ; 
                this.showArea4 = true ; 
            }else{
                //ボタン内がその他であれば、何も返さない
            }
        },
        addLog : function(){ //Logを追加した際に、logプロパティにコンテンツを追加するメソッド
                if(confirm('タイトルは"' + this.addLogTitle + '"、' + '本文は"'+ this.addLogContent + '"でよろしいでしょうか。')){
                    this.logs.push({title : this.addLogTitle , content : this.addLogContent});
                }else{
                    //何もしない
                }
                this.addLogTitle = '';
                this.addLogContent = '';
        }
    } //methodsの締め
});// Vueの締め
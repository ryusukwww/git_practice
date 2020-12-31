var app = new Vue({
    el : '#app', 
    data : {
        btnKey : '' , 
        showArea : false,
        showArea2 : false,
        showArea3 : false,
        showArea4 : false,
        Header : '',
        Text : '',
        showLogHeader: '',
        showLogText: '',
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
        showLog : function(){ // LOGページでLOGを追加するためのメソッド
            this.showLogHeader = this.Header; 
            this.showLogText = this.Text; 
            alert('タイトルは"' + this.showLogHeader + '"、' + '本文は"'+ this.showLogText + '"でよろしいでしょうか。');
        },
    } //methodsの締め
});// Vueの締め
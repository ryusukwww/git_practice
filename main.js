var app = new Vue({
    el : '#app', 
    data : {
        btnKey : '' , 
        // ナビ→ページコンテンツ表示Data
        showArea : true,
        showArea1 : false,
        showArea2 : false,
        showArea3 : false,
        showArea4 : false,

        // PORTFOLIOページのタグソート機能Data
        wordpress : true,
        vuejs : true,
        htmlcss : true,
        uikit : true,
        illustrator : true, 
        all : true,

        date : '',
        today : '',

        //LOG追加機能Data
        logs : [],
        addLogTitle : '',
        addLogContent : '',
    
        sortButtonObject : {
            'uk-margin-small-right' : true,
            'uk-margin-samll-bottom' : true,
            'uk-label' : true,
            'uk-button' : true, 
        getlogs : [] ,
        }
    }, //dataの締め
    
    created(){
        axios.get('https://firestore.googleapis.com/v1/projects/portfolio-database-9f971/databases/(default)/documents/logs'
        )
        .then(response => {
            this.getlogs = response.data.documents;
            console.log(response.data.documents);
        })
    },

    computed:{
        showDate : function(){
            this.date = new Date();
            this.today = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate() + ' ' + this.date.getHours() + ':' + this.date.getMinutes();
        },
    },
    
    methods: {
        showContents : function(event){ //見出しクリックで、ページを切り替える(表示するコンテンツを変更するメソッド)
            this.btnKey = event.target.innerText;
            if(this.btnKey === "NAKAMURA RYUSUKE"){
                this.showArea = true ;
                this.showArea1 = false;
                this.showArea2 = false ; 
                this.showArea3 = false ; 
                this.showArea4 = false ; 
            }else if(this.btnKey === "PROFILE"){
                this.showArea = false ;
                this.showArea1 = true;
                this.showArea2 = false ; 
                this.showArea3 = false ; 
                this.showArea4 = false ; 
            }else if(this.btnKey === "WORK"){
                this.showArea = false ;
                this.showArea1 = false;
                this.showArea2 = true ; 
                this.showArea3 = false ; 
                this.showArea4 = false ; 
            }else if(this.btnKey === "PORTFOLIO"){
                this.showArea = false ;
                this.showArea1 = false;
                this.showArea2 = false ; 
                this.showArea3 = true ; 
                this.showArea4 = false ; 
            }else if(this.btnKey === "LOG"){
                this.showArea = false ;
                this.showArea1 = false;
                this.showArea2 = false ; 
                this.showArea3 = false ; 
                this.showArea4 = true ; 
            }else{
                //ボタン内がその他であれば、何も返さない
            }
        },
        sortCategoryWordpress : function (){ //PORTFOLIOページのタグソート機能 WordPress
            this.wordpress = !this.wordpress ? true : false ; 
            this.all =  true;
            this.vuejs = true;
            this.htmlcss = true;
            this.uikit = true;
            this.illustrator = true;
        },
        sortCategoryVuejs : function (){ //PORTFOLIOページのタグソート機能 vuejs
            this.vuejs = !this.vuejs ? true : false ; 
            this.all =  true;
            this.wordpress = true;
            this.htmlcss = true;
            this.uikit = true;
            this.illustrator = true;
        },
        sortCategoryHtmlcss : function (){ //PORTFOLIOページのタグソート機能 Html/css
            this.htmlcss = !this.htmlcss ? true : false ; 
            this.all =  true;
            this.wordpress = true;
            this.vuejs = true;
            this.uikit = true;
            this.illustrator = true;
        },
        sortCategoryUikit : function (){ //PORTFOLIOページのタグソート機能 UIKIT
            this.uikit = !this.uikit ? true : false ; 
            this.all =  true;
            this.wordpress = true;
            this.vuejs = true;
            this.htmlcss = true;
            this.illustrator = true;
        },
        sortCategoryIllustrator : function (){ //PORTFOLIOページのタグソート機能 Illustrator
            this.illustrator = !this.illustrator ? true : false ; 
            this.uikit = !this.uikit ? true : false ; 
            this.all =  true;
            this.wordpress = true;
            this.vuejs = true;
            this.htmlcss = true;
            this.uikit = true;
        },  
        sortCategoryReload : function (){ //PORTFOLIOページのタグソート機能 ALL
            this.wordpress = true ; 
            this.vuejs = true ; 
            this.htmlcss = true ; 
            this.uikit = true ; 
            this.illustrator = true ; 
            this.all = false ;
        },
        reload : function(){ //ページリロード
            location.reload();
        },
        createComment (){ 
            if(confirm('タイトルは"' + this.addLogTitle + '"、' + '本文は"'+ this.addLogContent + '"でよろしいでしょうか。')){
                this.logs.push({title : this.addLogTitle , content : this.addLogContent , day : this.today}); //Logを追加した際に、logプロパティにコンテンツを追加 → v-modelで表示
                axios.post('https://firestore.googleapis.com/v1/projects/portfolio-database-9f971/databases/(default)/documents/logs', //LOGに記入されたコンテンツを、axiosでfirebaseに送る
                {   
                    fields: {
                        addLogTitle: {
                            stringValue: this.addLogTitle
                            },
                        addLogContent: {
                            stringValue: this.addLogContent
                            },
                        today: {
                            stringValue: this.today
                            },
                        }
                    }
                )
                .then(response => {
                    console.log(response);
                })
                .catch(error  =>  {
                    console.log('error');
                });
                this.addLogTitle = "";
                this.addLogContent = ""; 
            }else{
                //何もしない
            }
        }
    } //methodsの締め
});// Vueの締め
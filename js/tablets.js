class Tablets{
    constructor(){
        this.mp = createElement('h2');

        this.mpRadio = createRadio();
        this.mpRadio.option("Taken");
        this.mpRadio.option("Not Taken");

        this.meth = createElement('h2');
        
        this.methRadio = createRadio();
        this.methRadio.option("Taken");
        this.methRadio.option("Not Taken");

        this.mp2 = createRadio();
        this.mp2.option("Fever");
        this.mp2.option("Bleeding");
        this.mp2.option("Hospitalisation");
        this.mp2.option("Forgot");
        this.mp2.option("Doctor said no");

        this.mp3 = createRadio();
        this.mp3.option("Fever");
        this.mp3.option("Bleeding");
        this.mp3.option("Hospitalisation");
        this.mp3.option("Forgot");
        this.mp3.option("Doctor said no");

        this.enter = createButton("Enter");

        this.bsa = createButton("Calculate BSA");
        this.counts = createButton("Labs");
        this.tablets = createButton("Tablets");
        this.dashboard = createButton("Dashboard");

    }   
    display(){
        this.bsa.show();
        this.bsa.position(0,height*1100/1200);
        this.bsa.style('background-color','red');
        this.bsa.style('color','yellow');
        this.bsa.style('font-size','80px');
        this.bsa.size(width/4,height*191/1171);
        this.bsa.mousePressed(()=>{
            if(h >=18&&h<=20){
                state = "BSA";
                console.log("Working");
            }
            else{
                console.log("Yes");
                state = "basic";
            }
        });

        this.counts.show();
        this.counts.position(width/4,height*1100/1200);
        this.counts.style('background-color','red');
        this.counts.style('color','yellow');
        this.counts.style('font-size','80px');
        this.counts.size(width/4,height*191/1171);
        this.counts.mousePressed(()=>{
            if(h >=18&&h<=20){
                state = "counts";
                console.log("Working");
            }
            else{
                console.log("Yes");
                state = "basic";
                background(bg4);
            }
        });

        this.tablets.show();
        this.tablets.position(width/2,height*1100/1200);
        this.tablets.style('background-color','red');
        this.tablets.style('color','yellow');
        this.tablets.style('font-size','80px');
        this.tablets.size(width/4,height*191/1171);
        this.tablets.mousePressed(()=>{
            if(h >=18&&h<=20){
                state = "tablets";
                console.log("Working");
            }
            else{
                console.log("Yes");
                state = "basic";
            }
        });

        this.dashboard.show();
        this.dashboard.position(width*3/4,height*1100/1200);
        this.dashboard.style('background-color','red');
        this.dashboard.style('color','yellow');
        this.dashboard.style('font-size','80px');
        this.dashboard.size(width/4,height*191/1171);
        this.dashboard.mousePressed(()=>{
            state = "dashboard";
        });

        this.mp.html("Have you taken your 6MP tablet today? ");
        this.mp.style('font-family','fantasy');
        this.mp.position(width/4,height*453/1171);
        this.mpRadio.position(width/4,height/2);
        this.mpRadio.style('width','150px');
        this.mpRadio.style('font-size','20px');
        this.mpRadio.style('font-family','cursive');
        this.enter.position(width/2,height*3/4);
        var mpVal = this.mpRadio.value();
        if(mpVal === "Not Taken"){
            this.mp2.show();
            this.mp2.style('width','50px');
            this.mp2.position(width/4, height*650/1171);
        }
        else{
            this.mp2.hide();
        }


        this.meth.html("Have you taken your Methotroxate tablet today? ");
        this.meth.style('font-family','fantasy');
        this.meth.position(width*3/4,height*453/1171);
        this.methRadio.position(width*3/4,height/2);
        this.methRadio.style('width','150px');
        this.methRadio.style('font-size','20px');
        this.methRadio.style('font-family','cursive');
        var methVal = this.methRadio.value();
        if(methVal === "Not Taken"){
            this.mp3.show();
            this.mp3.style('width','50px');
            this.mp3.position(width*3/4, height*650/1171);
        }
        else{
            this.mp3.hide();
        }
        if(mp === "Prescribed"){
            this.mp.show();
            this.mpRadio.show();
           
        }
        else{
            this.mp.hide();
            this.mpRadio.hide();
        }

        if(meth === "Prescribed"){
            this.meth.show();
            this.methRadio.show();
            
        }
        else{
            this.meth.hide();
            this.methRadio.hide();
        }
        this.enter.show();
        this.enter.style('color','red');
        this.enter.style('font-size','30px')
        this.enter.style('background-color','blue');
        this.enter.mousePressed(()=>{
            database.ref("username: "+username+"/Day/Day"+dayIndex+"/tablets").update({
                MP: mpVal,
                methotroxate: methVal
            });
            state = "basic";
            this.meth.hide();
            this.methRadio.hide();
            this.mp.hide();
            this.mpRadio.hide();

        });
    }
    hide(){
        this.mp.hide();
        this.mpRadio.hide();
        this.mp2.hide();
        this.mp3.hide();
        this.meth.hide();
        this.methRadio.hide();
        this.enter.hide();
        this.bsa.hide();
        this.counts.hide();
        this.tablets.hide();
        this.dashboard.hide();
    }

}
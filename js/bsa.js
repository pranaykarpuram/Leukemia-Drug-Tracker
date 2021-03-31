class BSA{
    constructor(){
        this.height = createInput("");
        this.weight = createInput("");
        this.title1 = createElement('h3');
        this.title2 = createElement('h3');
        this.bsa = createElement('h1');
        this.enter = createButton('Enter');

        this.bsaB = createButton("Calculate BSA");
        this.counts = createButton("Labs");
        this.tablets = createButton("Tablets");
        this.dashboard = createButton("Dashboard");
    }

    display(){

        this.bsaB.show();
        this.bsaB.position(0,height*1100/1200);
        this.bsaB.style('background-color','red');
        this.bsaB.style('color','yellow');
        this.bsaB.size(width/4,height*191/1171);
        this.bsaB.style('font-size','80px');
        this.bsaB.mousePressed(()=>{
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

        if(bState === 0){
        this.height.show();
        this.weight.show();
        this.title1.show();
        this.title2.show();
        this.enter.show();
        }
        else{
            this.height.hide();
            this.weight.hide();
            this.title1.hide();
            this.title2.hide();
            this.enter.hide();
        }
        this.title1.html("Enter Height(in cm): ");
        this.title1.style('font-family','cursive');
        this.title1.position(width/2,height/2-150);
        this.height.position(width/2,height/2-100);

        this.title2.html("Enter Weight(in kg): ");
        this.title2.style('font-family','cursive');
        this.title2.position(width/2,height/2);
        this.weight.position(width/2, height/2+100);

        this.enter.position(width/2,height*3/4);
        this.enter.style('color','yellow');
        this.enter.style('font-size','30px')
        this.enter.style('background-color','black');

        this.enter.mousePressed(()=>{
            bState === 1;

            var heights = this.height.value();
            var weight = this.weight.value();
            var bsa = (heights*weight)/3600^1/2
            this.bsa.show();
            this.bsa.html("Your Body Surface Area is: "+ bsa+"metre square");
            this.title1.style('font-family','fantasy');
            this.bsa.position(width*1235/2400, height*780/1200);
            database.ref("username: "+username+"/Day/Day"+dayIndex+"/counts").update({
                bsa: bsa
            });
        });





    }
    hide(){
        this.height.hide();
        this.weight.hide();
        this.title1.hide();
        this.title2.hide();
        this.bsa.hide();
        this.enter.hide();

        this.bsaB.hide();
        this.counts.hide();
        this.tablets.hide();
        this.dashboard.hide();
    }
}
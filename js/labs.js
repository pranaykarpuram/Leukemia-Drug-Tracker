class Labs{
    constructor(){
        this.wbc1 = createElement("h2");
        this.wbc = createInput("");

        this.hmg = createElement("h2");
        this.hmg1 = createInput("");

        this.platelet = createElement("h2");
        this.platelet1 = createInput("");
        this.today = createElement("h2");

        this.bsa = createButton("Calculate BSA");
        this.counts = createButton("Labs");
        this.tablets = createButton("Tablets");
        this.dashboard = createButton("Dashboard");



        this.enter = createButton("Enter");

    }

    display(){
        this.bsa.show();
        this.bsa.position(0,height*1100/1200);
        this.bsa.style('background-color','red');
        this.bsa.style('color','yellow');
        this.bsa.style('font-size','80px');
        this.bsa.size(width/4,height*191/1171);
        this.bsa.mousePressed(()=>{
            if(h >=12&&h<=20){
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

        this.wbc1.show();
        this.wbc.show();
        this.wbc1.html("Enter WBC count:");
        this.wbc1.style('font-family','monospace');
        this.wbc1.position(width/6, height*3/8);
        this.wbc.position(width/6, height/2);

        this.hmg.show();
        this.hmg1.show();
        this.hmg.html("Enter Haemoglobin Count:");
        this.hmg.style('font-family','monospace');
        this.hmg.position(width/2, height*3/8);
        this.hmg1.position(width/2, height/2);

        this.platelet.show();
        this.platelet1.show();
        this.platelet.html("Enter platelet Count: ");
        this.platelet.style('font-family','monospace');
        this.platelet.position(width*5/6,height*3/8);
        this.platelet1.position(width*5/6, height/2);

        this.today.html("Day "+dayIndex);
        this.today.style('font-family','fantasy');
        this.today.position(width/6, height*2/8);




        this.enter.show();
        this.enter.position(width/2, height*3/4);
        this.enter.style('color','blue');
        this.enter.style('font-size','30px')
        this.enter.style('background-color','orange');

        this.enter.mousePressed(()=>{
            database.ref("username: "+username+"/Day/Day"+dayIndex+"/counts").update({
                wbc: this.wbc.value(),
                hmg: this.hmg1.value(),
                platelet: this.platelet1.value()
            });
            state = "basic";
            /*this.wbc.hide();
            this.wbc1.hide();
            this.hmg.hide();
            this.hmg1.hide();
            this.platelet.hide();
            this.platelet1.hide();*/
        });



        

    }
    hide(){
        this.wbc.hide();
        this.wbc1.hide();
        this.hmg.hide();
        this.hmg1.hide();
        this.platelet.hide();
        this.platelet1.hide();
        this.bsa.hide();
        this.counts.hide();
        this.tablets.hide();
        this.dashboard.hide();
        this.today.hide();
        this.enter.hide();

    }
}
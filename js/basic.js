class Basic{
    constructor(){
        this.done = createElement("h2");
        this.bsa = createButton("Calculate BSA");
        this.counts = createButton("Labs");
        this.tablets = createButton("Tablets");
        this.dashboard = createButton("Dashboard");
        this.enter2 = createButton("Enter");
 
        this.progressI = createInput("");
        this.progress = createElement("h2");

        this.pText = createElement("h2")
        this.hmgVal = createElement("h2");
        this.pVal = createElement("h2");
        this.wbcVal = createElement("h2");
        this.please = createElement("h2");

        this.bsaVal = createElement("h2");
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

        this.done.show();
        this.done.html("Thank if you have entered the values, please wait until next day to enter your values again.");
        this.done.style('font-family','monospace');
        this.done.position(width/3,height/2);

        this.please.show();
        this.please.html("Please enter your values between 6pm - 9pm everyday.");
        this.please.style('font-family','monospace');
        this.please.position(width/3,height*1/4);

        this.progressI.show();
        this.progress.show();
        this.progress.html("Enter Day No. to view your counts:");
        this.progress.style('font-family','monospace');
        this.progress.position(width*19/24,height*280/1200);
        this.progressI.position(width*19/24, height*340/1200);
        dayVal = this.progressI.value();


        if(dayVal!==null){
            data.getWbc();
            data.getHmg();
            data.getPl();
            data.getBsa();
        }

        this.enter2.show();
        this.enter2.position(width*19/24, height*1/3);
        this.enter2.mousePressed(()=>{

            this.pText.show();
            this.pText.html("Your progress on Day"+dayVal+" was: ");
            this.pText.position(width/2,height/3);

            this.pVal.show();
            this.pVal.html("Platelet Count: "+pl);
            this.pVal.position(width/2,height*440/1200);

            this.wbcVal.show();
            this.wbcVal.html("WBC Count: "+wbc);
            this.wbcVal.position(width/2,height*480/1200);

            this.hmgVal.show();
            this.hmgVal.html("Haemoglobin: "+hmg);
            this.hmgVal.position(width/2,height*520/1200);

            this.bsaVal.show();
            this.bsaVal.html("Body Surface Area: "+bsaVal);
            this.bsaVal.position(width/2, height*560/1200);
        });
        
    }
    hide(){
        this.done.hide();
        this.bsa.hide();
        this.counts.hide();
        this.tablets.hide();
        this.dashboard.hide();
        this.progress.hide();
        this.progressI.hide();
        this.enter2.hide();
        this.pText.hide();
        this.pVal.hide();
        this.wbcVal.hide();
        this.hmgVal.hide();
        this.please.hide();
        this.bsaVal.hide();

    }
}
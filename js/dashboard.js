class Dashboard{
    constructor(){
        this.name = createElement('h2');
        this.number = createElement('h2');
        this.dob = createElement('h2');
        this.address = createElement('h2');
        //this.mail = createElement('h2');
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

        this.name.show();
        this.name.html("Name: "+names); 
        this.name.style('font-family','fantasy');
        this.name.style('color','green');
        this.name.position(width/4, height/2);

        this.number.show();
        this.number.html("Phone No. :"+number);
        this.number.style('font-family','fantasy');
        this.number.style('color','green');
        this.number.position(width/4, height*3/4);

        this.dob.show(); //Change to Age
        this.dob.html("Age: "+age);
        this.dob.style('font-family','fantasy');
        this.dob.style('color','green');
        this.dob.position(width*3/4,height/2);

        this.address.show();
        this.address.html("Address: "+address);
        this.address.style('font-family','fantasy');
        this.address.style('color','green');
        this.address.position(width*3/4, height*3/4);

        /*this.mail.show();
        this.mail.html("E-mail ID: "+data.mail);
        this.mail.position(width/2, height);*/

    }
    hide(){
        this.name.hide();
        this.number.hide();
        this.dob.hide();
        this.address.hide();
        this.bsa.hide();
        this.counts.hide();
        this.tablets.hide();
        this.dashboard.hide();
        //this.mail.hide();
    }
}
setInterval(()=>{
    d=new Date();
    htime=d.getHours();         //gets the live hour from our computer and is stored in htime
    mtime=d.getMinutes();       //gets the live minute from our computer and is stored in mtime
    stime=d.getSeconds();       //gets the live seconds from our computer and is stored in stime
    hrotation=30*htime + mtime/2;       //hrotation, mrotation and srotation are variables
    mrotation=6*mtime;
    srotation=6*stime;

    hour.style.transform=`rotate(${hrotation}deg)`;     //we are changing the css transform property here
    minute.style.transform=`rotate(${mrotation}deg)`;   //Here the hour, minute and second are the name of html ids
    second.style.transform=`rotate(${srotation}deg)`;   //rotate is a js function rotate(<val>)
},1000);                        //setInterval is another js function which performs a task every given time interval, here the time interval is 1000ms or 1sec
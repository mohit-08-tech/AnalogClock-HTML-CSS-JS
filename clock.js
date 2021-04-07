var updateIn = 1000;
      clock();
      function clock() {
        const date = new Date();
        const hours = ((date.getHours() + 11) % 12) + 1;
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const todayDate = date.toDateString();
        const todayWeekDay = date.getDay();
        const currentMonth = date.getMonth();
        const currentYear = date.getFullYear();

        const hour = hours * 30;
        const minute = minutes * 6;
        const second = seconds * 6;        
        const h = hours < 10 ? "0" + hours : hours;
        const m = minutes < 10 ? "0" + minutes : minutes;
        //Setting Day as week name
        if(todayWeekDay===0){
            document.querySelector(".weekDay").innerHTML = "Sunday";
        }
        else if(todayWeekDay===1){
            document.querySelector(".weekDay").innerHTML = "Monday";
        }
        else if(todayWeekDay===2){
            document.querySelector(".weekDay").innerHTML = "Tuesday";
        }
        else if(todayWeekDay===3){
            document.querySelector(".weekDay").innerHTML = "Wednesday";
        }
        else if(todayWeekDay===4){
            document.querySelector(".weekDay").innerHTML = "Thursday";
        }
        else if(todayWeekDay===5){
            document.querySelector(".weekDay").innerHTML = "Friday";
        }
        else if(todayWeekDay===6){
            document.querySelector(".weekDay").innerHTML = "Saturday";
        }


        //Setting Month Name
        if(currentYear===0){
            document.querySelector(".crrMonth").innerHTML = "January";
        }
        else if(currentMonth===1){
            document.querySelector(".crrMonth").innerHTML = "February";
        }
        else if(currentMonth===2){
            document.querySelector(".crrMonth").innerHTML = "March";
        }
        else if(currentMonth===3){
            document.querySelector(".crrMonth").innerHTML = "April";
        }
        else if(currentMonth===4){
            document.querySelector(".crrMonth").innerHTML = "May";
        }
        else if(currentMonth===5){
            document.querySelector(".crrMonth").innerHTML = "June";
        }
        else if(currentMonth===6){
            document.querySelector(".crrMonth").innerHTML = "July";
        }
        else if(currentMonth===7){
            document.querySelector(".crrMonth").innerHTML = "August";
        }
        else if(currentMonth===8){
            document.querySelector(".crrMonth").innerHTML = "September";
        }
        else if(currentMonth===9){
            document.querySelector(".crrMonth").innerHTML = "October";
        }
        else if(currentMonth===10){
            document.querySelector(".crrMonth").innerHTML = "November";
        }
        else if(currentMonth===11){
            document.querySelector(".crrMonth").innerHTML = "December";
        }

        // Placing all values in DOM
        document.querySelector(".hours").innerHTML = h;
        document.querySelector(".mins").innerHTML = m;
        document.querySelector(".date").innerHTML = todayDate;
        document.querySelector(".crrYear").innerHTML = currentYear;
        document.querySelector(".hour").style.transform = `rotate(${hour}deg)`;
        document.querySelector(".minute").style.transform = `rotate(${minute}deg)`;
        document.querySelector(".second").style.transform = `rotate(${second}deg)`;
      }
      setInterval(clock, updateIn);
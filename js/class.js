const Addbtn_St=document.querySelector(".Addbtn");
const Add_st_card=document.querySelector(".Add_student");
const mainsection=document.querySelector(".main");


let flag=0;
Addbtn_St.addEventListener("click",()=>{
    mainsection.classList.add("Filter")
    flag+=1;
    if(flag===1){
         Add_st_card.insertAdjacentHTML("beforeend",`
        <div class="Add_stu">
          <div class="title">
            <h4>شاگرد جدید</h4>
          </div>
          <div class="student_form">
            <form action="">
              <input type="text" placeholder="نام" />
              <input type="text" placeholder="نام پدر" />
              <input type="text" placeholder="مضمون" />
              <input type="text" placeholder="استاد" />
              <input type="text" placeholder="فیس" />
              <input type="date" placeholder="تاریخ ورد" />
              <input type="number" placeholder="تلیفن" />
              <select name="" id="">
                <option value="پرداخت شد">پرداخت شد</option>
                <option value="پرداخت نشد">پرداخت نشد</option>
              </select>
              <div class="btns">
                <button class="btn btn-sm btn-info">ذخیره</button>
                <button class="btn btn-sm btn-warning">بستن</button>
              </div>
            </form>
          </div>
        </div>
        `);
    }
    else{
        
    }
   
});

  


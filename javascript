form.addEventListener('submit', (event) => {
            event.preventDefault();
            validate();
        })

        const sendData = (sRate, count)=>{
            if (sRate === count){
                alert('Hello')
                swal("Good job!"+ nameVal, "You clicked the button!", "success");
                location.href = 'demo.html'
            }
        }


        const successMsg = ()=>{
            let formG =document.getElementsByClassName('form-group');
            
            var count = formG.length - 1;
            for(var i=0; i < formG.length; i++ ){
                if(formG[i].className ==='form-group success'){
                    var sRate = 0 + i;
                    console.log(sRate);
                    sendData(sRate, count);
                }else{
                    return false;
                }
            }
        }









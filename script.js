const form=document.getElementById("generate-form")
const qr =document.getElementById("qrcode")


const onGenarateSubmit = (e)=>{
    e.preventDefault();
    clearnUi();

    const url =document.getElementById("url").value;
    const size = document.getElementById("size").value

    if(url==""){
        alert("please enter a valid url")
    }else{
        showSpinner();
       
        setTimeout(()=>{
            hideSpinner();
            generateQrCode(url,size);

            setTimeout(()=>{
                const saveUrl=qr.querySelector("img").src;
                createSaveBtn(saveUrl);
            },50);
        },1000)
        
    }

    
    console.log(url,size);
};

const generateQrCode=function(url,size){
    const qrcode=new QRCode("qrcode",{
        text:url,
        width:size,
        height:size
    })
}


const clearUi=function(){
    qr.innerHTML="";
}


const showSpinner=function(){
    document.getElementById("spinner").style.display = "block";
};

const hideSpinner=function(){
    document.getElementById("spinner").style.display = "none";
};

const createSaveBtn=function(saveUrl){
    const link =document.createElement("a");
    link.id="savelink";
    link.classList="download-btn";
    link.href=saveUrl;
    link.download="qrcode";
    link.innerHTML="save Image";
    document.getElementById("generated").appendChild(link);


};

hideSpinner();






form.addEventListener("submit" , onGenarateSubmit)
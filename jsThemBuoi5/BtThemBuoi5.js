/**
 * Bài 1:tính thuế thu nhập cá nhân
 * 
 * btnTTT
 * - input:
 * + Ten
 * + TTN
 * + NPT
 * + TTT = "";
 * 
 * -progress
 * chiuThue=TTN-4-NPT*1.6;
 * 
 * if(chiuThue>4 && chiuThue==60){
 * TTT += chiuThue*0,05;
 * }else if(chiuThue>60 && chiuThue<=120){
 * TTT += chiuThue*0.1;
 * }else if(chiuThue>120 && chiuThue<=210){
 * TTT += chiuThue*0.15;
 * }else if(chiuThue>210 && chiuThue<=384){
 * TTT += chiuThue*0.20;
 * }else if(chiuThue>384 && chiuThue<=624){
 * TTT += chiuThue*0.25;
 * }else if(chiuThue>624 && chiuThue<=960){
 * TTT += chiuThue*0.30;
 * }else if(chiuThue>960){
 * TTT += chiuThue*0.35;
 * }else{
 * TTT += alrert("Số tiền thu nhập không hơn lệ");
 * };
 * 
 * -format tien te:
 * currentFormat=new Intl.NumberFormat("VN-vn");
 * 
 * -output:
 * inner ra man hinh = TTT;
 */

var btnTTT = document.getElementById("btnTTT");
btnTTT.onclick = function(){
    //input:
    var Ten = document.getElementById("Ten").value;
    var TTN = document.getElementById("TTN").value*1;
    var NPT = document.getElementById("NPT").value*1;
    var TTT = 0;

    //progress
    var chiuThue = TTN-4000000-NPT*1600000;
     if(chiuThue>0 && chiuThue<=60000000){
     TTT += chiuThue*(5/100);
     }else if(chiuThue>60000000 && chiuThue<=120000000){
     TTT += chiuThue*(10/100)
     }else if(chiuThue>120000000 && chiuThue<=210000000){
     TTT += chiuThue*(15/100);
     }else if(chiuThue>210000000 && chiuThue<=384000000){
     TTT += chiuThue*(20/100);
     }else if(chiuThue>384000000 && chiuThue<=624000000){
     TTT += chiuThue*(25/100);
     }else if(chiuThue>624000000 && chiuThue<=960000000){
     TTT += chiuThue*(30/100);
     }else if(chiuThue>960000000){
     TTT += chiuThue*(35/100);
     }else{
     TTT += alert("Số tiền thu nhập không hơn lệ");
     };

     //format tien
     var currentFormat=new Intl.NumberFormat("VN-vn");
     //output
     document.getElementById("showInfoTTT").innerHTML="<p class='alert alert-success'>Họ tên: "+Ten+"</p><p class='alert alert-success'>Tiền thuế thu nhập cá nhân: "+ currentFormat.format(TTT) +"VND</p>";
};

/**
 * Bài 2:Tính tiền cáp
 *
 * + tao function display none va block.
 * myFunction(){
 * lay gia tri:var chonKhach= id("chonKhach").value
 * lấy tới id("SKN")=>thêm style.display = nếu chonKhach=="doanhNghiep"=>true=block và false="none"};
 * 
 * - tao function tính tổng:
 * function tinhTong(a,b,c,d,e,f){
 * var tong=0;
 * e>10?tong+=(e-10)*f:tong+=(a+b+c*d)
 * return tong;
 * }
 * chú thích:
 * a:phí xử lí hóa đơn
 * b:phí dịch vụ cơ bản
 * c:tiền thuê kênh cao cấp
 * d:số kênh cao cấp kết nối
 * e:số kết nối 
 * f:mỗi kết nối thêm(neu doanhNghiep>0 thi 1ketnoi +5$)
 * 
 * 
 * + btnTienCap
 * - input:
 * + chonKhach: nhaDan or doanhNghiep;
 * + maKH
 * + kenhCC
 * + SKN
 * + tienCap=0;
 * 
 * - Progress:
 * if(chonKhach=="doanhNghiep"){
 * tienCap+= tinhTong(15,75,50,kenhCC,SKN,5);
 * }else if(chonKhach=="nhaDan"){
 * tienCap+= tinhTong(4.5,20.5,7.5,kenhCC,0,0);
 * }else{
 * tienCap+= alert("Hãy chọn loại khách hàng");
 * };
 * - format tien:
 * const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})
 * 
 * - Output:
 * inner ra man hinh = currentFormat(tienCap);
 * 
 * 
 */




//   function myFunction() {
//     var chonKhach = document.getElementById("chonKhach").value;
//     var SKN = document.getElementById("SKN");
//     if(chonKhach=="doanhNghiep"){
//         SKN.style.display="block";
//     }else{SKN.style.display="none"}
//   };
function myFunction() {
    var chonKhach = document.getElementById("chonKhach").value;
    document.getElementById("SKN").style.display=chonKhach=="doanhNghiep"?"block":"none";
};
function tinhTong(a,b,c,d,e,f){
    var tong=0;

e>10?tong+=(a+b+c*d)+(e-10)*f:tong+=(a+b+c*d);
 return tong; 
};
var btnTienCap = document.getElementById("btnTienCap");
btnTienCap.onclick = function(){
    //input:
    var chonKhach = document.getElementById("chonKhach").value;
    var maKH = document.getElementById("maKH").value;
    var kenhCC = document.getElementById("kenhCC").value*1;
    var SKN = document.getElementById("SKN").value*1;
    var tienCap = 0;
    //progress
     if(chonKhach=="doanhNghiep"){
     tienCap+= tinhTong(15,75,50,kenhCC,SKN,5);
     }else if(chonKhach=="nhaDan"){
     tienCap+= tinhTong(4.5,20.5,7.5,kenhCC,0,0);
     }else{
     tienCap+= alert("Hãy chọn loại khách hàng");
     };
     //format money
     const FORMATTER = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      });
    //Output:
    document.getElementById("showInfoTienCap").innerHTML ="<p class='alert alert-success'>Mã khách hàng: "+maKH+"</p><p class='alert alert-success'>Tiền cáp: "+ FORMATTER.format(tienCap)+"</p>";
}

/**
 * Created by Administrator on 2017/4/1.
 */
var carShop = (function(){
    var carShopReturn = {
        TotalNumber:TotalNumber,
        TotalPrice:TotalPrice,
        AddSub:AddSub,
        GoodsDetails:GoodsDetails
    };
    return carShopReturn;

    /*��Ʒ�ܼ���*/
    var show_number = document.getElementById('show_number');
    function TotalNumber(){

        show_number.innerHTML=parseInt(document.getElementById('show_number').innerHTML)+1;
    };
    /*��Ʒ�ܼ۸�*/
    function TotalPrice(){

    };
    /*�������*/
    /*��Ʒ���ﳵ�Ӽ�*/
    function AddSub(){
        var num_jia = document.getElementById("num-jia");
        var num_jian = document.getElementById("num-jian");
        var input_num = document.getElementById("input-num");

        num_jia.onclick = function() {

            input_num.value = parseInt(input_num.value) + 1;
        }

        num_jian.onclick = function() {

            if(input_num.value <= 0) {
                input_num.value = 0;
            } else {

                input_num.value = parseInt(input_num.value) - 1;
            }

        }
    };
    /*��ƷС��*/
    function AddSub(){

    };
    /*ͳ����Ʒ��������*/
    function GoodsDetails(){
        var GoodDeta = [];
        GoodDeta.push(carDataDe);
        console.log(GoodDeta.name);
    };
})();

/*
class BasicPlan {
    static canStream = true;
    static canDownload = true;
    static hasSD = true;
    static hasHD = false;
    static hasUHD = false;
    static numOfDevices = 1;
    static price = '$8.99';

}
class StandartPlan extends BasicPlan {
    static hasHD = true
    static numOfDevices = 2
    static price = "$12.99"
}

class PremiumPlan extends StandartPlan {
    static hasUHD = true
    static numOfDevices = 4
    static price = "$15.99"

}
console.log(BasicPlan.price);   // $8.99
console.log(StandartPlan.price);// $12.99
console.log(PremiumPlan.price); // $15.99
*/
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
////////////////// bez extends //////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
class BasicPlan {
    static canStream = true;
    static canDownload = true;
    static hasSD = true;
    static hasHD = false;
    static hasUHD = false;
    static numOfDevices = 1;
    static price = '$8.99';

}
class StandartPlan {
    static canStream = true;
    static canDownload = true;
    static hasSD = true;
    static hasHD = true
    static hasUHD = false
    static numOfDevices = 2
    static price = "$12.99"
}

class PremiumPlan {
    static canStream = true;
    static canDownload = true;
    static hasSD = true;
    static hasHD = true
    static hasUHD = true
    static numOfDevices = 4
    static price = "$15.99"

}
console.log(BasicPlan.price);   // $8.99
console.log(StandartPlan.price);// $12.99
console.log(PremiumPlan.price); // $15.99

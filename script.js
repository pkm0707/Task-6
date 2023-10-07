// Write a “person” class to hold all the details.
class person 
{
    constructor(name,dob,email,qualification,gender,maritalStatus,phoneno,address) 
    {
        this.name = name
        this.dob = dob
        this.email = email
        this.qualification = qualification
        this.gender = gender
        this.maritalStatus = maritalStatus
        this.phoneno = phoneno
        this.address = address
    }
}
let output_1 = new person("Praveen Kumar M", "07.04.1999","praveen.guvi@gmail.com","B.E","male","single","9874561234","madurai");
let output_2 = new person("Sakthi Kumar M", "08.04.1999","sakthi.guvi@gmail.com","B.E","male","single","9874561243","karaikudi");
console.log(output_1)
console.log(output_2)
//---------------------------------------------------------------------------------------------------------------------------------------------
// write a class to calculate the uber price (1)
class uber 
{
    constructor(date,start,end,vehicletype,km,price)
    {
      this.date = date
      this.start = start
      this.end = end
      this.vehicletype = vehicletype
      this.km = km
      this.price = price
    }
}
// real time calculation :
let uberprice_1 = new uber("1.10.2023","brigade xanadu","VR mall chennai","Auto","3.9","133.62")
let uberprice_2 = new uber("2.10.2023","brigade xanadu","VR mall chennai","uberGO","3.9","199.92")
let uberprice_3 = new uber("3.10.2023","brigade xanadu","VR mall chennai","Moto","3.9","48.15")
let uberprice_4 = new uber("4.10.2023","brigade xanadu","VR mall chennai","Premier","3.9","234.66")
let uberprice_5 = new uber("5.10.2023","brigade xanadu","VR mall chennai","Go Sedan","3.9","212.26")
let uberprice_6 = new uber("6.10.2023","brigade xanadu","VR mall chennai","uberXL","3.9","347.38")
console.log(uberprice_1)
console.log(uberprice_2)
console.log(uberprice_3)
console.log(uberprice_4)
console.log(uberprice_5)
console.log(uberprice_6)
//---------------------------------------------------------------------------------------------------------------------------------------------

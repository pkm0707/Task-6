// Question (3)
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
// Question (4)
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
// Question (1)
// (a),(d)
class movie
{
    constructor(t,s,r)
    {
        this.title  = t
        this.studio = s
        this.rating = r
    }
}
let ad_result_1 = new movie("title of the movie","studio that made the movie","PG13")
let ad_result_2 = new movie("Casino Royale","Eon Productions","PG13")
console.log(ad_result_1)
console.log(ad_result_2)
// (b)
class Movie
{
    constructor(t,s)
    {
        this.title  = t
        this.studio = s
        this.rating = "PG"
    }
}
let b_result_1 = new Movie("title of the movie","studio that made the movie")
let b_result_2 = new Movie("Casino Royale","Eon Productions")
console.log(b_result_1)
console.log(b_result_2)
// ---------------------------------------------------------------------------------------------------------------------------------------
// Question (2)
class circle
{
    constructor(radius,color)
    {
        this.radius = 1.0
        this.color  = "Red"
        if (typeof (radius) !== "undefined")
        {
            this.radius = radius;
        }
        if (typeof (color) !== "undefined")
        {
            this.color = color;
        }
    }
    getRadius() 
    {
        return this.radius
    }
    setRadius(radius) 
    {
        this.radius = radius
    }
    getColor() 
    {
        return this.color
    }
    setColor(color) 
    {
        this.color = color
    }
    toString() 
    {
        return "Radius: " + this.radius + " Color: " + this.color
    }
    getArea() 
    {
        return (2 * (Math.PI) * this.radius)
    }
    getCircumference() 
    {
        return (2 * this.radius)
    }
}
let c1 = new circle();
console.log("Constructor with no params: " + c1.toString());
let c2 = new circle(3.5);
console.log("Constructor with one param: " + c2.toString());
let c3 = new circle(2.2, 'Yellow');
console.log("getRadius: " + c3.getRadius());
c3.setRadius(3.3);
console.log("Radius value after setRadius: " + c3.getRadius());
console.log("getColor: " + c3.getColor());
c3.setColor("Blue");
console.log("Color Value after setColor: " + c3.getColor());
console.log(c3.toString());
console.log("Area: " + c3.getArea());
console.log("Circumference: " + c3.getCircumference());
// ---------------------------------------------------------------------------------------------------------------------------------------

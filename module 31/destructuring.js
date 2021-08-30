 const farhan ={
          name: "farhan Ishrak",
          age: 21,
          address: {
              village: "Bareya",
              post: 'Tentulia',
              thana: 'Kaligonj',
              district: 'satkhira'
          },
          family:{
              father: 'Abbu',
              mother: 'ammu',
              wife: {
                  name: 'fatema',
                  petname: "moharani",
                  address: 'dahaka',
                  work: 'student'
              }
          }
 }
 
 const { petname,work  }= farhan.family.wife;

 console.log(petname,work); 
 console.log(farhan.family.age);


 
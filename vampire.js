class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator=this;

  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {

    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
     let ct = 0;
     let current =this.creator
     while(current){
       current =current.creator;
       ct ++;
     }
     return ct;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let ageThis = this.numberOfVampiresFromOriginal;//  console.log(ct1);
  
    let ageVam = vampire.numberOfVampiresFromOriginal;//console.log(ct2);
    
    return ageVam>ageThis;
   
   }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let senior;
    let junior ;
   if(this.isMoreSeniorThan(vampire)){
     senior = this; 
     junior = vampire;
   }else{
   senior = vampire;
   junior = this ;
   }
   if(vampire.name===this.name){
     return vampire;
   }
   if(vampire.creator===null ){
     return vampire;
   }
   if(this.creator===null ){
    return this;
  }
  if(junior.creator===senior){
    return senior;
  }
   let juniorAncestors=[];
   let seniorAncestors=[];
    //junior.creator
    let ct= junior;
    while(ct.creator){
      juniorAncestors.push(ct.creator);
      ct=ct.creator;
    }
    let ct1= senior;
    while(ct1.creator){
      seniorAncestors.push(ct1.creator);
      ct1=ct1.creator;
    }
    
    console.log(juniorAncestors);
    console.log(seniorAncestors);
    for(let senior of seniorAncestors){
      if(juniorAncestors.includes(senior)){
        return senior;
      }else{
        return seniorAncestors[seniorAncestors.length-1];
      }
    }
  }
}

module.exports = Vampire;


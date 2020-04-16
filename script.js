function simplify(poly){
  let polyObject = {
      initial_poly: poly,
      members_positons: [0],
      members_array: [],
      members_array_objects: [],
      poly_digits: [],
      poly_letters: [],
      //sorted_poly_letters: [],

      get_members_posotions: function() {
          for (let i = 2; i < this.initial_poly.length; i++) {
              if (this.initial_poly.charAt(i) == '-' || this.initial_poly.charAt(i) == '+') this.members_positons.push(i)}},
      get_members_array: function() {
          for (let i = 0; i < this.members_positons.length; ++i) this.members_array.push(this.initial_poly.slice(this.members_positons[i],this.members_positons[i+1]))},
      get_poly_digits: function() {this.members_array.forEach(v => this.poly_digits.push((/[^a-z]+/.exec(v))[0]))},
      get_poly_letters: function() {this.members_array.forEach(v => this.poly_letters.push((/[a-z]+/.exec(v))[0]))},
      //sort_poly_letters: function() {this.sorted_poly_letters = this.poly_letters.sort()},
      make_members_array_objects: function() {for (let i=0; i < this.members_array.length; ++i) this.members_array_objects.push(new member(this.poly_digits[i], this.poly_letters[i]))},
      sort_members_array_objects: function() {polyObject.members_array_objects.forEach(v => v.letters.split('').sort().join(''))} //sort((a,b) => (a.letters > b.letters) ? 1 : -1)}
  }
  class member {
    constructor (digit, letters) {
        this.digit = digit
        this.letters = letters}}

  polyObject.get_members_posotions()
  polyObject.get_members_array()
  polyObject.get_poly_digits()
  polyObject.get_poly_letters()
  //polyObject.sort_poly_letters()
  polyObject.make_members_array_objects()
  polyObject.sort_members_array_objects()
console.log(polyObject); 

}


simplify('-a+5ab+3da-c-2a')

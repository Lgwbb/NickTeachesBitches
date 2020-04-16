function simplify(poly){
    let polyObject = {
        initial_poly: poly,
        members_positons: [0],
        members_array: [],
        poly_digits: [],

        //sorted_poly: [],
        get_members_posotions: function() {
            for (let i = 2; i < this.initial_poly.length; i++) {
                if (this.initial_poly.charAt(i) == '-' || this.initial_poly.charAt(i) == '+') this.members_positons.push(i)}},
        get_members_array: function() {
            for (let i = 0; i < this.members_positons.length; ++i) this.members_array.push(this.initial_poly.slice(this.members_positons[i],this.members_positons[i+1]))},
        //sort_poly: function ()
        get_poly_digits: function() {this.members_array.forEach(v => {v.length - v.search(/\d/)})}
            






    }
    polyObject.get_members_posotions()
    polyObject.get_members_array()
    polyObject.get_poly_digits()

console.log(polyObject);

}


  simplify('-a+5ab+3a-c-2a')

   console.log('-3b'.search(/\d+/));
   console.log(/\d/.exec('-33b'));

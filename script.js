function simplify(poly){
    let polyObject = {
        initial_poly: poly,
        members_positons: [0],
        members_array: [],
        poly_digits: [],
        poly_letters: [],
        members_array_objects: [],
        members_array_objects_sorted: [],
        prepared_for_math: [],
        after_math: [],
        answer: '',
        
        
        get_members_posotions: function() {
            for (let i = 2; i < this.initial_poly.length; i++) {
                if (this.initial_poly.charAt(i) == '-' || this.initial_poly.charAt(i) == '+') this.members_positons.push(i)}},
        get_members_array: function() {
            for (let i = 0; i < this.members_positons.length; ++i) this.members_array.push(this.initial_poly.slice(this.members_positons[i],this.members_positons[i+1]))},
        get_poly_digits: function() {this.members_array.forEach(v => this.poly_digits.push((/[^a-z]+/.exec(v))[0]))},
        get_poly_letters: function() {this.members_array.forEach(v => this.poly_letters.push((/[a-z]+/.exec(v))[0]))},
        make_members_array_objects: function() {for (let i=0; i < this.members_array.length; ++i) this.members_array_objects.push({digit : this.poly_digits[i], letters : this.poly_letters[i]})},
        sort_members_array_objects: function() {this.members_array_objects_sorted = this.members_array_objects.map(v => v.digit.concat(v.letters.split('').sort().join(''))).sort((a,b) => {
            let aSize = a.length - a.search(/[A-z]/) 
            let bSize = b.length - b.search(/[A-z]/)
            if (aSize === bSize) return ((/[a-z]+/.exec(a))[0] > (/[a-z]+/.exec(b))[0]) ? 1 : -1
            return (aSize > bSize) ? 1 : -1
          })},
        prepare_for_math: function() {this.prepared_for_math = this.members_array_objects_sorted.map(v => (v.search(/\d/) == -1) ? v[0].concat('1').concat(v.substring(1)) : v)},
        make_some_math: function() {this.after_math = this.prepared_for_math.map((v,i,arr) => {
            if (arr[i+1]) {
                if ((/[a-z]+/.exec(v)) && (/[a-z]+/.exec(v))[0] === (/[a-z]+/.exec(arr[i+1]))[0]) {arr[i+1] = "0" ; return  (parseInt(v) + parseInt(arr[i+1])).toString().concat((/[a-z]+/.exec(v))[0])}
                else return v 
            } 
            else return v
        }).filter( v => v !== "0")},
        prepare_answer: function() {this.answer = this.after_math.map(v => (/\d+/.exec(v)) == 1 ? v.replace(/(1)/, '') : v).join('')},
        prepare_answer_2: function() { if (this.answer[0] === '+') this.answer = this.answer.substring(1) }
    }
  
    polyObject.get_members_posotions()
    polyObject.get_members_array()
    polyObject.get_poly_digits()
    polyObject.get_poly_letters()
    polyObject.make_members_array_objects()
    polyObject.sort_members_array_objects()
    polyObject.prepare_for_math()
    polyObject.make_some_math()
    polyObject.prepare_answer()
    polyObject.prepare_answer_2()
    console.log(polyObject);
    return this.answer 
  }
  
  simplify('-abc+3a+2ac')

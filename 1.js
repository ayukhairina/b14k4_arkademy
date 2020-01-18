function biodata() {
    const data = JSON.parse(
        '{"name":"Ayu","age":22,"address":"Banjarbaru, Kalimantan Selatan","hobbies":["coding","reading"], "is_married" : false, "list_school" : [{"name":"CCIT FTUI","year_in":"2017","year_out":"2019", "major":"TIPS"}], "skills" : [{"Bahasa Inggris":"Intermediate","Programmer":"Beginner"}],"interest_in_coding":true}'
    );
    return data;
}
console.log(biodata());
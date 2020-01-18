function is_username_valid(username){
    const regex = /^[a-z_]{5,12}$/;
    return regex.test(username);
}
function is_password_valid(password) {
    const rgx = /^[0-9]{1,1}[A-Z]{5,5}$/;
    return rgx.test(password);
}
console.log(is_password_valid(1));
console.log(is_password_valid("WORLD1"));
console.log(is_username_valid("ayu_khairina"));
console.log(is_username_valid("_ayukhairina"));
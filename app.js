// কাস্টমার ফর্ম সাবমিট করার সময় এই ফাংশনটি রান হবে
function doLogin() {
    var voucherCode = document.getElementById('voucher').value.trim();
    
    if (voucherCode === "") {
        alert("দয়া করে একটি সঠিক ভাউচার কোড দিন।");
        return false;
    }
    
    // মাইক্রোটিক হটস্পটের নিয়ম অনুযায়ী ইউজারনেমই পাসওয়ার্ড হিসেবে সাবমিট হবে
    document.getElementById('password').value = voucherCode;
    return true;
}

var mang = [];

function nhapThemSo() {
    const nhapso = document.getElementById("nhapso").value;

    // Kiểm tra tính hợp lệ của số nhập vào
    var so = parseInt(nhapso);
    if (!isNaN(so)) {
        mang.push(so);
        const content = footerThemSo(mang);
        document.getElementById("footerThemSo").innerHTML = content;
    } else {
        alert("Vui lòng nhập một số hợp lệ!");
    }
}

function footerThemSo(data) {
    var content = "";
    for (var i = 0; i < data.length; i++) {
        const number = data[i];
        content += number + " ";
    }
    return content;
}

var btnThemSo = document.getElementById("btnThemSo");
btnThemSo.onclick = function () {
    nhapThemSo();
};

/**
 * tổng dương
 */
var btnTinhTongDuong = document.getElementById("btnTinhTongDuong");
btnTinhTongDuong.onclick = function () {
    // Tính tổng dương
    var content = tinhTongDuong(mang);
    document.getElementById("footerTinhTongDuong").innerHTML = content;

};


function tinhTongDuong(mang) {
    var sum = 0;
    for (var i = 0; i < mang.length; i++) {
        if (mang[i] > 0) {
            sum += mang[i];
        }
    }
    return sum;
}

/**
 * đếm dương
 */

var btnDemDuong = document.getElementById("btnDemDuong");
btnDemDuong.onclick = function ()
{
    var content = demDuong (mang);
    document.getElementById("footerDemDuong").innerHTML = content;
}

function demDuong (mang)
{
    var dem = 0;
    for (var i = 0; i< mang.length; i++)
    {
        if (mang[i]>0)
        {
            dem ++;
        }
    }
    return dem;
}

/**
 * Min
 */

var btnMin = document.getElementById("btnMin");
btnMin.onclick = function ()
{
    var content = min (mang);
    document.getElementById("footerMin").innerHTML = content;
}

function min (mang)
{
    var min = mang[0];
    for (var i = 0; i< mang.length; i++)
    {
        if (min>mang[i])
        {
            min = mang[i];
        }
    }
    return min;
}
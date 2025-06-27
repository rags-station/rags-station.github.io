function random() {
    var a = "";
    var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < 12; i++) {
        if (i % 4 == 0 && i != 0 && i != 12) {
            if (i == 8) {
                a += b.charAt(Math.floor(Math.random() * b.length));
            }
            a += "-";
            continue;
        }
        a += b.charAt(Math.floor(Math.random() * b.length));
    }
    a += b.charAt(Math.floor(Math.random() * b.length));
    return a;
}

// ORIGNAL GENERATOR : SERIALZ19385746
// GOLDEN : A5E8-0008-I6L7

function check(x) {
    if (typeof(x) != "string") {
        return false;
    }
    const a = x.split("");
    var b = [];
    var c = [];
    const q = new Request(".env");
    fetch(q)
    .then((response) => response.blob())
    .then((f) => {
        b = f.split("\n");
        console.log(b);
        for (var i = 0; i < b.length; i++) {
            if (b[i].startsWith("GENERATOR=")) {
                c = b[i].substring(10);
            }
        }
    });
    for (var i = 0; i < x.length; i++) {
        if (!(a[i] in c)) {
            return false;
        }
    }
    return true;
}

/*
for (var i = 0; i < i + 1; i++) {
    const a = random();
    if (check(a)) {
        console.log(i);
        console.log(a);
        console.log(check(a));
        break;
    }
}
*/
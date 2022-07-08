const crypto = require('crypto');

function sweg (word) {
    var hash = crypto.createHash('sha256')
    .update(word)
    .digest('hex');
return hash
}


console.log(sweg('yaman'))
// 96483e3b0100ef6aadb80649f4b5029502ea1b8bfa3c7d1fcbb6c8405d33b55d

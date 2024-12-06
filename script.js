document.getElementById('tonaseForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
  
    const tonase = parseFloat(document.getElementById('tonaseInput').value);
    const tonaseMin = 21;
    const tonaseMax = 24;
  
    function isTonaseValid(value) {
        if (value >= tonaseMin && value <= tonaseMax) {
            return true;
        }
        
        for (let multiplier = 2; multiplier <= 100; multiplier++) {
            const validTonaseMin = tonaseMin * multiplier;
            const validTonaseMax = tonaseMax * multiplier;
            
            if (value >= validTonaseMin && value <= validTonaseMax) {
                return true;
            }
        }
        
        return false;
    }
  
    if (!isTonaseValid(tonase)) {
        Swal.fire({
            icon: 'error',
            title: 'Tidak Memenuhi Standar',
            text: `Tonase ${tonase} tidak memenuhi standar tonase ${tonaseMin}-${tonaseMax} atau kelipatannya.`,
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Valid',
            text: `Tonase ${tonase} memenuhi standar.`,
        });
    }
});
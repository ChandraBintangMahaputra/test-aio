document.getElementById('tonaseForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
  
    const tonase = parseFloat(document.getElementById('tonaseInput').value);
    const minimumTonase = 21;
    const maximumTonase = 24;
  
    function isTonaseValid(value) {
        if (value >= minimumTonase && value <= maximumTonase) {
            return true;
        }
        
        for (let multiplier = 2; multiplier <= 100; multiplier++) {
            const validminimumTonase = minimumTonase * multiplier;
            const validmaximumTonase = maximumTonase * multiplier;
            
            if (value >= validminimumTonase && value <= validmaximumTonase) {
                return true;
            }
        }
        
        return false;
    }
  
    if (!isTonaseValid(tonase)) {
        Swal.fire({
            icon: 'error',
            title: 'Tidak Memenuhi Standar',
            text: `Tonase ${tonase} tidak memenuhi standar tonase ${minimumTonase}-${maximumTonase} atau kelipatannya.`,
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Valid',
            text: `Tonase ${tonase} memenuhi standar.`,
        });
    }
});
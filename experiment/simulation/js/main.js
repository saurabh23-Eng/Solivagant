//Your JavaScript goes in here
// DOM elements
const simulateBtn = document.getElementById('simulateBtn');
const originalBitsDisplay = document.getElementById('originalBits');
const encodedBitsDisplay = document.getElementById('encodedBits');
const demodulatedBitsDisplay = document.getElementById('demodulatedBits');
const berResultDisplay = document.getElementById('berResult');
const blockDiagramPanel = document.getElementById('blockDiagramPanel');
const resetBtn = document.getElementById('resetBtn');
const simulationProgress = document.getElementById('simulationProgress');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const resultsBtn = document.getElementById('resultsBtn');
const resultsPanel = document.getElementById('resultsPanel');

// Instruction/Procedure elements
const showInstructionsBtn = document.getElementById('showInstructionsBtn');
const showProcedureBtn = document.getElementById('showProcedureBtn');
const hideInstructionsBtn = document.getElementById('hideInstructionsBtn');
const hideProcedureBtn = document.getElementById('hideProcedureBtn');
const instructionsPanel = document.getElementById('instructionsPanel');
const procedurePanel = document.getElementById('procedurePanel');

// Chart contexts
const modulatedChartCtx = document.getElementById('modulatedChart').getContext('2d');
const noisyChartCtx = document.getElementById('noisyChart').getContext('2d');
const productChartCtx = document.getElementById('productChart').getContext('2d');
const filteredChartCtx = document.getElementById('filteredChart').getContext('2d');

// Tabs
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    });
});

// Toggle results panel
resultsBtn.addEventListener('click', () => {
    if (resultsPanel.style.display === 'block') {
        resultsPanel.style.display = 'none';
        resultsBtn.textContent = 'Show Results';
    } else {
        resultsPanel.style.display = 'block';
        resultsBtn.textContent = 'Hide Results';
    }
});

// Toggle instruction/procedure panels
showInstructionsBtn.addEventListener('click', () => {
    instructionsPanel.style.display = 'block';
    procedurePanel.style.display = 'none';
});

showProcedureBtn.addEventListener('click', () => {
    procedurePanel.style.display = 'block';
    instructionsPanel.style.display = 'none';
});

hideInstructionsBtn.addEventListener('click', () => {
    instructionsPanel.style.display = 'none';
});

hideProcedureBtn.addEventListener('click', () => {
    procedurePanel.style.display = 'none';
});

// Helper to show progress
function showProgress(percent, text) {
    simulationProgress.style.display = 'block';
    progressBar.style.width = percent + '%';
    progressText.textContent = text || 'Simulation running...';
}

// Helper to hide progress
function hideProgress() {
    simulationProgress.style.display = 'none';
    progressBar.style.width = '0%';
    progressText.textContent = '';
}

function runSimulation() {
    showProgress(10, 'Validating input...');
    setTimeout(() => {
        // Get inputs
        const bitPattern = document.getElementById('bitPattern').value.trim();
        const carrierFreq = parseInt(document.getElementById('carrierFreq').value);
        const bitDuration = parseFloat(document.getElementById('bitDuration').value);
        const noiseLevel = parseFloat(document.getElementById('noiseLevel').value);

        let errorMsg = '';
        if (!/^[01]+$/.test(bitPattern)) {
            errorMsg = 'Bit Pattern must contain only 0s and 1s (e.g., 101010).';
        } else if (isNaN(carrierFreq) || carrierFreq < 100 || carrierFreq > 10000) {
            errorMsg = 'Carrier Frequency must be between 100 and 10000 Hz.';
        } else if (isNaN(bitDuration) || bitDuration <= 0) {
            errorMsg = 'Bit Duration must be a positive number (e.g., 0.01).';
        } else if (isNaN(noiseLevel) || noiseLevel < 0) {
            errorMsg = 'Noise Level (σ) must be a non-negative number.';
        }

        if (errorMsg) {
            hideProgress();
            alert(errorMsg);
            return;
        }

        showProgress(30, 'Encoding and Modulating...');
        setTimeout(() => {
            const dataBits = bitPattern.split('').map(bit => parseInt(bit));
            const nBits = dataBits.length;
            originalBitsDisplay.textContent = dataBits.join(' ');

            // Differential Encoding
            const diffEncoded = [dataBits[0]];
            for (let i = 1; i < nBits; i++) {
                diffEncoded[i] = dataBits[i] ^ diffEncoded[i - 1];
            }
            encodedBitsDisplay.textContent = diffEncoded.join(' ');

            showProgress(50, 'DPSK Modulation...');
            setTimeout(() => {
                const sampleRate = 10000;
                const samplesPerBit = Math.floor(sampleRate * bitDuration);
                const tBit = Array.from({ length: samplesPerBit }, (_, i) => i / sampleRate);

                let modulatedSignal = [];
                for (let i = 0; i < nBits; i++) {
                    const phase = diffEncoded[i] === 1 ? Math.PI : 0;
                    const carrier = tBit.map(t => Math.cos(2 * Math.PI * carrierFreq * t + phase));
                    modulatedSignal = modulatedSignal.concat(carrier);
                }

                const tTotal = Array.from({ length: modulatedSignal.length }, (_, i) => i / sampleRate);

                showProgress(65, 'Adding Noise...');
                setTimeout(() => {
                    // Add AWGN noise
                    const noisySignal = addAWGN(modulatedSignal, noiseLevel);

                    showProgress(80, 'Demodulating...');
                    setTimeout(() => {
                        // Demodulation
                        const delayedSignal = new Array(samplesPerBit).fill(0).concat(
                            modulatedSignal.slice(0, modulatedSignal.length - samplesPerBit)
                        );

                        const productSignal = noisySignal.map((val, idx) => val * delayedSignal[idx]);

                        // Low-pass filter (moving average)
                        const filterWindow = Math.floor(samplesPerBit / 2);
                        const filteredSignal = [];
                        for (let i = 0; i < productSignal.length; i++) {
                            const start = Math.max(0, i - filterWindow);
                            const end = Math.min(productSignal.length, i + filterWindow);
                            const windowValues = productSignal.slice(start, end);
                            const avg = windowValues.reduce((sum, val) => sum + val, 0) / windowValues.length;
                            filteredSignal.push(avg);
                        }

                        // Sample middle of each bit period
                        const samplingPoints = [];
                        for (let i = 0; i < nBits; i++) {
                            const point = Math.floor(i * samplesPerBit + samplesPerBit / 2);
                            samplingPoints.push(point);
                        }

                        const sampledSignal = samplingPoints.map(point => filteredSignal[point]);

                        // Decision making
                        const demodulatedBits = sampledSignal.map(val => (val < 0 ? 1 : 0));

                        // Differential decoding
                        const decodedBits = [demodulatedBits[0]];
                        for (let i = 1; i < demodulatedBits.length; i++) {
                            decodedBits[i] = demodulatedBits[i] ^ decodedBits[i - 1];
                        }
                        demodulatedBitsDisplay.textContent = decodedBits.join(' ');

                        // BER calculation
                        let errorCount = 0;
                        for (let i = 0; i < nBits; i++) {
                            if (decodedBits[i] !== dataBits[i]) errorCount++;
                        }
                        const ber = errorCount / nBits;
                        berResultDisplay.textContent = ber.toFixed(5);

                        showProgress(95, 'Plotting Results...');
                        setTimeout(() => {
                            // Plotting with different colors
                            plotSignal(modulatedChartCtx, tTotal, modulatedSignal, 'Modulated Signal', '#6366f1');
                            plotSignal(noisyChartCtx, tTotal, noisySignal, 'Noisy Signal', '#f43f5e');
                            plotSignal(productChartCtx, tTotal, productSignal, 'Product of Delayed & Received Signals', '#10b981');
                            plotSignal(filteredChartCtx, tTotal, filteredSignal, 'Filtered Signal', '#f59e0b');

                            blockDiagramPanel.classList.add('blinking');
                            setTimeout(() => {
                                blockDiagramPanel.classList.remove('blinking');
                                hideProgress();
                                // Show results panel after simulation
                                resultsPanel.style.display = 'block';
                                resultsBtn.textContent = 'Hide Results';
                            }, 800);
                        }, 300);
                    }, 300);
                }, 300);
            }, 300);
        }, 300);
    }, 200);
}

function addAWGN(signal, sigma) {
    return signal.map(val => val + sigma * gaussianRandom());
}

// Box-Muller transform for Gaussian random numbers
function gaussianRandom() {
    let u = 0, v = 0;
    while(u === 0) u = Math.random();
    while(v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

function plotSignal(ctx, x, y, label, color) {
    if (ctx.chart) {
        ctx.chart.destroy();
    }

    ctx.chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: x,
            datasets: [{
                label: label,
                data: y,
                borderColor: color,
                borderWidth: 1.5,
                pointRadius: 0,
                fill: false,
                tension: 0.1,
            }]
        },
        options: {
            animation: false,
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'linear',
                    title: {
                        display: true,
                        text: 'Time (seconds)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Amplitude'
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                tooltip: {
                    enabled: true
                }
            },
            elements: {
                line: {
                    borderJoinStyle: 'round'
                }
            }
        }
    });
}

resetBtn.addEventListener('click', () => {
    // Reset input fields to default values
    document.getElementById('bitPattern').value = '1010101010';
    document.getElementById('carrierFreq').value = 1000;
    document.getElementById('bitDuration').value = 0.01;
    document.getElementById('noiseLevel').value = 0.1;

    // Clear results
    originalBitsDisplay.textContent = '';
    encodedBitsDisplay.textContent = '';
    demodulatedBitsDisplay.textContent = '';
    berResultDisplay.textContent = '0';

    // Clear charts
    [modulatedChartCtx, noisyChartCtx, productChartCtx, filteredChartCtx].forEach(ctx => {
        if (ctx.chart) ctx.chart.destroy();
    });
    
    // Hide results panel
    resultsPanel.style.display = 'none';
    resultsBtn.textContent = 'Show Results';
    
    // Hide instruction/procedure panels
    instructionsPanel.style.display = 'none';
    procedurePanel.style.display = 'none';
});

simulateBtn.addEventListener('click', runSimulation);

Theory: Differential Phase Shift Keying (DPSK)

Differential Phase Shift Keying (DPSK) is a type of digital modulation technique where data is represented by changes in the phase of a carrier wave, relative to the previous bit, rather than the absolute phase.

In DPSK:

A binary 1 is represented by a 180° phase shift from the previous bit.

A binary 0 is represented by no phase change from the previous bit.

This relative phase encoding eliminates the need for a coherent carrier reference at the receiver, simplifying the demodulation process.

DPSK is a variation of Phase Shift Keying (PSK) but is preferred in some systems because it allows non-coherent detection, which is less complex and more robust in noisy environments.

The modulated DPSK signal can be mathematically expressed as:

𝑠
(
𝑡
)
=
𝐴
cos
⁡
(
2
𝜋
𝑓
𝑐
𝑡
+
𝜙
(
𝑡
)
)
s(t)=Acos(2πf 
c
​
 t+ϕ(t))
where:

𝐴
A = amplitude,

𝑓
𝑐
f 
c
​
  = carrier frequency,

𝜙
(
𝑡
)
ϕ(t) = instantaneous phase determined by the differential encoding of bits.

Modulation Process:

The first bit is modulated with a reference phase (usually 0°).

Each subsequent bit’s phase depends on whether the bit is 0 (no phase change) or 1 (phase shift by 180°).

Demodulation Process:

The receiver compares the phase of the current received bit with the previous bit.

A phase difference of 180° is interpreted as bit 1.

No phase difference is interpreted as bit 0.

Advantages of DPSK:

No need for a coherent carrier at the receiver.

More robust against phase noise.

Simpler receiver design compared to coherent PSK systems.

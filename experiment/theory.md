# 🧪 Differential Phase Shift Keying (DPSK) – Theory

## 📖 Introduction

Differential Phase Shift Keying (DPSK) is a digital modulation technique where the information is encoded in the **difference between the phases of consecutive symbols** rather than the absolute phase of the signal. It is a type of **non-coherent Phase Shift Keying (PSK)**, meaning that the receiver does not require a reference carrier signal to decode the information, which simplifies hardware design.

In conventional PSK, the receiver must know the exact reference phase of the carrier wave to detect the signal correctly. In contrast, DPSK eliminates the need for phase synchronization by making decisions based on the **phase difference** from one symbol to the next.

---

## 🧠 Principle of Operation

In **binary DPSK (2-DPSK)**:

- A binary '1' is represented by a **180° phase shift** relative to the previous bit.
- A binary '0' is represented by **no change** in phase from the previous bit.

This means that each output symbol depends not only on the current input bit but also on the **previous phase state**, making it a form of differential encoding.

---

## 🔧 Modulation Process

1. An initial phase (e.g., 0°) is assumed.
2. For every input bit:
   - If bit = 0 → keep the phase the same.
   - If bit = 1 → invert the phase (add 180°).
3. The phase-modulated signal is generated using:

s(t) = A·cos(2πf_ct + φ(t))

where φ(t) is the current phase (updated as described above).

---

## 📡 Demodulation Process

At the receiver, demodulation is done by comparing the **phase** of the current received symbol with that of the previous symbol:

- If the **phase is the same**, it corresponds to bit **0**.
- If the **phase is different**, it corresponds to bit **1**.

This differential detection avoids the need for an external phase reference.

---

## 📐 Mathematical Representation

Let b(n) be the binary input bit stream. Then the differential encoded bit stream d(n) is:

d(n) = b(n) ⊕ d(n−1)

Where:
- ⊕ denotes XOR operation
- d(0) is initialized as 0 or 1 (assumed reference)

The DPSK modulated signal:

s(t) = A·cos(2πf_c·t + π·d(n))

Where:
- A = amplitude
- f_c = carrier frequency
- d(n) = phase state (0 or 1, determines phase shift of 0° or 180°)

---


## ✅ Advantages of DPSK

- No need for a carrier phase reference at the receiver (non-coherent).
- Robust against phase jitter and noise.
- Simpler and more cost-effective receiver design.
- Suitable for high-speed data transmission.

---

## ⚠️ Limitations of DPSK

- Slightly higher **bit error rate (BER)** compared to coherent schemes like BPSK under ideal conditions.
- **Error propagation**: One bit error can cause the next bit to be misinterpreted due to dependency on previous phase.
- Less efficient for higher-order modulation without advanced techniques.

---

## 📌 Applications of DPSK

- **Wireless communication** (e.g., Bluetooth)
- **RFID systems**
- **Optical fiber communication**
- **Satellite and space communications**
- **Low-complexity embedded systems**

---

## 📘 Summary

DPSK is a practical and efficient digital modulation technique particularly suited for systems where **simplicity, robustness, and low-power operation** are important. Its non-reliance on phase synchronization makes it widely used in real-world communication systems.

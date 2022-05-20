---
slug: patch-antenna-pair-with-shared-radiator
title: High-Isolated Coupling-Grounded Patch Antenna Pair with Shared Radiator
tags: [Decoupling, Patch Antenna]
---

> Reference: A. Zhang, K. Wei, Y. Hu, and Q. Guan, “High-Isolated Coupling-Grounded Patch Antenna Pair with Shared Radiator for the Application of 5G Mobile Terminals,” _IEEE Transactions on Antennas and Propagation_, 2022, doi: 10.1109/TAP.2022.3168276.

<!-- truncate -->

## Introduction

### Motivation

#### MIMO systems and mutual coupling

More new radio (NR) frequency bands are commercially used in 5G MIMO systems, increasing the number of antennas on the 5G mobile terminal.

It has been proven that the MIMO systems could effectively multiply the channel capacities, but the mutual couplings or correlations would deteriorate the throughput rate of the mobile terminals[^1].

[^1]: M. Kang and M. Alouini, “Capacity of Correlated MIMO Rayleigh Channels,” _IEEE Transactions on Wireless Communications_, vol. 5, no. 1, pp. 143–155, 2006.

#### Antenna layout in 5G mobile terminals

The change of positions of antennas: patch antennas, the same polarization, the same band.

```mermaid
graph LR
    R[Rim region]
    B[Back region]
    R --> B
```

Two desired objectives under th limited available layout areas.

```mermaid
flowchart LR
    P[Place as many antennas as possible]
    Q[High isolation and low correlations are required]
    P <--> Q
```

### Contributions

A high-isolated coupling-grounded patch (CGP) antenna pair with shared radiator is proposed.

The two feeding ports with very close distance could be decoupled greatly.

The grounded coupling pins (C-pins) are employed instead of the shorting pins (S-pins) to tune the CM impedance.

Compared with the previous studies for patch antenna pairs:

- Very high isolation
- Complementary far-field patterns
- Less occupied area

## Method

Mode cancelling method (MCM)

### Concept

High isolation performance would be obtained when the CM impedance is equal to the DM impedance.

> Both the main beam directions of the far-field patterns are deflected toward the side of the feeding port through using S-pins and C-pins.

### Design Principles

The C-pins would be the key point to control the CM because the currents on the surface of the C-pins would be enhanced with the high level of the amplitude.

The C-pins have little effect on the DM because the currents on the surface of the C-pins would be counteracted with the low level of the amplitude.

> Therefore, the C-pins provide an effective way to control the CM with weak influence on the DM.

For a symmertical 2-port antenna system, the CM and DM active $S$-parameters are:

$$
    \begin{align}
    S_{\text{CM}} &= S_{\text{11}}+S_{\text{21}}
    \tag{1} \\
    S_{\text{DM}} &= S_{\text{11}}-S_{\text{21}}
    \tag{2}
    \end{align}
$$

And the relationship between $S_{\text{21}}$ and the active $S$-parameters the the CM and DM is [^2]:

[^2]: L. Sun, Y. Li, Z. Zhang, and H. Wang, “Antenna Decoupling by Common and Differential Modes Cancellation,” _IEEE Transactions on Antennas and Propagation_, vol. 69, no. 2, pp. 672–682, 2021.

$$
    |S_{\text{21}}| = |S_{\text{CM}}-S_{\text{DM}}|/2
    \tag{3}
$$

Therefore, if we can tune the CM impedance through the C-pins to be the same as the DM impedance, CM and DM currents would be cancelled out in one of the two ports when the other single port is fed, and the high isolation performance of the CGP antenna pair would be obtained.

### Influences of User's Head and Hand

Probably no.

## Result

The measured results agree very well with the simulated results.

### Extension to Multiple Elements

Extend to four-port antennas.

## Conclusion

**Summery**:

- Decoupling of a CGP antenna pair with two feeding ports set at the distance of 0.1 $\lambda_0$ on the shared radiator

**Method**:

- C-pins have been shown to be capable of tunning the CM impedance to be the same as the DM impedance

**Performance**:

- Isolations in the 5G N79 band is approximately 25–50 dB up from only 3 dB
- Complementary far-field patterns with ECCs of less than 0.02
- Lower directivity for increased throughput rate in MIMO systems

**Experiment**:

- A prototype is fabricated and the experiment results agree very well with the simulated results
- The proposed design is extended to multiple elements with very close gap

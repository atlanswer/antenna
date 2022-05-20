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

The change of positions of antennas.

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

### Influences of User;s Head and Hand

Probably no.

## Result

## Conclusion

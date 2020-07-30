---
id: "vector"
title: "Vector"
sidebar_label: "Vector"
---

[@dimforge/rapier3d](../index.md) › [Globals](../globals.md) › [Vector](vector.md)

A vector.

## Hierarchy

* **Vector**

## Index

### Constructors

* [constructor](vector.md#constructor)

### Properties

* [x](vector.md#x)
* [y](vector.md#y)
* [z](vector.md#z)

### Methods

* [xyz](vector.md#xyz)
* [xzy](vector.md#xzy)
* [yxz](vector.md#yxz)
* [yzx](vector.md#yzx)
* [zxy](vector.md#zxy)
* [zyx](vector.md#zyx)
* [zero](vector.md#static-zero)

## Constructors

###  constructor

\+ **new Vector**(`x`: number, `y`: number, `z`: number): *[Vector](vector.md)*

Defined in rapier3d.d.ts:366

Creates a new 3D vector from its two components.

# Parameters
- `x`: the `x` component of this 3D vector.
- `y`: the `y` component of this 3D vector.
- `z`: the `z` component of this 3D vector.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | - |
`y` | number | - |
`z` | number |   |

**Returns:** *[Vector](vector.md)*

## Properties

###  x

• **x**: *number*

Defined in rapier3d.d.ts:416

The `x` component of this vector.

**`returns`** 

___

###  y

• **y**: *number*

Defined in rapier3d.d.ts:421

The `y` component of this vector.

**`returns`** 

___

###  z

• **z**: *number*

Defined in rapier3d.d.ts:426

The `z` component of this vector.

**`returns`** 

## Methods

###  xyz

▸ **xyz**(): *[Vector](vector.md)*

Defined in rapier3d.d.ts:386

Create a new 3D vector from this vector with its components rearanged as `{x, y, z}`.

This will effectively return a copy of `this`. This method exist for completeness with the
other swizzling functions.

**Returns:** *[Vector](vector.md)*

___

###  xzy

▸ **xzy**(): *[Vector](vector.md)*

Defined in rapier3d.d.ts:401

Create a new 3D vector from this vector with its components rearanged as `{x, z, y}`.

**Returns:** *[Vector](vector.md)*

___

###  yxz

▸ **yxz**(): *[Vector](vector.md)*

Defined in rapier3d.d.ts:391

Create a new 3D vector from this vector with its components rearanged as `{y, x, z}`.

**Returns:** *[Vector](vector.md)*

___

###  yzx

▸ **yzx**(): *[Vector](vector.md)*

Defined in rapier3d.d.ts:406

Create a new 3D vector from this vector with its components rearanged as `{y, z, x}`.

**Returns:** *[Vector](vector.md)*

___

###  zxy

▸ **zxy**(): *[Vector](vector.md)*

Defined in rapier3d.d.ts:396

Create a new 3D vector from this vector with its components rearanged as `{z, x, y}`.

**Returns:** *[Vector](vector.md)*

___

###  zyx

▸ **zyx**(): *[Vector](vector.md)*

Defined in rapier3d.d.ts:411

Create a new 3D vector from this vector with its components rearanged as `{z, y, x}`.

**Returns:** *[Vector](vector.md)*

___

### `Static` zero

▸ **zero**(): *[Vector](vector.md)*

Defined in rapier3d.d.ts:366

Creates a new vector filled with zeros.

**Returns:** *[Vector](vector.md)*

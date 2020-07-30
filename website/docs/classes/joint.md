---
id: "joint"
title: "Joint"
sidebar_label: "Joint"
---

[@dimforge/rapier3d](../index.md) › [Globals](../globals.md) › [Joint](joint.md)

A joint attached to two bodies.

## Hierarchy

* **Joint**

## Index

### Methods

* [anchor1](joint.md#anchor1)
* [anchor2](joint.md#anchor2)
* [axis1](joint.md#axis1)
* [axis2](joint.md#axis2)
* [bodyHandle1](joint.md#bodyhandle1)
* [bodyHandle2](joint.md#bodyhandle2)
* [frameX1](joint.md#framex1)
* [frameX2](joint.md#framex2)
* [jointType](joint.md#jointtype)

## Methods

###  anchor1

▸ **anchor1**(): *[Vector](vector.md)*

Defined in rapier3d.d.ts:159

The position of the first anchor of this joint.

The first anchor gives the position of the points application point on the
local frame of the first rigid-body it is attached to.

**Returns:** *[Vector](vector.md)*

___

###  anchor2

▸ **anchor2**(): *[Vector](vector.md)*

Defined in rapier3d.d.ts:167

The position of the second anchor of this joint.

The second anchor gives the position of the points application point on the
local frame of the second rigid-body it is attached to.

**Returns:** *[Vector](vector.md)*

___

###  axis1

▸ **axis1**(): *[Vector](vector.md) | undefined*

Defined in rapier3d.d.ts:176

The first axis of this joint, if any.

For joints where an application axis makes sence (e.g. the revolute and prismatic joins),
this returns the application axis on the first rigid-body this joint is attached to, expressed
in the local-space of this first rigid-body.

**Returns:** *[Vector](vector.md) | undefined*

___

###  axis2

▸ **axis2**(): *[Vector](vector.md) | undefined*

Defined in rapier3d.d.ts:185

The second axis of this joint, if any.

For joints where an application axis makes sence (e.g. the revolute and prismatic joins),
this returns the application axis on the second rigid-body this joint is attached to, expressed
in the local-space of this second rigid-body.

**Returns:** *[Vector](vector.md) | undefined*

___

###  bodyHandle1

▸ **bodyHandle1**(): *number*

Defined in rapier3d.d.ts:129

The unique integer identifier of the first rigid-body this joint it attached to.

**Returns:** *number*

___

###  bodyHandle2

▸ **bodyHandle2**(): *number*

Defined in rapier3d.d.ts:134

The unique integer identifier of the second rigid-body this joint is attached to.

**Returns:** *number*

___

###  frameX1

▸ **frameX1**(): *[Rotation](rotation.md)*

Defined in rapier3d.d.ts:146

The rotation quaternion that aligns this joint's first local axis to the `x` axis.

**Returns:** *[Rotation](rotation.md)*

___

###  frameX2

▸ **frameX2**(): *[Rotation](rotation.md)*

Defined in rapier3d.d.ts:151

The rotation matrix that aligns this joint's second local axis to the `x` axis.

**Returns:** *[Rotation](rotation.md)*

___

###  jointType

▸ **jointType**(): *string*

Defined in rapier3d.d.ts:141

The type of this joint given as a string.

Can return "Ball", "Revolute", "Fixed", or "Prismatic".

**Returns:** *string*

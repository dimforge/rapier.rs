---
id: "collider"
title: "Collider"
sidebar_label: "Collider"
---

[@dimforge/rapier3d](../index.md) › [Globals](../globals.md) › [Collider](collider.md)

A geometric entity that can be attached to a body so it can be affected by contacts and proximity queries.

To build a new collider, use the `ColliderBuilder` structure.

## Hierarchy

* **Collider**

## Index

### Methods

* [density](collider.md#density)
* [friction](collider.md#friction)
* [halfExtents](collider.md#halfextents)
* [handle](collider.md#handle)
* [parent](collider.md#parent)
* [parentHandle](collider.md#parenthandle)
* [radius](collider.md#radius)
* [rotation](collider.md#rotation)
* [setPositionDebug](collider.md#setpositiondebug)
* [shapeType](collider.md#shapetype)
* [translation](collider.md#translation)

## Methods

###  density

▸ **density**(): *number*

Defined in rapier3d.d.ts:70

The density of this collider.

**Returns:** *number*

___

###  friction

▸ **friction**(): *number*

Defined in rapier3d.d.ts:54

The friction coefficient of this collider.

**Returns:** *number*

___

###  halfExtents

▸ **halfExtents**(): *[Vector](vector.md) | undefined*

Defined in rapier3d.d.ts:29

The half-extents of this collider if it is has a cuboid shape.

**Returns:** *[Vector](vector.md) | undefined*

___

###  handle

▸ **handle**(): *number*

Defined in rapier3d.d.ts:44

The unique integer identifier of this collider.

**Returns:** *number*

___

###  parent

▸ **parent**(): *[RigidBody](rigidbody.md)*

Defined in rapier3d.d.ts:39

The rigid-body this collider is attached to.

**Returns:** *[RigidBody](rigidbody.md)*

___

###  parentHandle

▸ **parentHandle**(): *number*

Defined in rapier3d.d.ts:49

The unique integer identifier of the rigid-body this collider is attached to.

**Returns:** *number*

___

###  radius

▸ **radius**(): *number | undefined*

Defined in rapier3d.d.ts:34

The radius of this collider if it is has a ball shape.

**Returns:** *number | undefined*

___

###  rotation

▸ **rotation**(): *[Rotation](rotation.md)*

Defined in rapier3d.d.ts:19

The world-space orientation of this collider.

**Returns:** *[Rotation](rotation.md)*

___

###  setPositionDebug

▸ **setPositionDebug**(`x`: number, `y`: number, `z`: number, `ri`: number, `rj`: number, `rk`: number, `rw`: number): *void*

Defined in rapier3d.d.ts:65

Reserved for debug.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | - |
`y` | number | - |
`z` | number | - |
`ri` | number | - |
`rj` | number | - |
`rk` | number | - |
`rw` | number |   |

**Returns:** *void*

___

###  shapeType

▸ **shapeType**(): *any*

Defined in rapier3d.d.ts:24

The type of the shape of this collider.

**Returns:** *any*

___

###  translation

▸ **translation**(): *[Vector](vector.md)*

Defined in rapier3d.d.ts:14

The world-space position of this collider.

**Returns:** *[Vector](vector.md)*

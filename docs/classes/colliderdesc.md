---
id: "colliderdesc"
title: "ColliderDesc"
sidebar_label: "ColliderDesc"
---

[@dimforge/rapier3d](../index.md) › [Globals](../globals.md) › [ColliderDesc](colliderdesc.md)

The description of a collider to be constructed.

## Hierarchy

* **ColliderDesc**

## Index

### Properties

* [density](colliderdesc.md#density)
* [friction](colliderdesc.md#friction)
* [is_sensor](colliderdesc.md#is_sensor)
* [restitution](colliderdesc.md#restitution)

### Methods

* [ball](colliderdesc.md#static-ball)
* [cuboid](colliderdesc.md#static-cuboid)

## Properties

###  density

• **density**: *number*

Defined in rapier3d.d.ts:103

The density of the collider to be constructed.

**`returns`** 

___

###  friction

• **friction**: *number*

Defined in rapier3d.d.ts:108

The friction coefficient of the collider to be constructed.

**`returns`** 

___

###  is_sensor

• **is_sensor**: *boolean*

Defined in rapier3d.d.ts:113

Is this collider a sensor?

**`returns`** 

___

###  restitution

• **restitution**: *number*

Defined in rapier3d.d.ts:118

The restitution coefficient of the collider to be costructed.

**`returns`** 

## Methods

### `Static` ball

▸ **ball**(`radius`: number): *[ColliderDesc](colliderdesc.md)*

Defined in rapier3d.d.ts:85

Create a new collider descriptor with a ball shape.

# Parameters
- `radius`: the radius of the ball.

**Parameters:**

Name | Type |
------ | ------ |
`radius` | number |

**Returns:** *[ColliderDesc](colliderdesc.md)*

___

### `Static` cuboid

▸ **cuboid**(`hx`: number, `hy`: number, `hz`: number): *[ColliderDesc](colliderdesc.md)*

Defined in rapier3d.d.ts:98

Creates a new collider descriptor with a cuboid shape.

# Parameters
- `hx`: the half-width of the rectangle along its local `x` axis.
- `hy`: the half-width of the rectangle along its local `y` axis.
- `hz`: the half-width of the rectangle along its local `z` axis.

**Parameters:**

Name | Type |
------ | ------ |
`hx` | number |
`hy` | number |
`hz` | number |

**Returns:** *[ColliderDesc](colliderdesc.md)*
